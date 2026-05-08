import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "ShopSphere",
    description: "Full-stack e-commerce solution with React, Node.js, Stripe & advanced admin dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    category: "E-Commerce"
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    subtitle: "FitTrack Pro",
    description: "Cross-platform fitness tracking app with React Native, Firebase & AI workout recommendations",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "Firebase", "Redux", "AI/ML"],
    category: "Mobile App"
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    subtitle: "Analytics Pro",
    description: "Modern SaaS dashboard with real-time analytics, charts & multi-tenant architecture",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    category: "Web App"
  },
  {
    id: 4,
    title: "iOS Social App",
    subtitle: "ConnectSphere",
    description: "Native iOS social networking app with SwiftUI, Core Data & push notifications",
    image: "https://img.freepik.com/premium-photo/closeup-shot-grid-various-colorful-social-media-apps_14117-877114.jpg",
    tech: ["SwiftUI", "Core Data", "Firebase", "Swift"],
    category: "iOS App"
  }
];

const PortfolioPreview = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our recent work showcases our expertise across web, mobile, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/portfolio"
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-50 to-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 h-96"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-xl">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <h4 className="text-lg font-semibold text-gray-600 mb-4">
                  {project.subtitle}
                </h4>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary-600">View Case Study</span>
                  <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-24">
          <Link 
            to="/portfolio" 
            className="btn-primary px-12 py-6 text-xl inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;