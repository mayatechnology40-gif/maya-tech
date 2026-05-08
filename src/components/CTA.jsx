import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-32 bg-linear-to-r from-primary-600 via-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Ready to Start Your{' '}
          <span className="bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>
        <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your vision and build something amazing together
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/contact"
            className="btn-primary px-16 py-8 text-2xl shadow-3xl w-full sm:w-auto"
          >
            Get Free Quote
          </Link>
          <Link 
            to="/services"
            className="inline-flex items-center px-12 py-8 bg-white/20 backdrop-blur-xl text-white font-bold text-xl rounded-3xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:shadow-2xl"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;