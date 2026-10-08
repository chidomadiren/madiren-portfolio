import React, { useState, useEffect } from 'react';


const IconGithub = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
);
const IconExternal = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
);
const IconCertificate = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
);
const IconTerminal = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
);
const IconPhone = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5.5A2.5 2.5 0 015.5 3h2.6a1.5 1.5 0 011.45 1.13l.7 2.92a1.5 1.5 0 01-.43 1.46l-1.4 1.24a14.1 14.1 0 006.8 6.8l1.24-1.4a1.5 1.5 0 011.46-.43l2.92.7A1.5 1.5 0 0121 15.9v2.6A2.5 2.5 0 0118.5 21h-1.1C12.05 21 3 11.95 3 7.6V5.5z"/></svg>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [filter, setFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);

  const rotatingTitles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
  ];


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: 'Chichie Saloon',
      category: 'Frontend',
      desc: 'Luxury salon booking platform with service listings, appointment flow, and a polished booking experience for beauty clients.',
      tech: ['React', 'Tailwind CSS', 'Booking UI', 'Responsive Design'],
      demo: 'https://example.com/chichie-saloon',
      github: 'https://github.com/',
      image: 'src/assets/saloon.png',
    },
    {
      title: 'OAK Partner Gathering',
      category: 'Full-Stack',
      desc: 'Event registration and attendee management system with QR check-ins, partner workflows, and real-time event tracking.',
      tech: ['React', 'Tailwind CSS', 'Express', 'Prisma ORM', 'PostgreSQL'],
      demo: 'https://example.com/oak-partner-gathering',
      github: 'https://github.com/',
      image: 'src/assets/oak.png',
    },
    {
      title: 'Madiren Academy',
      category: 'Frontend',
      desc: 'Modern educational portal for course discovery, student access, and structured dashboard-based learning experiences.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Dashboard UI'],
      demo: 'https://example.com/madiren-academy',
      github: 'https://github.com/',
      image: 'src/assets/mad.png',
    },
    {
      title: 'Recipe Web App',
      category: 'Full-Stack',
      desc: 'Recipe management platform with user authentication, favourite saving, CRUD operations, and personal cooking workflows.',
      tech: ['React', 'Express', 'Prisma ORM', 'PostgreSQL', 'JWT'],
      demo: 'https://example.com/recipe-web-app',
      github: 'https://github.com/',
      image: 'src/assets/myrecipe.png',
    },
    {
      title: 'Chichie Fashion Store',
      category: 'Frontend',
      desc: 'Fashion e-commerce landing experience with product browsing, mobile-friendly layouts, and premium storefront storytelling.',
      tech: ['React', 'Tailwind CSS', 'Vercel', 'E-commerce UI'],
      demo: 'https://example.com/chichie-fashion-store',
      github: 'https://github.com/',
      image: 'src/assets/fashion.png',
    },
    {
      title: 'Food Website',
      category: 'Frontend',
      desc: 'Restaurant and food showcase website designed for easy browsing, tasty visual presentation, and a smooth online ordering feel.',
      tech: ['React', 'Tailwind CSS', 'Responsive UI', 'Brand Design'],
      demo: 'https://example.com/food-website',
      github: 'https://github.com/',
      image: 'src/assets/restarant.png',
    },
    {
      title: 'Chichie Bridal',
      category: 'Frontend',
      desc: 'Elegant bridal and event styling concept built to highlight premium offerings, wedding experiences, and service storytelling.',
      tech: ['React', 'Tailwind CSS', 'UI Design', 'Brand Presentation'],
      demo: 'https://example.com/chichie-bridal',
      github: 'https://github.com/',
      image: 'src/assets/chie.png',
    },
    {
      title: 'Zerhon Pre-School',
      category: 'Frontend',
      desc: 'Friendly school website for parents and students featuring warm storytelling, service communication, and a welcoming landing experience.',
      tech: ['React', 'Tailwind CSS', 'Responsive Design'],
      demo: 'https://example.com/zerhon-pre-school',
      github: 'https://github.com/',
      image: 'src/assets/zheron.png',
    },
  ];

  const certificates = [
    { title: 'Introduction to Python', issuer: 'Coursera', date: '2026', id: 'CERT-001', desc: 'Completed an introductory Python course covering fundamentals, scripting, and problem solving.' },
    { title: 'Introduction to Software Engineering', issuer: 'Coursera', date: '2026', id: 'CERT-002', desc: 'Built a foundation in software engineering principles, development workflows, and core product thinking.' },
    { title: 'Backend and Frontend Development', issuer: 'Coursera', date: '2026', id: 'CERT-003', desc: 'Covered full web application development across frontend interfaces and backend systems.' },
     { title: 'Introduction to Javascript', issuer: 'Freecodecamp', date: '2026', id: 'CERT-004', desc: 'Learned the fundamentals of JavaScript, including variables, functions, and DOM manipulation.' },
    { title: 'Introduction to Python', issuer: 'Soothyvercel', date: '2026', id: 'CERT-005', desc: 'Learned the basics of Python programming.' },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
      
     
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-350 opacity-15"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 80%)`
        }}
      />

      {/* FLOATING NAV BAR */}
      <nav className="fixed left-1/2 top-6 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-neutral-800 bg-neutral-900/80 px-5 py-3 shadow-2xl backdrop-blur-md md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-black">CM</div>
            <span className="hidden text-xl font-bold tracking-wide text-white sm:inline">CHIDO MADIREN</span>
          </div>

          <div className="hidden items-center gap-6 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400 md:flex">
            {['home', 'about', 'projects', 'certificates', 'contact'].map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`capitalize transition-colors ${activeSection === sec ? 'text-white underline decoration-white underline-offset-8' : 'hover:text-white'}`}
              >
                {sec}
              </button>
            ))}
          </div>

          <button
            onClick={() => setActiveSection('contact')}
            className="rounded-full bg-white px-3 py-2 text-[11px] font-semibold text-black transition hover:bg-neutral-200 md:px-4"
          >
            Hire Me
          </button>
        </div>
      </nav>

      <main className="pt-28 pb-20 max-w-5xl mx-auto px-6">

        {/* ================= HOME SECTION ================= */}
        {activeSection === 'home' && (
          <section className="min-h-[82vh] animate-fadeIn">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full lg:w-[60%]">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 text-[11px] font-medium text-neutral-300">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  Based in Harare, Zimbabwe • Available Worldwide
                </div>

                <h1 className="mt-8 overflow-hidden text-[1.8rem] font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem]">
                  <span className="block h-[1.08em] overflow-hidden whitespace-nowrap text-neutral-200 transition-all duration-500">
                    <span className="block animate-[fadeIn_0.9s_ease-out]">
                      {rotatingTitles[titleIndex]}
                    </span>
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                  I am <span className="font-semibold text-white">Chido Madiren</span>. I engineer high-performance web systems, immersive user interfaces, and robust backend architectures with uncompromising precision.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-3">
                  <button
                    onClick={() => setActiveSection('projects')}
                    className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-neutral-200 sm:text-sm"
                  >
                    Explore My Work →
                  </button>
                  <button
                    onClick={() => setActiveSection('contact')}
                    className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800 sm:text-sm"
                  >
                    Get In Touch
                  </button>
                  <a
                    href="/Chido_Madiren_Sabuneti_Software Engineer _CV_Resume_.pdf"
                    download
                    className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-neutral-800 sm:text-sm"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div className="flex w-full justify-center lg:w-[40%] lg:justify-end">
                <div className="group relative w-full max-w-md overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 p-3 shadow-2xl">
                  <div className="overflow-hidden rounded-[1.5rem] bg-neutral-950">
                    <img
                      src="/src/assets/copy.jpeg"
                      alt="Chido Madiren workspace"
                      className="h-[420px] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= ABOUT SECTION ================= */}
        {activeSection === 'about' && (
          <section className="min-h-[80vh] flex flex-col justify-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-neutral-300 font-light leading-relaxed">
                <p>
                  I am a passionate full-stack software developer trained through Uncommon.org, specializing in building robust, scalable web applications using React, Next.js, Node.js, PostgreSQL and more.
                </p>
                <p>
                  My work combines technical precision with refined user experience design favoring dark themes, crisp typography, and smooth micro-animations. Whether architecting backend REST APIs with Prisma or building responsive interfaces with Tailwind CSS, I focus on clean code and robust execution.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  {['React', 'React Native', 'Express.js', 'SQL', 'Django', 'HTML', 'Node.js', 'ES6', 'Python',   'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Git', 'Github', 'Rest APIs'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-mono text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Grayscale Profile Card */}
              <div className="flex justify-center">
                <div className="group relative w-72 h-96 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <div className="h-full w-full overflow-hidden rounded-xl relative">
                    <img 
                      src="/src/assets/tyn.jpeg" 
                      alt="Chido Madiren" 
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                      <h3 className="font-bold text-white">Chido Madiren</h3>
                      <p className="text-xs text-neutral-400 font-mono">Harare, Zimbabwe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= PROJECTS SECTION ================= */}
        {activeSection === 'projects' && (
          <section className="min-h-[80vh] py-10 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                <p className="text-neutral-400 text-sm mt-1">Production builds and engineering sprint projects.</p>
              </div>
              <div className="flex gap-2">
                {['All', 'Full-Stack', 'Frontend'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${filter === cat ? 'bg-white text-black font-bold' : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter(p => filter === 'All' || p.category === filter)
                .map((project, idx) => (
                  <div 
                    key={idx}
                    className="group overflow-hidden bg-neutral-900/60 border border-neutral-800/80 rounded-2xl hover:border-neutral-600 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden border-b border-neutral-800">
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute left-4 top-4 flex items-center justify-between w-[calc(100%-2rem)]">
                        <span className="text-[10px] font-mono text-neutral-100 uppercase tracking-wider bg-black/50 px-2 py-1 rounded-full border border-neutral-700">{project.category}</span>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-neutral-200 hover:text-white transition-colors bg-black/40 border border-neutral-700 rounded-full p-2">
                          <IconExternal />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-neutral-200 transition-colors">{project.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">{project.desc}</p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-2.5 py-0.5 bg-neutral-950 border border-neutral-800 rounded text-[11px] font-mono text-neutral-400">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono text-white underline underline-offset-4 hover:text-neutral-300"
                          >
                            Live Demo ↗
                          </a>
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono text-white underline underline-offset-4 hover:text-neutral-300"
                          >
                            GitHub ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* ================= CERTIFICATES SECTION ================= */}
        {activeSection === 'certificates' && (
          <section className="min-h-[80vh] py-10 animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Credentials & Certifications</h2>
            <p className="text-neutral-400 text-sm mb-8">Click any certificate to inspect details and verification ID.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCert(cert)}
                  className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 cursor-pointer hover:border-white transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all" />
                  <div>
                    <div className="text-neutral-400 mb-4">
                      <IconCertificate />
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">{cert.title}</h3>
                    <p className="text-xs font-mono text-neutral-400 mb-4">{cert.issuer} • {cert.date}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 underline underline-offset-4">Inspect Certificate ↗</span>
                </div>
              ))}
            </div>

            {/* Certificate Inspector Modal */}
            {selectedCert && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <IconCertificate />
                    <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                  </div>
                  <p className="text-sm font-mono text-neutral-400 mb-2">Issued by: {selectedCert.issuer} ({selectedCert.date})</p>
                  <p className="text-xs font-mono text-neutral-500 mb-4">Credential ID: {selectedCert.id}</p>
                  <p className="text-neutral-300 text-sm mb-6 leading-relaxed font-light">{selectedCert.desc}</p>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-200 transition-colors"
                  >
                    Close Inspector
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ================= CONTACT SECTION ================= */}
        {activeSection === 'contact' && (
          <section className="min-h-[80vh] flex flex-col justify-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Let's Build Together</h2>
            <p className="text-neutral-400 text-sm mb-8">Get in touch for software development opportunities or collaboration.</p>

            <div className="grid md:grid-cols-2 gap-10">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-2">Your Name</label>
                  <input type="text" required className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-2">Message</label>
                  <textarea rows="4" required className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors" placeholder="Hello Chido, I'd like to discuss a project..." />
                </div>
                <button type="submit" className="w-full py-3.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-200 transition-colors shadow-lg">
                  Send Message
                </button>
              </form>

              <div className="flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <div className="space-y-6">
                  <h3 className="font-bold text-lg">Direct Contact</h3>
                  <div className="space-y-3 text-sm text-neutral-300 font-mono">
                    <p className="flex items-center gap-2"><span>📍</span> Harare, Zimbabwe</p>
                    <p className="flex items-center gap-2"><span>✉️</span> madirensabuneti@gmail.com</p>
                    <p className="flex items-center gap-2"><span>💼</span> Full-Stack Software Developer</p>
                    <a href="tel:+263776610675" className="flex items-center gap-2 text-neutral-300 transition hover:text-white">
                      <span className="flex h-5 w-5 items-center justify-center text-white"><IconPhone /></span>
                      <span>+263 776610675</span>
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-neutral-800 flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-colors">
                    <IconGithub />
                  </a>
                  <a href="#" className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-colors">
                    <IconTerminal />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      <footer className="border-t border-neutral-900 py-8 text-center text-xs font-mono text-neutral-500">
        © {new Date().getFullYear()} Chido Madiren. All Rights Reserved.
      </footer>
    </div>
  );
}