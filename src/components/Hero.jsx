import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-primary to-indigo-900 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"
            style={{
              background: `hsl(var(--primary), 70%)`,
              top: `${20 + i * 20}%`,
              right: `${10 + i * 30}%`,
              animationDelay: `${i * 1000}ms`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-12 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-sm font-semibold text-white border border-white/30">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              🚀 Award Winning Agency
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
                Transform Your{' '}
                <span className="bg-linear-to-r from-white via-blue-100 to-transparent bg-clip-text text-transparent">
                  Digital Vision
                </span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-lg leading-relaxed">
                MAYA Technologies crafts cutting-edge web & mobile solutions that drive growth. 
                From startups to enterprises, we build digital experiences that convert.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/schedule" className="px-8 py-3 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-2xl hover:bg-white/20 transition-all border border-white/20 text-center">
                Schedule Call
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Expert Developers' },
                { value: '3+', label: 'Years Experience' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-blue-100 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt="Digital Innovation"
                className="w-full h-96 md:h-137.5 lg:h-150 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </div>
            <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-transparent to-blue-600/20 rounded-3xl blur-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}