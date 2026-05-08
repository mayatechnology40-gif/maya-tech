const Team = () => {
  return (
    <>
      <section className="py-36 bg-linear-to-r from-primary-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">Our Team</h1>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto">
            50+ expert developers specializing in web, mobile, iOS, Swift, front-end, full-stack, and MERN stack development
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards - similar to TeamPreview but more detailed */}
            {/* Add 12+ team members here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;