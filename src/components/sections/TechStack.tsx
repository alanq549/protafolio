import React from "react";
import { motion } from "framer-motion";
import { Database, Sparkles, Box } from "lucide-react";

// Tipos para manejar los temas de color dinámicamente
type ColorTheme = "cyan" | "purple" | "green" | "yellow" | "orange";

interface StackItemProps {
  // Use a component type that accepts a `size` prop (number|string) to match lucide-react icons
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  subtitle: string;
  theme: ColorTheme;
  delay: number;
}

// Configuración de colores para mantener la consistencia (DRY)
const themeConfig = {
  cyan: {
    icon: "text-[#00F0FF]",
    bg: "group-hover:bg-[#00F0FF]/10",
    border: "group-hover:border-[#00F0FF]/50",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]",
  },
  purple: {
    icon: "text-[#7B2CBF]",
    bg: "group-hover:bg-[#7B2CBF]/10",
    border: "group-hover:border-[#7B2CBF]/50",
    glow: "group-hover:shadow-[0_0_20px_rgba(123,44,191,0.2)]",
  },
  green: {
    icon: "text-green-400",
    bg: "group-hover:bg-green-400/10",
    border: "group-hover:border-green-400/50",
    glow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]",
  },
  yellow: {
    icon: "text-yellow-400",
    bg: "group-hover:bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50",
    glow: "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  },
  orange: {
    icon: "text-orange-400",
    bg: "group-hover:bg-orange-400/10",
    border: "group-hover:border-orange-400/50",
    glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]",
  },
};

const StackItem: React.FC<StackItemProps> = ({
  icon: Icon,
  title,
  subtitle,
  theme,
  delay,
}) => {
  const styles = themeConfig[theme];

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`
        group flex items-center gap-4 p-4 rounded-xl 
        border border-white/5 bg-black/20 backdrop-blur-sm
        transition-all duration-300 cursor-default
        ${styles.border} ${styles.glow} ${styles.bg}
      `}
    >
      <div
        className={`p-3 rounded-lg bg-white/5 border border-white/10 transition-colors ${styles.icon}`}
      >
        <Icon size={24} />
      </div>
      <div>
        <strong className="block text-gray-200 font-display text-lg group-hover:text-white transition-colors">
          {title}
        </strong>
        <span className="text-xs md:text-sm text-gray-500 font-mono group-hover:text-gray-300 transition-colors">
          {subtitle}
        </span>
      </div>
    </motion.li>
  );
};

const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      {/* Fondo sutil (Grid) para separar visualmente del resto */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* COLUMNA IZQUIERDA: Textos y Lista */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3">
              <span className="text-[#00F0FF]">//</span> Stack Tecnológico
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              No me caso con ninguna tecnología; elijo las herramientas
              adecuadas según el problema, la escala y el contexto del sistema.
            </p>
          </motion.div>
<ul className="space-y-4">
  <StackItem
    icon={Sparkles}
    title="Lenguajes de Programación"
    subtitle="Java • TypeScript • JavaScript • Python • Bash"
    theme="orange"
    delay={0.1}
  />

  <StackItem
    icon={Box}
    title="Interfaces & Experiencia de Usuario"
    subtitle="React • Next.js • Tailwind • HTML • CSS • Three.js (R3F)"
    theme="cyan"
    delay={0.2}
  />

  <StackItem
    icon={Database}
    title="Backend & Sistemas"
    subtitle="Node.js • Spring Boot • REST APIs • MySQL • PostgreSQL • SQL Server"
    theme="purple"
    delay={0.3}
  />

  <StackItem
    icon={Box}
    title="Infraestructura & Contenedores"
    subtitle="Docker • Nginx • Linux • Arquitecturas escalables"
    theme="green"
    delay={0.4}
  />

  <StackItem
    icon={Sparkles}
    title="DevOps & Cloud"
    subtitle="CI/CD • AWS • Deployment & Monitoring"
    theme="yellow"
    delay={0.5}
  />
</ul>

        </div>

        {/* COLUMNA DERECHA: Cyberpunk Terminal HUD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg mx-auto lg:ml-auto"
        >
          {/* 1. Glow trasero difuso */}
          <div className="absolute -inset-1 bg-gradient-to-b from-[#00F0FF]/20 to-[#7B2CBF]/20 blur-xl opacity-40" />

          {/* 2. Contenedor Principal (HUD) */}
          <div className="relative bg-[#050505] border border-[#00F0FF]/30 rounded-sm overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            {/* Overlay de Scanlines (Efecto CRT) */}
            <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />

            {/* 3. Header Técnico "Raw Data" */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#00F0FF]/5 border-b border-[#00F0FF]/20">
              <div className="flex gap-4 text-[10px] font-mono text-[#00F0FF]/70 tracking-widest">
                <span>/// TERMINAL_V.2.0</span>
                <span className="hidden sm:inline">UID: 0x84F</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]" />
                <span className="text-[10px] font-mono text-green-500">
                  ONLINE
                </span>
              </div>
            </div>

            {/* 4. Contenido de la Terminal */}
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed relative z-10 h-[300px] flex flex-col">
              {/* Bloque de código simulado */}
              <div className="flex flex-col gap-1.5 opacity-90">
                <div className="text-gray-500">
                  <span className="text-[#7B2CBF]">root@system</span>:
                  <span className="text-[#00F0FF]">~</span>$ ./init_stack.sh
                  --force
                </div>

                <div className="mt-2 text-gray-300">
                  {">"} Initializing neural handshake...
                </div>

                {/* Barras de progreso de texto */}
                <div className="my-3 space-y-1">
                  <div className="flex justify-between text-gray-500 text-[10px] uppercase">
                    <span>Frontend Core</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex gap-2">
                    <span className="text-green-500">✔</span>
                    <span className="text-gray-400">
                      React.js / Next.js Environment
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-500">✔</span>
                    <span className="text-gray-400">
                      Three.js Physics Engine
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-500">✔</span>
                    <span className="text-gray-400">
                      PostgreSQL Database Connected
                    </span>
                  </div>
                  <div className="flex gap-2 animate-pulse">
                    <span className="text-yellow-500">➜</span>
                    <span className="text-yellow-500">
                      Training AI Models...
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Footer Decorativo HUD */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#00F0FF]/5 border-t border-[#00F0FF]/10 flex items-center justify-between px-4 text-[9px] text-[#00F0FF]/50 font-mono uppercase">
              <span>Mem: 64GB</span>
              <span>Net: SECURE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
