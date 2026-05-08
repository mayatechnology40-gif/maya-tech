import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-primary-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="relative mb-16">
          <div className="w-64 h-64 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 mx-auto mb-12 flex items-center justify-center">
            <div className="text-9xl font-black text-white/80">404</div>
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-linear-to-r from-primary-500 to-blue-500 rounded-3xl blur-xl animate-pulse opacity-30"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl animate-pulse opacity-30 [animation-delay:1s]"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-6">Page Not Found</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link
            to="/"
            className="group inline-flex items-center px-12 py-6 bg-white text-primary-600 font-black text-xl rounded-3xl shadow-3xl hover:shadow-4xl hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50"
          >
            <ArrowLeft className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-12 py-6 bg-linear-to-r from-primary-600 to-blue-700 text-white font-black text-xl rounded-3xl shadow-3xl hover:shadow-4xl hover:-translate-y-1 transition-all duration-300"
          >
            Get Help
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-8 pt-16 border-t border-white/20">
          <Link to="/" className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <h4 className="font-bold text-xl text-white mb-2 group-hover:text-primary-400">Home</h4>
            <p className="text-gray-400 text-sm">Main page</p>
          </Link>
          <Link to="/services" className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <h4 className="font-bold text-xl text-white mb-2 group-hover:text-emerald-400">Services</h4>
            <p className="text-gray-400 text-sm">Our services</p>
          </Link>
          <Link to="/portfolio" className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <h4 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400">Portfolio</h4>
            <p className="text-gray-400 text-sm">Our work</p>
          </Link>
          <Link to="/contact" className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <h4 className="font-bold text-xl text-white mb-2 group-hover:text-orange-400">Contact</h4>
            <p className="text-gray-400 text-sm">Get in touch</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;