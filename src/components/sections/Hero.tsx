import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Cpu, Network } from "lucide-react";
import ContactModal from "../ui/ContactModal"; // Asegura la ruta correcta

// Variantes de animación para secuenciar elementos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Hero: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Elementos decorativos de fondo (Grid tenue) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Contenedor Principal: Ahora es un GRID */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Columna Izquierda: Contenido (Ocupa 7 columnas de 12) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge Tech */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[#00F0FF] font-mono text-xs tracking-widest uppercase bg-[#00F0FF]/10 px-3 py-1 rounded-full border border-[#00F0FF]/20">
              System Online v2.0
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white"
          >
            Hola, soy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7B2CBF]">
              Alan Quintana
            </span>
          </motion.h1>

          {/* Subtítulo / Rol */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-8 text-gray-200 font-mono text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-[#00F0FF]" />
              <span>Full Stack Dev</span>
            </div>
            <span className="text-gray-200">|</span>
            <div className="flex items-center gap-2">
              <Cpu size={18} className="text-[#00F0FF]" />
              <span>AI Integrator</span>
            </div>
            <span className="text-gray-200">|</span>
            <div className="flex items-center gap-2">
              <Network size={18} className="text-[#00F0FF]" />
              <span>Linux Enthusiast</span>
            </div>
          </motion.div>

          {/* Descripción (Con borde lateral para estilo "Quote") */}
          <motion.div
            variants={itemVariants}
            className="border-l-2 border-[#00F0FF]/30 pl-6 mb-10"
          >
            <p className="text-lg text-gray-200/90 leading-relaxed max-w-2xl">
              Experiencias de desarrollo de software con enfoque en
              arquitecturas modernas y sólidas. Trabajo en todo el stack para
              construir sistemas que no solo funcionan bien hoy, sino que están
              preparados para crecer sin fricción.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-4 font-light">
              Desde la administración de servidores Linux hasta interfaces
              claras y eficientes; mi objetivo es transformar ideas complejas en
              productos digitales estables y mantenibles.
            </p>
          </motion.div>

          {/* Botones alineados a la izquierda */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-[#7B2CBF] hover:bg-[#8d3ac9] text-white font-bold rounded-lg 
             transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(123,44,191,0.5)]
             flex items-center gap-2 group"
            >
              Ver Proyectos
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className="px-8 py-3 border border-white/20 hover:bg-white/5 text-white font-medium rounded-lg 
                         transition-all hover:border-[#00F0FF]/50 hover:text-[#00F0FF]"
            >
              Contactar
            </button>
          </motion.div>

          {/* Footer Tech Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-6 border-t border-white/5 flex gap-8 text-xs font-mono text-gray-500"
          >
            <div>
              <span className="block text-gray-700 uppercase">
                Disponibilidad
              </span>
              <span className="text-[#00F0FF]">Abierto a trabajar</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Columna Derecha: Widgets Holográficos de Datos (Escalado) */}
        <div className="lg:col-span-5 hidden lg:block pointer-events-none relative h-[500px]">
          {/* 1. Aquí se ve el FloatingShape del fondo */}

          {/* 2. Módulos de data flotantes (Descentralizados y Expandidos) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, staggerChildren: 0.3 }}
            className="absolute inset-0 p-10"
          >
            {/* --- MÓDULO 1: Superior Derecho (System Status Extendido) --- */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="absolute top-4 right-4 w-52 p-4 
                                border border-[#00F0FF]/40 bg-black/40 backdrop-blur-md 
                                font-mono text-xs shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              <p className="uppercase text-[#00F0FF] border-b border-[#00F0FF]/20 pb-1 mb-2">
                <span className="text-white font-bold">// HOST:</span>{" "}
                ALAN-DEV-UNIT
              </p>
              <div className="flex justify-between mt-1 text-gray-300">
                <span>CPU Load:</span>
                <span className="text-yellow-400">48%</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Memory:</span>
                <span className="text-green-400">12.4GB</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Ping Lat.:</span>
                <span className="text-green-400">~8ms</span>
              </div>
            </motion.div>

            {/* --- MÓDULO 2: Central (AI Processing/Log) --- */}
            {/* Este módulo es grande y cruza el centro, dando más peso visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs p-4 
                                border-2 border-[#7B2CBF]/50 bg-black/50 backdrop-blur-sm 
                                font-mono text-xs shadow-[0_0_20px_rgba(123,44,191,0.3)]"
            >
              <p className="text-[#7B2CBF] border-b border-[#7B2CBF]/20 pb-1 mb-2">
                &gt; [AI_LOG] Neural Sequence
              </p>
              <div className="space-y-1 text-gray-400 text-[10px] h-16 overflow-hidden">
                <p className="text-white">&gt; Compiling modules...</p>
                <p className="text-green-400">...Module-22.js loaded</p>
                <p className="text-yellow-400">
                  ...Warning: Low priority task [0x4D]
                </p>
                <p className="text-[#00F0FF] animate-pulse">
                  ...ACCESS GRANTED
                </p>
              </div>
            </motion.div>

            {/* --- MÓDULO 3: Inferior Izquierdo (Status Bar) --- */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="absolute bottom-4 left-4 w-64 p-3 
                                border border-[#7B2CBF]/40 bg-black/40 backdrop-blur-md 
                                text-left text-xs font-mono"
            >
              <div className="flex justify-between items-center">
                <p className="text-[#00F0FF]">
                  <span className="text-white/80 mr-2">STATE:</span> OPTIMIZED
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                  <span className="text-green-500">READY</span>
                </div>
              </div>
            </motion.div>

            {/* --- LÍNEAS DECORATIVAS FINAS DE CONEXIÓN --- */}

            {/* Línea conectando Módulo 1 y 2 (Cian) */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="absolute top-[180px] right-[100px] w-px h-16 origin-top bg-[#00F0FF]/50"
            />

            {/* Línea conectando Módulo 2 y 3 (Púrpura) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="absolute bottom-[100px] left-[100px] w-20 h-px origin-left bg-[#7B2CBF]/50"
            />
          </motion.div>
        </div>
      </div>
      {/* Indicador de Scroll (Posicionado abajo al centro) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown size={16} />
      </motion.div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
};

export default Hero;
