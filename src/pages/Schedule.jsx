import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { bookingApi } from '../api/client';
import { AVAILABLE_TIMES, SERVICES } from '../constants/contactData';

const Schedule = () => {
  const { id } = useParams(); // For rescheduling
  const navigate = useNavigate();
  const [isRescheduling, setIsRescheduling] = useState(!!id);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  useEffect(() => {
    if (id) {
      const fetchBooking = async () => {
        try {
          const booking = await bookingApi.getBooking(id);
          // Format date for input type="date"
          const formattedDate = new Date(booking.date).toISOString().split('T')[0];
          setFormData({
            ...booking,
            date: formattedDate
          });
        } catch (err) {
          setError('Failed to load booking details.');
        }
      };
      fetchBooking();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      let response;
      if (isRescheduling) {
        response = await bookingApi.updateBooking(id, formData);
      } else {
        response = await bookingApi.schedule(formData);
      }

      console.log('Booking successful:', response);
      setIsSubmitted(true);
      setIsLoading(false);

      // Optional: reset after some time if they want to stay on the page
      // setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      console.error('Booking submission error:', err);
      setError(err.message || 'Failed to process booking. Please try again.');
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {isRescheduling ? 'Success! Call Rescheduled' : 'Success! Call Scheduled'}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We've received your booking. A confirmation email has been sent to <span className="font-bold text-primary-600">{formData.email}</span>.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full btn-primary py-4 text-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary-600 font-bold mb-8 transition-colors group"
        >
          <ArrowLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-5">
            {/* Sidebar Info */}
            <div className="lg:col-span-2 bg-linear-to-br from-primary-600 to-blue-800 p-12 text-white">
              <h1 className="text-4xl font-black mb-6 leading-tight">
                {isRescheduling ? 'Reschedule Your Call' : 'Schedule a Strategy Session'}
              </h1>
              <p className="text-blue-100 text-lg mb-12 opacity-90">
                Pick a time that works best for you. We'll discuss your project requirements and how we can help you grow.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Duration</p>
                    <p className="font-bold text-xl">30 - 45 Minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Availability</p>
                    <p className="font-bold text-xl">Mon - Fri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-12">
              {error && (
                <div className="mb-8 p-4 bg-red-50 border-2 border-red-100 rounded-2xl flex items-center gap-3 text-red-700">
                  <AlertCircle className="w-6 h-6" />
                  <p className="font-bold">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Select Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Select Time</label>
                    <select
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium appearance-none"
                    >
                      <option value="">Choose a time</option>
                      {AVAILABLE_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Interested Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium appearance-none"
                  >
                    <option value="">Select service (optional)</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">Anything else we should know?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-primary-500 focus:bg-white transition-all outline-hidden font-medium resize-none"
                      placeholder="Share some details about your project..."
                    />
                  </div>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full btn-primary py-5 text-xl font-black shadow-3xl transform hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : isRescheduling ? 'Confirm Reschedule' : 'Confirm Selection'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
