import { motion } from "framer-motion";
import { Globe, ArrowUpRight, ShieldCheck, Hexagon, Triangle, Circle, Square, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col relative">
      {/* Background ambient elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-[300px] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Navigation (Minimal for context) */}
      <nav className="w-full flex items-center justify-between px-6 py-6 lg:px-12 z-10">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-500" />
          <span className="font-heading font-semibold text-lg tracking-wide">NEXUS<span className="text-blue-500">TRADE</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Servicios</a>
          <a href="#" className="hover:text-white transition-colors">Casos de Éxito</a>
          <a href="#" className="hover:text-white transition-colors">Nosotros</a>
        </div>
        <button className="text-sm font-medium text-white px-5 py-2.5 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
          Portal Clientes
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center relative z-10 px-6 lg:px-12 pt-12 pb-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-start space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium tracking-wide text-blue-200 uppercase">Líderes en Comercio Global</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-white"
            >
              Expande tus fronteras. <br className="hidden md:block" />
              Domina el mercado <span className="text-gradient">global.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              Estrategias aduaneras, logística internacional y optimización de cadenas de suministro para empresas que miran hacia el futuro.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
            >
              <button 
                data-testid="button-agendar"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all duration-300 btn-glow flex items-center justify-center gap-2"
              >
                Agendar Asesoría
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button 
                data-testid="button-servicios"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 text-white rounded-full font-medium transition-all duration-300"
              >
                Nuestros Servicios
              </button>
            </motion.div>
          </div>

          {/* Right Column - Visual Abstract Representation */}
          <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
            {/* Abstract Network/Globe Base */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-slate-700/50 rounded-full absolute animate-[spin_60s_linear_infinite]" />
              <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-blue-500/20 rounded-full absolute border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-full absolute blur-xl" />
              
              {/* Connecting Nodes */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M20,50 L50,20 L80,50 L50,80 Z" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-blue-400" />
                <path d="M10,30 L50,50 L90,30" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-cyan-400" />
                <circle cx="50" cy="20" r="1" fill="currentColor" className="text-cyan-400" />
                <circle cx="80" cy="50" r="1" fill="currentColor" className="text-blue-400" />
                <circle cx="50" cy="80" r="1" fill="currentColor" className="text-cyan-400" />
                <circle cx="20" cy="50" r="1" fill="currentColor" className="text-blue-400" />
              </svg>
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute top-[15%] right-[5%] md:right-[15%] z-20"
            >
              <div className="glass-card rounded-2xl p-4 flex items-center gap-4 border-t-white/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-white tracking-tight">50+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Países Activos</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute bottom-[20%] left-[5%] md:left-[10%] z-20"
            >
              <div className="glass-card rounded-2xl p-4 flex items-center gap-4 border-t-white/20">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-white tracking-tight">100%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Cumplimiento</p>
                </div>
              </div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-[0%] right-[10%] z-10 hidden md:block"
            >
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 border-t-white/10 bg-slate-900/60">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <p className="text-sm font-medium text-slate-300">Rutas logísticas optimizadas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Social Proof Footer */}
      <div className="w-full border-t border-slate-800/50 bg-slate-900/30 py-8 mt-auto z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider whitespace-nowrap">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Hexagon className="w-6 h-6" />
              <span className="font-heading font-bold text-lg">AeroLog</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Triangle className="w-6 h-6" />
              <span className="font-heading font-bold text-lg">TrussInt</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Circle className="w-6 h-6" />
              <span className="font-heading font-bold text-lg">Globex</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer hidden sm:flex">
              <Square className="w-6 h-6" />
              <span className="font-heading font-bold text-lg">Merid</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer hidden lg:flex">
              <Box className="w-6 h-6" />
              <span className="font-heading font-bold text-lg">Vantage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}