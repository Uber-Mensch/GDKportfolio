'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.1s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 fixed top-0 w-full backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Hello World!
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  I'm a passionate developer creating amazing digital experiences
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                    View My Work
                  </button>
                  <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Portfolio Owner"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center 20%' }}
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a creative developer who loves turning ideas into reality. With expertise in modern web technologies, 
                I create stunning, responsive, and user-friendly applications that make a difference.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-white/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-white/60">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20+</div>
                  <div className="text-white/60">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Creative Developer"
                  className="w-full h-full object-contain"
                  style={{ objectPosition: 'center 30%' }}
                  onError={(e) => {
                    console.error('About image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white/90 text-lg font-semibold backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/20">
                  ✨ Creative Developer
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl animate-bounce">
                  💫
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
                icon: '🎨',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
                icon: '⚙️',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Tools',
                skills: ['Git', 'Docker', 'AWS', 'Figma'],
                icon: '🛠️',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((category, index) => (
              <div
                key={category.title}
                className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A modern e-commerce solution with real-time inventory management',
                tech: ['React', 'Node.js', 'MongoDB'],
                icon: '🛒',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'AI Chat Application',
                description: 'Intelligent chatbot powered by machine learning algorithms',
                tech: ['Python', 'TensorFlow', 'React'],
                icon: '🤖',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Crypto Dashboard',
                description: 'Real-time cryptocurrency tracking and portfolio management',
                tech: ['Vue.js', 'WebSocket', 'Chart.js'],
                icon: '📊',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className={`bg-gradient-to-br ${project.color} p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-white/20 text-white rounded-lg text-sm hover:bg-white/30 transition-colors">
                    Live Demo
                  </button>
                  <button className="flex-1 px-4 py-2 border border-white/20 text-white rounded-lg text-sm hover:bg-white/10 transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-white/60">hello@example.com</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-white/60">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-white/60">San Francisco, CA</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            {['🐙', '💼', '🐦', '📷'].map((icon, index) => (
              <button
                key={index}
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Portfolio. Made with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
