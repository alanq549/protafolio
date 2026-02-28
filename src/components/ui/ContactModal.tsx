import { useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Terminal,
} from "lucide-react";
import Modal from "./Modal"; // Asegúrate de que la ruta sea correcta

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  // Función para copiar email
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita abrir el mailto si haces click en copiar
    navigator.clipboard.writeText("quintannaalan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      label: "GitHub",
      username: "@alanq549",
      href: "https://github.com/alanq549",
      icon: <Github size={20} />,
      color:
        "hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    },
    {
      label: "LinkedIn",
      username: "/in/quintana-alan",
      href: "https://www.linkedin.com/in/quintana-alan/",
      icon: <Linkedin size={20} />,
      color:
        "hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]",
    },
    {
      label: "WhatsApp",
      username: "+52 712...",
      href: "https://wa.me/527121953494",
      icon: <MessageCircle size={20} />,
      color:
        "hover:text-[#25D366] hover:border-[#25D366]/50 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]",
    },
  ];

  return (
    <Modal open={open} onClose={onClose} title="">
      <div className="relative overflow-hidden">
        {/* Decoración de fondo sutil dentro del modal */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7B2CBF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* HEADER: Tarjeta de Presentación */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-6 border-b border-white/10">
          {/* Avatar / Icono Dev */}
          <div className="relative group  ml-3">
            {/* Anillo animado */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF] to-[#7B2CBF] rounded-full blur opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center overflow-hidden">
              {/* SI TIENES FOTO, DESCOMENTA ESTO: */}
              {/* <img src="/tu-foto.jpg" alt="Alan" className="w-full h-full object-cover" /> */}

              {/* SI NO TIENES FOTO, USA ESTE ICONO: */}
              <Terminal
                size={40}
                className="text-gray-400 group-hover:text-[#00F0FF] transition-colors duration-300"
              />
            </div>

            {/* Indicador de Estado */}
            <div
              className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#0a0a0a] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"
              title="Available to work"
            ></div>
          </div>

          {/* Texto de Presentación */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white">
              Alan Quintana
            </h3>
            <p className="text-[#00F0FF] font-mono text-sm mb-2 tracking-wide">
              Full Stack Dev & AI Architect
            </p>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Transformando café en código limpio y escalable. ¿Tienes un
              desafío técnico? Hablemos.
            </p>
          </div>
        </div>

        {/* BODY: Grid de Contacto */}
        <div className="space-y-4">
          {/* Email (Destacado) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-lg group-hover:border-[#00F0FF]/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-md text-gray-300 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-[#00F0FF] font-mono uppercase tracking-wider">
                    Email Principal
                  </span>
                  <span className="text-white font-medium">
                    quintannaalan@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex gap-2 relative z-10">
                {/* Botón Copiar */}
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"
                  title="Copiar Email"
                >
                  {copied ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
                {/* Botón Abrir */}
                <button
                  onClick={() => window.open("mailto:quintannaalan@gmail.com")}
                  className="p-2 hover:bg-white/10 rounded-md text-gray-400 hover:text-[#00F0FF] transition-colors"
                  title="Enviar Correo"
                >
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Redes Sociales (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {contacts.map((c) => (
              <button
                key={c.label}
                onClick={() => window.open(c.href, "_blank")}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 group ${c.color}`}
              >
                <div className="text-gray-400 group-hover:text-inherit transition-colors">
                  {c.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {c.label}
                </span>
              </button>
            ))}
          </div>

          {/* Botón de Descarga CV (Full Width) */}
          <button
            onClick={() => window.open("/CV_Alan_Quintana.pdf", "_blank")}
            className="w-full mt-4 flex items-center justify-center gap-3 p-4 rounded-lg 
           bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 
           hover:bg-[#7B2CBF] hover:text-white hover:shadow-[0_0_20px_rgba(123,44,191,0.4)]
           text-[#7B2CBF] font-bold tracking-wide transition-all duration-300 group"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>DESCARGAR C.V.</span>
          </button>
        </div>

        {/* Footer Decorativo */}
        <div className="mt-6 flex justify-between items-center text-[10px] text-[#00F0FF] font-mono uppercase border-t border-white/5 pt-4">
          <span>System Status: Online</span>
          <span>Mexico, CST</span>
        </div>
      </div>
    </Modal>
  );
}
