import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Code2, Terminal } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "../../data/projectsData";

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  return (
    <section className="py-24 px-6   max-w-7xl mx-auto relative z-10" id="projects">
      
      {/* Título de Sección */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1 h-8 bg-[#00F0FF] rounded-full shadow-[0_0_10px_#00F0FF]"></span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Proyectos Seleccionados
          </h2>
        </div>
        <p className="text-gray-400 font-mono text-sm ml-4">
          // EXPLORANDO ARQUITECTURA Y DISEÑO
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px] lg:h-[600px]">
        
        {/* COLUMNA IZQUIERDA: LISTA (Selector) */}
        <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar h-full">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                desc={project.description}
                tags={project.tags}
                isActive={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
              />
            </motion.div>
          ))}
        </div>

        {/* COLUMNA DERECHA: DETALLE (Viewport) */}
        <div className="lg:col-span-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-1 relative overflow-hidden flex flex-col">
            
            {/* Barra superior decorativa tipo ventana */}
            <div className="h-8 bg-white/5 w-full flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-auto font-mono text-[10px] text-gray-500">{activeProject.id}.tsx</div>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  {/* Imagen con efecto de borde brillante */}
                  {activeProject.image && (
                    <div className="relative group rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Link flotante sobre la imagen */}
                      {activeProject.link && (
                        <a
                          href={activeProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 bg-[#7B2CBF] hover:bg-[#8d3ac9] text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(123,44,191,0.4)]"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Información Principal */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-3xl font-bold text-white">{activeProject.title}</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {activeProject.longDesc || activeProject.description}
                        </p>

                        {activeProject.features && (
                            <div className="mt-6">
                                <h4 className="flex items-center gap-2 text-[#00F0FF] font-mono text-sm mb-3">
                                    <Layers size={16} /> CARACTERÍSTICAS CLAVE
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {activeProject.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7B2CBF]"></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Barra Lateral de Tecnologías */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 h-fit">
                        <h4 className="flex items-center gap-2 text-gray-200 font-bold mb-4 text-sm">
                            <Code2 size={16} className="text-[#00F0FF]" /> STACK
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {activeProject.tags.map((tag) => (
                                <span key={tag} className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded border border-white/10 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-white/10">
                             <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                <Terminal size={12} />
                                <span>Deploy: Render</span>
                             </div>
                        </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
        </div>
      </div>
      
      {/* Estilos globales para este componente (Scrollbar) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 240, 255, 0.3);
        }
      `}</style>
    </section>
  );
}