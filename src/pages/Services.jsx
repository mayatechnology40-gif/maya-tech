import ServicesSection from '../components/ServicesSection';
import Hero from '../components/HeroServices';

const Services = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      {/* Additional services details sections */}
      <section id="web" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
                Web Development
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build responsive, fast, and scalable web applications using modern technologies like React, Next.js, and Node.js.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4"></span>
                  React, Vue, Angular, Svelte
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4"></span>
                  Next.js, Nuxt.js, Gatsby
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4"></span>
                  Node.js, Express, Django
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Web Development"
                className="rounded-3xl shadow-2xl w-full h-125 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;