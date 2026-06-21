function About() {
  return (
    <section id="about" className="py-20 px-8 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-pink-100">
          <h2 className="text-3xl font-bold text-pink-600 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            About Me
          </h2>
          
          <div className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I'm Rina Jean Mislang, a fourth-year Bachelor of Science in Information Technology student at the University of Pangasinan with a growing passion for web development and user-centered design. I enjoy blending creativity with technology to craft intuitive, visually appealing, and functional digital solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Known for my attention to detail, adaptability, and problem-solving mindset, I thrive in collaborative environments and continuously seek opportunities to learn and innovate. With a strong foundation in both development and design, I am committed to creating seamless user experiences and delivering solutions that make a lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Creative Thinker</h3>
                <p className="text-gray-600 text-sm">Transforming ideas into engaging digital experiences.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Passionate Developer</h3>
                <p className="text-gray-600 text-sm">Dedicated to building modern and impactful applications.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Detail-Oriented</h3>
                <p className="text-gray-600 text-sm">Ensuring precision in every design and line of code.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Problem Solver</h3>
                <p className="text-gray-600 text-sm">Finding efficient and innovative solutions to challenges.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Adaptable Learner</h3>
                <p className="text-gray-600 text-sm">Embracing new technologies and continuously improving.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Team Player</h3>
                <p className="text-gray-600 text-sm">Collaborating effectively to achieve shared goals.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
