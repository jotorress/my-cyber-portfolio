import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />
      
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6">
          Jonathan Torres 
        </h1>
      </div>  

        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
          Cybersecurity & Software Engineer
        </h2>

        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          Specializing in GRC, OT Security & DevSecOps. Bridging the gap between robust code and strategic risk management. Trilingual professional (English, French, Spanish) seeking a full-time CDI starting September 2026.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 transition duration-300">
            Contact Me
          </a>
        </div>
      </main>
    </div>
  );
}
