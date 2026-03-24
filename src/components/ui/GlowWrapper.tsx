import { motion, type Variants } from "framer-motion";

const glowVariants: Variants = {
  idle: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: [0, 0.8, 0],
    scale: [0.95, 1.05, 1],
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export function GlowWrapper({ isActive }: { isActive?: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-xl pointer-events-none"
      variants={glowVariants}
      initial="idle"
      animate={isActive ? "animate" : "idle"}
      style={{
        background:
          "radial-gradient(circle, rgba(96,165,250,0.6) 0%, rgba(96,165,250,0.25) 95%, transparent 100%)",
        filter: "blur(12px)",
      }}
    />
  );
}
