import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      id: 1,
      question: "What technologies do you use for web development?",
      answer: "We specialize in modern JavaScript frameworks including React, Next.js, Vue.js, Angular, and Svelte. For backend, we use Node.js, Express, Django, Laravel, and Ruby on Rails. Our frontend stack includes Tailwind CSS, TypeScript, and Headless UI."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity:\n\n• Simple websites: 2-4 weeks\n• Web applications: 6-12 weeks\n• Mobile apps: 8-16 weeks\n• Full-stack platforms: 12-24 weeks\n\nWe provide detailed timelines during discovery phase."
    },
    {
      id: 3,
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes! We offer comprehensive maintenance packages:\n\n• Bug fixes & updates\n• Performance optimization\n• Security monitoring\n• Feature additions\n• 24/7 monitoring & support\n\nMonthly plans start at $500/month."
    },
    {
      id: 4,
      question: "What is your development process?",
      answer: "Our proven 5-phase process:\n\n1. **Discovery** - Requirements & planning (1 week)\n2. **Design** - Wireframes & UI/UX approval (1-2 weeks)\n3. **Development** - Agile sprints with weekly demos (60% time)\n4. **Testing** - QA, security, performance (2 weeks)\n5. **Deployment** - Launch & 30-day support (1 week)"
    },
    {
      id: 5,
      question: "Do you sign NDAs?",
      answer: "Absolutely! We sign NDAs for all projects. Your ideas and business information are protected by:\n\n• Legal NDAs\n• Secure project management\n• Encrypted communication\n• Source code ownership transfer\n• No reuse of your designs/code"
    },
    {
      id: 6,
      question: "What is your pricing model?",
      answer: "We offer flexible pricing:\n\n• **Fixed Price** - For well-defined projects\n• **Time & Materials** - For evolving requirements\n• **Retainer** - Monthly ongoing work\n• **Milestone Payments** - 30/30/20/20 structure\n\nAverage project cost: $15K-$150K+"
    }
  ];

  const toggleFAQ = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <section className="py-36 bg-linear-to-br from-gray-900 via-primary-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
            Everything you need to know before starting your web, mobile, iOS, or full-stack project with us
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group bg-linear-to-r from-gray-50 to-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {faq.question}
                  </h3>
                  {openItems[faq.id] ? (
                    <Minus className="w-8 h-8 text-gray-500 group-hover:text-primary-600 transition-colors" />
                  ) : (
                    <Plus className="w-8 h-8 text-gray-500 group-hover:text-primary-600 transition-colors" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${openItems[faq.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div 
                    className="px-8 pb-8 pt-4 text-lg text-gray-700 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-24 p-16 bg-linear-to-r from-primary-600 to-blue-700 text-white rounded-3xl shadow-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Still Have Questions?</h2>
            <p className="text-2xl mb-12 max-w-2xl mx-auto opacity-95">
              Get personalized answers from our expert team
            </p>
            <a href="/contact" className="btn-primary px-16 py-8 text-2xl inline-flex items-center shadow-4xl hover:shadow-5xl">
              Ask Your Question
              <svg className="w-8 h-8 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;