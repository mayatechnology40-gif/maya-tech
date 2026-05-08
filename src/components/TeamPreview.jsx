const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    experience: "5+ years",
    social: "#"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "iOS & Swift Developer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    skills: ["Swift", "SwiftUI", "Core Data", "Firebase"],
    experience: "4+ years",
    social: "#"
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "MERN Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    skills: ["MongoDB", "Express", "React", "Node"],
    experience: "6+ years",
    social: "#"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Front-end Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    skills: ["React", "Tailwind", "TypeScript", "Next.js"],
    experience: "3+ years",
    social: "#"
  }
];

const TeamPreview = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Meet Our Experts
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our team of passionate developers with expertise in web, mobile, iOS, Swift, front-end, full-stack, and MERN stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 p-8 h-full border border-gray-100 hover:border-primary-200"
            >
              {/* Image */}
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xl font-semibold text-gray-600 mb-4">
                  {member.role}
                </p>
                <p className="text-primary-600 font-bold text-lg mb-6">
                  {member.experience}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-2 bg-primary-50 text-primary-700 text-sm font-semibold rounded-xl border border-primary-200">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-500">LinkedIn</span>
                  <a href={member.social} className="w-12 h-12 bg-primary-100 hover:bg-primary-200 rounded-2xl flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <a href="/team" className="btn-primary px-12 py-6 text-xl inline-flex items-center">
            Meet Full Team
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;