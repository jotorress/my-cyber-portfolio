import { ShieldCheck, Server, BrainCircuit, Terminal, Blocks } from "lucide-react";

export default function Home() {
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
          Trilingual professional (English, French, Spanish) seeking a CDI starting september/october 2026.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#expertise" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
            View My Domains
          </a>
        </div>
      </section>

      <section id="expertise" className="relative z-10 px-4 py-24 max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Domains</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm group">
            <ShieldCheck className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">GRC & European Compliance</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertise in regulatory alignment including <strong>NIS2, GDPR (RGPD)</strong>, and <strong>ANSSI</strong> guidelines. Hands-on experience with <strong>CISO Assistant</strong> for risk assessments and maintaining <strong>ISO 27001</strong> compliance across corporate infrastructure.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Server className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">DevOps & Virtualization</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deploying and managing scalable infrastructure. Proficient in <strong>Kubernetes, Docker</strong>, and <strong>Proxmox</strong> for virtualized environments, integrated with automated Python development workflows.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm group">
            <BrainCircuit className="w-10 h-10 text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">AI & Machine Learning</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Understanding of modern AI architectures. Experience working with <strong>Transformers, Positional Encoders</strong>, and model training/fine-tuning using <strong>Hugging Face</strong> and models like <strong>LLaMA</strong>.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Terminal className="w-10 h-10 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">Offensive & Network Security</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Foundational pentesting and secure network design. Knowledge of Firewalls, Switches, custom scripting, and secure isolation protocols like <strong>Station Blanche</strong> (USB decontamination).
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm group">
            <Blocks className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-3 text-gray-100">Software Architecture</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing robust, scalable applications. Strong background in software architecture principles, clean code, and working within fast-paced <strong>Agile/Scrum</strong> environments.
            </p>
          </div>

        </div>
      </section>

      <section className="relative z-10 px-4 py-24 max-w-5xl mx-auto text-center border-t border-white/10">
        <h3 className="text-3xl font-bold mb-10">Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Python', 'Kubernetes', 'Proxmox', 'Docker', 'CISO Assistant', 
            'Hugging Face', 'LLaMA', 'Transformers', 'NIS2', 'ANSSI', 
            'ISO 27001', 'RGPD', 'Agile/Scrum'
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-indigo-400 hover:bg-white/10 transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}