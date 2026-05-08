import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HeroServices = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary-700 via-blue-700 to-indigo-800 py-40">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-20 -right-40 w-80 h-80 bg-linear-to-r from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-linear-to-r from-emerald-400/20 to-transparent rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center space-x-2 mb-8 text-sm text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
          </nav>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
            Our Services
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Complete digital solutions from custom web development to native iOS apps, full-stack MERN applications, and enterprise cloud solutions
          </p>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link 
              to="#web" 
              className="group px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl text-white font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:shadow-2xl hover:scale-105"
            >
              Web Development
              <ArrowDown className="w-5 h-5 inline ml-2 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="#mobile" 
              className="group px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl text-white font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:shadow-2xl hover:scale-105"
            >
              Mobile Apps
              <ArrowDown className="w-5 h-5 inline ml-2 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="#ios" 
              className="group px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl text-white font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:shadow-2xl hover:scale-105"
            >
              iOS Development
              <ArrowDown className="w-5 h-5 inline ml-2 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="#mern" 
              className="group px-8 py-4 bg-white/20 backdrop-blur-xl rounded-3xl text-white font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:shadow-2xl hover:scale-105"
            >
              MERN Stack
              <ArrowDown className="w-5 h-5 inline ml-2 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <Link 
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-primary-700 font-black text-2xl rounded-3xl shadow-3xl hover:shadow-4xl hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50 group"
          >
            Start Your Project
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;