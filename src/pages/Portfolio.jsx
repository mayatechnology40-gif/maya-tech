import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Full-stack e-commerce solution with React, Node.js, Stripe integration & admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Cross-platform fitness app with React Native, Firebase & AI workout recommendations",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#"
    },
    {
      id: 3,
      title: "iOS Social App",
      category: "ios",
      image: "https://img.magnific.com/premium-photo/closeup-shot-grid-various-colorful-social-media-apps_14117-877114.jpg",
      description: "Native iOS social app with SwiftUI, Core Data & real-time messaging",
      tech: ["SwiftUI", "Swift", "Core Data", "Firebase"],
      link: "#"
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Modern SaaS dashboard with real-time analytics, charts & multi-tenant architecture",
      tech: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
      link: "#"
    },
    {
      id: 5,
      title: "FinTech Mobile App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Secure fintech app with biometric auth, real-time transactions & blockchain integration",
      tech: ["React Native", "Blockchain", "Biometrics"],
      link: "#"
    },
    {
      id: 6,
      title: "MERN Admin Panel",
      category: "mern",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Complete MERN stack admin panel with authentication, CRUD operations & analytics",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#"
    }
  ];

  const filteredItems = activeFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <section className="py-36 bg-linear-to-br from-gray-900 via-primary-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">Portfolio</h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
            Our best work showcasing web apps, mobile apps, iOS development, MERN stack, and full-stack projects
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {['all', 'web', 'mobile', 'ios', 'mern'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg ${
                  activeFilter === filter
                    ? 'bg-linear-to-r from-primary-600 to-blue-700 text-white shadow-primary-500/50 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {filter === 'all' ? 'All Projects' : 
                 filter === 'web' ? 'Web Apps' :
                 filter === 'mobile' ? 'Mobile Apps' :
                 filter === 'ios' ? 'iOS Apps' : 'MERN Stack'}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 h-full border border-gray-100"
              >
                <div className="relative overflow-hidden rounded-t-3xl h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-8">
                  <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-bold rounded-xl mb-4">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-2 bg-gray-100 hover:bg-primary-50 text-sm font-semibold rounded-xl text-gray-700 hover:text-primary-600 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={item.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;