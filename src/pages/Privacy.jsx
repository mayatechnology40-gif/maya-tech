const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
          <h1 className="text-5xl md:text-7xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Last updated: January 1, 2024
          </p>
          <p className="text-xl text-gray-500 mt-4">
            MAYA Technologies is committed to protecting your privacy. We value your trust and handle your data responsibly.
          </p>
        </div>
        
        {/* Content */}
        <div className="space-y-16 bg-white rounded-3xl shadow-2xl p-16 border border-gray-200">
          <section>
            <h2 className="text-4xl font-black text-gray-900 mb-8">1. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4 shrink-0"></span>
                    Name, email, phone number (contact forms)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4 shrink-0"></span>
                    Company details, project requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4 shrink-0"></span>
                    IP address, browser type (analytics)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Non-Personal Information</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></span>
                    Pages visited, time spent on site
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></span>
                    Referral sources, device information
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></span>
                    Cookies and usage analytics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-black text-gray-900 mb-8">2. How We Use Your Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-linear-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-200">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Respond to Inquiries</h3>
                <p className="text-lg text-gray-700">Contact you regarding your project requirements and provide quotes</p>
              </div>
              <div className="text-center p-8 bg-linear-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200">
                <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improve Services</h3>
                <p className="text-lg text-gray-700">Analyze usage patterns to enhance our website and services</p>
              </div>
              <div className="text-center p-8 bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-200">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Compliance</h3>
                <p className="text-lg text-gray-700">Comply with legal obligations and protect our rights</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-black text-gray-900 mb-8">3. Data Security</h2>
            <div className="bg-linear-to-r from-orange-50 to-red-50 p-12 rounded-3xl border-4 border-orange-200">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-24 h-24 bg-linear-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">Your data is protected</h3>
                <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                  We use industry-standard SSL encryption, secure servers, and regular security audits to protect your information.
                </p>
                <p className="text-xl font-bold text-orange-700 bg-orange-100 px-8 py-4 rounded-2xl inline-block">
                  GDPR & CCPA Compliant
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16 border-t border-gray-200">
            <h2 className="text-4xl font-black text-gray-900 mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="mailto:privacy@mayatech.com" className="group p-8 bg-linear-to-r from-primary-600 to-blue-700 text-white rounded-3xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center">
                <Mail className="w-16 h-16 mx-auto mb-6 opacity-75 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-2xl font-bold mb-2">Privacy Questions</h4>
                <p className="opacity-90">privacy@mayatech.com</p>
              </a>
              <a href="/contact" className="group p-8 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-3xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center">
                <Phone className="w-16 h-16 mx-auto mb-6 opacity-75 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-2xl font-bold mb-2">Support</h4>
                <p className="opacity-90">+1 (555) 123-4567</p>
              </a>
              <div className="p-8 bg-gray-100 rounded-3xl text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Download Policy</h4>
                <a href="#" className="btn-primary px-8 py-4 text-lg inline-flex items-center">
                  Download PDF
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L7.5 18M7.5 18l-.396.396c-.392.392-.98.592-1.75.592-.847 0-1.546-.2-2.032-.588a2.928 2.928 0 01-.788-.772c-.23-.45-.336-.985-.252-1.49.336-.528.516-1.131.516-1.751 0-.62-.18-1.223-.516-1.751-.572-.9-.139-1.979.533-2.684.672-.723 1.696-1.197 2.809-1.197.72 0 1.45.183 2.094.563l.396.396m0 0L12 10l5.5 5.5m0 0L19.5 18m.396-.396c.392-.392.98-.592 1.75-.592.847 0 1.546.2 2.032.588a2.928 2.928 0 01.788.772c.23.45.336.985.252 1.49-.336.528-.516 1.131-.516 1.751 0 .62.18 1.223.516 1.751.572.9.139 1.979-.533 2.684-.672.723-1.696 1.197-2.809 1.197-.72 0-1.45-.183-2.094-.563l-.396-.396z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;