import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ open, onClose, children, title }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fondo borroso */}
          <motion.div
            className="fixed inset-0 bg-black/ backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Contenedor */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 bg-[#0f0f0f] border border-white/10 rounded-xl 
                       p-8 w-[90%] max-w-md shadow-xl"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{ translateX: "-50%", translateY: "-50%" }}
          >
            {title && (
              <h2 className="text-xl font-display text-white mb-4">{title}</h2>
            )}

            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
