import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactApi } from '../api/client';
import { SERVICES, BUDGETS } from '../constants/contactData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState({ type: '', message: '' });

  const services = SERVICES;
  const budgets = BUDGETS;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    setSubmissionStatus({ type: '', message: '' });

    try {
      await contactApi.submitForm(formData);
      
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setIsLoading(false);
      setSubmissionStatus({
        type: 'error',
        message: error.message || 'Could not connect to the server. Please check your connection.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-36 bg-linear-to-br from-primary-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">Get In Touch</h1>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto mb-12">
            Ready to start your web, mobile, iOS, or full-stack project? Send us a message and we'll respond within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <button className="btn-primary px-12 py-6 text-xl shadow-3xl">Start Project</button>
            <Link to="/schedule" className="px-12 py-6 bg-white/20 backdrop-blur-xl text-white font-bold text-xl rounded-3xl hover:bg-white/30 transition-all border border-white/30 shadow-2xl">
              Schedule Call
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <div className={isSubmitted ? 'opacity-50 pointer-events-none' : ''}>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12">Send Message</h2>

              {submissionStatus.message && submissionStatus.type === 'error' && (
                <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-3xl flex items-center gap-4 text-red-700 animate-in fade-in slide-in-from-top-4 duration-300">
                  <AlertCircle className="w-8 h-8 shrink-0" />
                  <p className="text-lg font-bold">{submissionStatus.message}</p>
                </div>
              )}

              {isSubmitted ? (
                <div className="bg-linear-to-r from-green-50 to-emerald-50 border-4 border-green-200/50 rounded-3xl p-16 text-center shadow-2xl">
                  <CheckCircle className="w-28 h-28 text-green-500 mx-auto mb-8 animate-bounce" />
                  <h3 className="text-4xl font-black text-green-800 mb-6">Thank You!</h3>
                  <p className="text-2xl text-green-700 mb-8 leading-relaxed">
                    Your message has been sent successfully. Our team will review it and get back to you within 24 hours.
                  </p>
                  <div className="bg-white/50 px-8 py-4 rounded-2xl inline-block">
                    <Clock className="w-6 h-6 text-green-600 inline mr-2" />
                    <span className="font-bold">Response within 24 hours.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-5 rounded-3xl border-2 text-lg shadow-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 font-medium ${errors.name
                          ? 'border-red-300 bg-red-50 focus:border-red-500'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                          }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 mt-3 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-5 rounded-3xl border-2 text-lg shadow-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 font-medium ${errors.email
                          ? 'border-red-300 bg-red-50 focus:border-red-500'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                          }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 mt-3 font-medium">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-bold text-gray-900 mb-4">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 rounded-3xl border-2 text-lg shadow-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 font-medium ${errors.phone
                        ? 'border-red-300 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                        }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 mt-3 font-medium">{errors.phone}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-6 py-5 rounded-3xl border-2 text-lg shadow-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 font-medium bg-white ${errors.service
                          ? 'border-red-300 bg-red-50 focus:border-red-500'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                          }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-500 mt-3 font-medium">{errors.service}</p>}
                    </div>

                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-6 py-5 rounded-3xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-lg font-medium bg-white shadow-lg"
                      >
                        <option value="">Select budget</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-bold text-gray-900 mb-4">Project Details *</label>
                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 rounded-3xl border-2 text-lg shadow-lg focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 resize-vertical transition-all duration-300 font-medium ${errors.message
                        ? 'border-red-300 bg-red-50 focus:border-red-500'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                        }`}
                      placeholder="Tell us about your project: requirements, timeline, goals, challenges..."
                    />
                    {errors.message && <p className="text-red-500 mt-3 font-medium">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    className="w-full btn-primary py-8 px-12 text-2xl font-black shadow-4xl hover:shadow-5xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-4 h-10 w-10 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-10 h-10 mr-4 inline" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-16">Contact Information</h2>

              <div className="space-y-8">
                {/* Email */}
                <a href="mailto:mayatechnology40@gmail.com" className="group flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 cursor-pointer">
                  <div className="w-20 h-20 bg-linear-to-r from-primary-600 to-blue-700 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Email Us</h4>
                    <p className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors mb-2 break-all">
                      mayatechnology40@gmail.com
                    </p>
                    <p className="text-lg text-gray-600">Response within 24 hours</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+917300821264" className="group flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 cursor-pointer">
                  <div className="w-20 h-20 bg-linear-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Call Us</h4>
                    <p className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors mb-2">
                      +91 7300821264
                    </p>
                    <p className="text-lg text-gray-600">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </a>

                {/* Location */}
                <div className="group flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-purple-200 cursor-pointer">
                  <div className="w-20 h-20 bg-linear-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Visit Us</h4>
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                      Phase 5, Mohali, SAS Nagar
                    </p>
                    <p className="text-lg text-gray-600">Punjab, India - 160062</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;