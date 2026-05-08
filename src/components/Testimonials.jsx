const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    company: "TechStart Inc.",
    content: "MAYA Technologies transformed our outdated web platform into a modern, scalable solution. Their full-stack team delivered 40% faster load times and 3x conversion rates. Exceptional work!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Lisa Chen",
    company: "HealthTech Solutions",
    content: "The iOS app they built for us is flawless. Swift development was top-notch, and their attention to Apple Human Interface Guidelines made it feel native. App Store feature!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "David Rodriguez",
    company: "FinTech Global",
    content: "MERN stack expertise at its finest. They built our fintech dashboard with real-time data, security compliance, and beautiful React components. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 h-full"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover mr-4 shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;