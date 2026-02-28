import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  isActive?: boolean; // Nuevo prop para indicar selección
  onClick: () => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  tags,
  isActive = false,
  onClick,
  className = "",
}) => (
  <div
    onClick={onClick}
    className={`
      relative group overflow-hidden rounded-xl p-6 transition-all duration-500 cursor-pointer border
      backdrop-blur-sm flex flex-col justify-between h-full
      ${
        isActive
          ? "bg-white/10 border-[#00F0FF]/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
          : "bg-black/40 border-white/10 hover:border-[#7B2CBF]/50 hover:bg-white/5"
      }
      ${className}
    `}
  >
    {/* Contenido Superior */}
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-wider bg-[#00F0FF]/10 text-[#00F0FF] px-2 py-1 rounded border border-[#00F0FF]/20"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Icono que aparece en hover */}
        <ArrowUpRight 
          size={18} 
          className={`text-gray-400 transition-transform duration-300 ${isActive ? 'text-[#00F0FF] rotate-45' : 'group-hover:text-[#00F0FF] group-hover:-translate-y-1 group-hover:translate-x-1'}`} 
        />
      </div>

      <h3 className={`text-xl font-display font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
        {title}
      </h3>
      <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
        {desc}
      </p>
    </div>

    {/* Decoración de fondo (Gradiente sutil en hover o active) */}
    <div 
      className={`absolute right-0 bottom-0 w-40 h-40 rounded-tl-full bg-gradient-to-tl from-[#7B2CBF]/20 to-transparent transition-opacity duration-500
      ${isActive || 'group-hover:opacity-100'} opacity-0 pointer-events-none`}
    />
  </div>
);

export default ProjectCard;