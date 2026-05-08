import { Link } from 'react-router-dom';
import {
  Mail, 
  Phone,
  MapPin,
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-linear-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <img 
                src="/logo.png" 
                alt="Maya Technologies Logo" 
                className="w-14 h-14 object-contain rounded-xl shadow-lg"
              />
              <span className="text-2xl font-black">MAYA Technologies</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Building innovative digital solutions for startups and enterprises worldwide with expertise in web, mobile, iOS, and full-stack development.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors block py-1">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors block py-1">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors block py-1">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors block py-1">Portfolio</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors block py-1">Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services#web" className="text-gray-400 hover:text-white transition-colors block py-1">Web Development</Link></li>
              <li><Link to="/services#mobile" className="text-gray-400 hover:text-white transition-colors block py-1">Mobile Apps</Link></li>
              <li><Link to="/services#ios" className="text-gray-400 hover:text-white transition-colors block py-1">iOS Development</Link></li>
              <li><Link to="/services#mern" className="text-gray-400 hover:text-white transition-colors block py-1">MERN Stack</Link></li>
              <li><Link to="/services#frontend" className="text-gray-400 hover:text-white transition-colors block py-1">Front-end Dev</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-8">Get In Touch</h4>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-colors">
                <Mail size={24} className="text-primary-600 mt-1 shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer break-all">mayatechnology40@gmail.com</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-colors">
                <Phone size={24} className="text-primary-600 mt-1 shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">+91 7300821264</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-colors">
                <MapPin size={24} className="text-primary-600 mt-1 shrink-0" />
                <span className="text-gray-400 max-w-xs leading-relaxed">Phase 5, Mohali, SAS Nagar, Punjab, India - 160062</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-12 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 mb-6 md:mb-0">
              © 2024 MAYA Technologies. All rights reserved. | Built with ❤️ for digital innovation.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40 border-4 border-white/20 flex items-center justify-center"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;