import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites & web apps built with React, Next.js, Node.js, and modern frameworks.",
    icon: "💻",
    gradient: "from-blue-500 to-indigo-600",
    stats: "250+ Projects",
    tech: ["React", "Next.js", "Node.js", "Tailwind"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native & cross-platform apps for iOS, Android using React Native, Flutter, Swift.",
    icon: "📱",
    gradient: "from-emerald-500 to-teal-600",
    stats: "120+ Apps",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Complete solutions from frontend to backend with MERN, MEAN stacks.",
    icon: "🔗",
    gradient: "from-orange-500 to-red-600",
    stats: "50+ Developers",
    tech: ["MERN", "MEAN", "Django", "Laravel"]
  },
  {
    id: 4,
    title: "iOS Development",
    description: "Native iOS apps with Swift, SwiftUI, and Apple ecosystem expertise.",
    icon: "🍎",
    gradient: "from-gray-400 to-gray-700",
    stats: "80+ Apps",
    tech: ["Swift", "SwiftUI", "Objective-C"]
  },
  {
    id: 5,
    title: "Front-end Development",
    description: "Beautiful, responsive UIs with modern frameworks and design systems.",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-600",
    stats: "300+ Pages",
    tech: ["React", "Vue", "Angular", "Svelte"]
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    description: "Scalable cloud infrastructure on AWS, Azure, and DevOps automation.",
    icon: "☁️",
    gradient: "from-indigo-500 to-purple-600",
    stats: "30+ Deployments",
    tech: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Our Core Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in modern technologies to deliver exceptional digital experiences 
            across all platforms and industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-10 rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 border border-gray-100 hover:border-primary-200 overflow-hidden h-full"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl scale-150 group-hover:scale-100`} />
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Service Icon */}
                <div className={`w-20 h-20 mx-auto mb-8 rounded-3xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-primary-500/25 ${service.gradient}`}>
                  <span>{service.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center group-hover:text-primary-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-8 flex-1 text-center leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                  {service.tech.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 hover:bg-primary-50 text-sm font-semibold rounded-xl text-gray-700 hover:text-primary-600 transition-all duration-200 group-hover:scale-105">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-lg font-bold text-primary-600 bg-primary-50 px-5 py-2 rounded-2xl shadow-md">
                    {service.stats}
                  </span>
                  <Link
                    to="/services"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-bold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn More 
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-32">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of expert developers is ready to bring your vision to life with cutting-edge technology.
          </p>
          <Link to="/contact" className="btn-primary px-12 py-6 text-xl text-white">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;