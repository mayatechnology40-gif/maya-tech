const About = () => {
  return (
    <>
      <section className="relative py-36 bg-linear-to-br from-gray-900 via-primary-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-12">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
                About MAYA
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-300">
                  Technologies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-lg">
                Founded in 2021, MAYA Technologies is a full-service digital agency specializing in web development, mobile apps, iOS development, and full-stack solutions. 
                Our team of 50+ developers delivers innovative solutions for startups and enterprises worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-4xl font-black text-primary-400 mb-2">50+</div>
                  <div className="text-gray-400">Developers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary-400 mb-2">500+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="About MAYA"
                className="rounded-3xl shadow-3xl w-full h-125 object-cover border-8 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Mission
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center p-12">
              <div className="w-24 h-24 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Innovation First</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                We leverage cutting-edge technologies to create solutions that give you a competitive edge.
              </p>
            </div>
            <div className="text-center p-12">
              <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Client Success</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your success is our success. We partner with you to achieve measurable business results.
              </p>
            </div>
            <div className="text-center p-12">
              <div className="w-24 h-24 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Lightning Fast</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                We deliver high-quality solutions on time, every time, without compromising excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;