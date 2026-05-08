const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
          <h1 className="text-5xl md:text-7xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Last updated: January 1, 2024
          </p>
          <p className="text-xl text-gray-500 mt-4">
            Please read these Terms of Service carefully before using our services.
          </p>
        </div>
        
        {/* Content */}
        <div className="space-y-16 bg-white rounded-3xl shadow-2xl p-16 border border-gray-200">
          <section>
            <h2 className="text-4xl font-black text-gray-900 mb-8">1. Acceptance of Terms</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              By accessing and using MAYA Technologies website and services, you agree to be bound by these Terms of Service. 
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-black text-gray-900 mb-8">2. Services Description</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>✨ Custom web development (React, Next.js)</li>
                  <li>📱 Mobile app development (React Native, Flutter)</li>
                  <li>🍎 Native iOS development (Swift, SwiftUI)</li>
                  <li>🔗 Full-stack development (MERN, MEAN stacks)</li>
                  <li>🎨 UI/UX design & prototyping</li>
                  <li>☁️ DevOps & cloud deployment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Process</h3>
                <div className="space-y-4 text-lg text-gray-700">
                  <p><strong>Discovery:</strong> Requirements gathering & planning</p>
                  <p><strong>Design:</strong> Wireframes, UI/UX design approval</p>
                  <p><strong>Development:</strong> Agile sprints with weekly updates</p>
                  <p><strong>Testing:</strong> QA, security audit, performance optimization</p>
                  <p><strong>Deployment:</strong> Production launch & monitoring</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-black text-gray-900 mb-8">3. Payment Terms</h2>
            <div className="grid md:grid-cols-2 gap-8 p-8 bg-linear-to-r from-blue-50 to-indigo-50 rounded-3xl border-4 border-blue-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Milestone Payments</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>30%</strong> - Project kickoff & design approval</li>
                  <li><strong>30%</strong> - Development milestone 1</li>
                  <li><strong>20%</strong> - Development milestone 2 & testing</li>
                  <li><strong>20%</strong> - Final delivery & deployment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg">Credit Card</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-16 border-t border-gray-200">
            <h2 className="text-4xl font-black text-gray-900 mb-12">Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/contact" className="group p-10 bg-linear-to-r from-primary-600 to-blue-700 text-white rounded-3xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center">
                <svg className="w-20 h-20 mx-auto mb-6 opacity-75 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h4 className="text-2xl font-bold mb-4">Start Project</h4>
                <p className="opacity-90 text-lg">Get free consultation</p>
              </a>
              <a href="mailto:support@mayatech.com" className="group p-10 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-3xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center">
                <svg className="w-20 h-20 mx-auto mb-6 opacity-75 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 0l-6.36 6.36m0 0L5.636 5.636M12 12l6.364 6.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-2xl font-bold mb-4">Ask Question</h4>
                <p className="opacity-90 text-lg">support@mayatech.com</p>
              </a>
              <a href="#" className="group p-10 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-3xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center">
                <svg className="w-20 h-20 mx-auto mb-6 opacity-75 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h4 className="text-2xl font-bold mb-4">Download Terms</h4>
                <p className="opacity-90 text-lg">PDF Document</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;