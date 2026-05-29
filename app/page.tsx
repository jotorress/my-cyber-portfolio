import { ShieldCheck, Server, Lock, Code, Globe, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden font-sans">

      <div className="fixed top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6">
          Jonathan Torres
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
          Cybersecurity & Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl">
          Dual-degree engineer bridging the gap between robust code and strategic risk management. 
          Specializing in GRC, OT Security, and DevSecOps. Fluent in English, French, and Spanish. 
          Seeking full-time opportunities (CDI) starting September.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#expertise" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
            Explore My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-gray-400 transition duration-300 backdrop-blur-sm bg-white/5">
            Contact Me
          </a>
        </div>
      </section>

      <section id="expertise" className="relative z-10 px-4 py-24 max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm group">
            <ShieldCheck className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">Governance, Risk & Compliance</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mapping IT assets to international frameworks (ISO 27001, EBIOS RM). Automating compliance workflows and translating complex regulatory requirements into actionable technical policies.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Cpu className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">OT & Industrial Security</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Securing critical infrastructure and industrial control systems (ICS/SCADA). Network segmentation, protocol analysis (Modbus/TCP), and threat modeling for air-gapped environments.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Code className="w-10 h-10 text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">DevSecOps & AppSec</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Integrating security early in the SDLC. Implementing SAST/DAST tools in CI/CD pipelines, secure code reviews, and container security (Docker/Kubernetes).
            </p>
          </div>

        </div>
      </section>

      <section className="relative z-10 px-4 py-24 max-w-4xl mx-auto text-center border-t border-white/10">
        <h3 className="text-3xl font-bold mb-10">Technical Arsenal</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Python', 'TypeScript', 'React/Next.js', 'CISO Assistant', 'ISO 27001', 'EBIOS RM', 'Docker', 'Linux', 'Wireshark', 'Burp Suite'].map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}