import { ShieldCheck, Server, BrainCircuit, Terminal, Blocks, Briefcase, Calendar, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  const experiences = [
    {
      role: "Cybersecurity Engineer (Alternant)",
      company: "EUROAPI",
      period: "Sept 2025 – Sept 2026",
      location: "Vertolaye, France",
      achievements: [
        "Governance & GRC: Implemented an open-source solution for compliance tracking and risk management.",
        "OT Security: Analyzed and integrated security measures within industrial production processes and critical data flows.",
        "R&D & Infrastructure: Developed automated deployment scripts for USB decontamination (Station Blanche).",
        "Behavioral Analysis: Designed phishing campaigns to study human vulnerabilities and model compromise vectors."
      ]
    },
    {
      role: "Systems & Automation Developer",
      company: "PowiDian Energy",
      period: "May 2025 – Sept 2025",
      location: "Tours, France",
      achievements: [
        "System Design: Developed robust POSIX shell/BusyBox scripts to optimize critical processes on embedded Linux systems.",
        "Sandboxing: Implemented isolated virtualized environments for simulation and script integrity validation.",
        "Hardening: Configured Linux services utilizing the principle of least privilege and network compartmentalization via firewalls."
      ]
    },
    {
      role: "Engineering Intern",
      company: "Enel Colombia",
      period: "Feb 2024 – Jul 2024",
      location: "Bogotá, Colombia",
      achievements: [
        "Systems Engineering: Analyzed and optimized engineering processes to improve operational efficiency within the energy sector.",
        "Research & Documentation: Conducted technical research to support ongoing infrastructure projects and systems integration."
      ]
    },
    {
      role: "System Engineering Intern (AI/Data)",
      company: "Universidad Nacional de Colombia",
      period: "Aug 2023 – Feb 2024",
      location: "Bogotá, Colombia",
      achievements: [
        "HORUS UNAL Project: Extracted, processed, and visualized scientific data utilizing Python, Django, and Docker.",
        "AI Integration: Trained machine learning models to classify and analyze academic publications, facilitating strategic decision-making."
      ]
    },
    {
      role: "Front-end Developer",
      company: "Siigo",
      period: "Feb 2023 – Jul 2023",
      location: "Bogotá, Colombia",
      achievements: [
        "Micro-frontends: Contributed to the development of modular React interfaces within a Dockerized environment for the LATAM market.",
        "Quality Assurance: Integrated unit testing and achieved 90% functional coverage utilizing SonarQube."
      ]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden font-sans">
      
      <div className="fixed top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6">
          Jonathan Torres
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
          Cybersecurity & Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl">
          Dual-degree engineer delivering holistic security solutions. From aligning IT assets with 
          NIS2 and ANSSI standards, to architecting secure Kubernetes clusters and integrating LLMs. 
          Trilingual professional (English, French, Spanish) seeking a CDI starting October 2026.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#experience" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
            View Experience
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-gray-400 transition duration-300 backdrop-blur-sm bg-white/5">
            Contact Me
          </a>
        </div>
      </section>

      <section id="domains" className="relative z-10 px-4 py-24 max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Domains</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm group">
            <ShieldCheck className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">GRC & Compliance</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertise in regulatory alignment including <strong>NIS2, GDPR</strong>, and <strong>ANSSI</strong> guidelines. Hands-on experience with <strong>CISO Assistant</strong> for risk assessments and maintaining <strong>ISO 27001</strong> compliance.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Server className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">DevOps & Infra</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deploying scalable infrastructure. Proficient in <strong>Kubernetes, Docker</strong>, and <strong>Proxmox</strong> for virtualized environments, integrated with automated Python workflows.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm group">
            <BrainCircuit className="w-10 h-10 text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">AI & Machine Learning</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Understanding of modern AI architectures. Experience working with <strong>Transformers</strong>, and model fine-tuning using <strong>Hugging Face</strong> and <strong>LLaMA</strong>.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Terminal className="w-10 h-10 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">Offensive Security</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Foundational pentesting and secure network design. Knowledge of Firewalls, Switches, scripting, and secure isolation protocols like <strong>Station Blanche</strong>.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Blocks className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">Software Architecture</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing robust applications. Strong background in software architecture principles, secure coding, and fast-paced <strong>Agile/Scrum</strong> environments.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 px-4 py-24 max-w-4xl mx-auto border-t border-white/10">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Briefcase className="w-8 h-8 text-indigo-400" />
          <h3 className="text-3xl md:text-4xl font-bold">Professional Experience</h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#030712] transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm">
                    <span className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-2">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-gray-100">{exp.role}</h4>
                    <p className="text-gray-400 font-medium mb-4">{exp.company} — {exp.location}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 px-4 py-20 bg-black/40 border-t border-white/10 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            I am actively seeking a full-time CDI starting in October 2026. Whether you have a position in mind or just want to discuss cybersecurity and software architecture, my inbox is open.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:jonathan.torres_sarmiento@insa-cvl.fr" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-gray-300" />
              <span>Email Me</span>
            </a>
            
            <a href="https://www.linkedin.com/in/jonathan-ts/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-50" />
            </a>

            <a href="https://github.com/jotorress" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.23 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.15 5.4 3.15a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 9.9c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path>
                <path d="M9 18c-3.14 1.1-5-1.3-5-1.3"></path>
              </svg>
              <span>GitHub</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-50" />
            </a>
          </div>
          
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jonathan Torres Sarmiento. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </section>

    </main>
  );
}