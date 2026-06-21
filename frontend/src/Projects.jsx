function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-14 text-center">My Projects</h2>
        
        {/* Mobile Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3 justify-center">
            <span className="text-3xl">📱</span> Mobile Applications
          </h3>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/assets/lera.png" 
                  alt="LERA" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>💬</span> LERA
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">Empowering students with an intuitive review platform for smarter and more effective learning.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/assets/hilkvisual.jfif" 
                  alt="HilkVisual" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>👁️</span> HilkVisual
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">Simplifying photography bookings while providing seamless access to captured memories.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Websites */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3 justify-center">
            <span className="text-3xl">🌐</span> Websites
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <a href="https://www.claremph.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/assets/clarem.png" 
                  alt="Clarem" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>🛍️</span> Clarem
                </h4>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">Fashion Boutique with curated collections and trendy styles.</p>
                <div className="flex items-center gap-2 text-pink-500 font-semibold">
                  <span>Visit Website</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="https://www.camesandco.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/assets/camesandco.png" 
                  alt="Cames and Co" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>💍</span> Cames and Co
                </h4>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">Elegant Jewelry Boutique with timeless and exquisite pieces.</p>
                <div className="flex items-center gap-2 text-pink-500 font-semibold">
                  <span>Visit Website</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="https://dainty-cafe-m-lang.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/assets/dainty.png" 
                  alt="Dainty M'lang Cafe" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>☕</span> Dainty M'lang Cafe
                </h4>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">Cozy Cafe offering delicious drinks and delightful treats.</p>
                <div className="flex items-center gap-2 text-pink-500 font-semibold">
                  <span>Visit Website</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
