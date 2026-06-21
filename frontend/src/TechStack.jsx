function TechStack() {
  return (
    <section id="techstack" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-12 text-center">Tech Stack</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Frontend</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: "React", icon: "⚛️" },
                { name: "React Native", icon: "📱" },
                { name: "JavaScript", icon: "🟨" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "Bootstrap", icon: "💅" }
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold text-lg">
                  <span className="text-2xl">{tech.icon}</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Backend */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Backend</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: "Node.js", icon: "🟢" },
                { name: "Laravel", icon: "🔷" },
                { name: "PHP", icon: "🐘" },
                { name: "MySQL", icon: "🐬" }
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold text-lg">
                  <span className="text-2xl">{tech.icon}</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Design & Database */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Design & DB</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: "Supabase", icon: "🔷" },
                { name: "Figma", icon: "🎨" },
                { name: "Canva", icon: "🖼️" },
                { name: "WordPress", icon: "📝" }
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold text-lg">
                  <span className="text-2xl">{tech.icon}</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Tools</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: "Trae.ai", icon: "🚀" },
                { name: "Antigravity", icon: "🌟" },
                { name: "Cursor", icon: "⌨️" },
                { name: "VS Code", icon: "💻" },
                { name: "Codex", icon: "📦" }
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold text-lg">
                  <span className="text-2xl">{tech.icon}</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
