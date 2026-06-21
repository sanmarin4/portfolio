import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl text-pink-500 font-light">RINA JEAN MISLANG</div>
            <div className="flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium pb-1">About</a>
              <a href="#techstack" className="text-gray-700 hover:text-pink-500 font-medium pb-1">Tech Stack</a>
              <a href="#projects" className="text-gray-700 hover:text-pink-500 font-medium pb-1">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium pb-1">Contacts</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl text-pink-600 mb-3 font-light">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Rina Jean Mislang</h1>
              <h2 className="text-2xl text-pink-600 mb-6 font-medium">Fullstack Developer</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
               I create elegant and user-centered digital experiences that combine creativity, innovation, and functionality to bring ideas to life and leave a lasting impact.
               </p>
            <div>
            <a href="/assets/rinajean_mislang.pdf" download className="inline-flex items-center gap-3 bg-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download Resume
            </a>
          </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/profile.jfif" 
                alt="Rina Jean" 
                className="w-80 h-80 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <About />
      <TechStack />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-pink-50 py-8 text-center text-gray-600">
        <p className="text-sm">© 2024 Rina Jean Mislang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
