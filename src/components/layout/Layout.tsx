import type { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { useGameStore } from "../../store";

const bgVariants = {
  default: {
    scale: 1.1,
    opacity: 0,
  },
  "top-menu": {
    scale: 1.1,
    opacity: 1,
  },
  "game-carousel": {
    scale: 1.1,
    opacity: 1,
  },
  details: {
    scale: 1.2,
    opacity: 1,
  },
  "game-menu": {
    scale: 1,
    opacity: 1,
  },
  "game-menu-content": {
    scale: 1,
    opacity: 1,
  },
};

export function Layout({ children }: PropsWithChildren<unknown>) {
  const { levelFocus, getActiveGame } = useGameStore();
  const bgImage = getActiveGame()?.bgImage;

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={bgImage}
          className="absolute inset-0 bg-cover bg-no-repeat bg-center will-change-transform"
          style={{ backgroundImage: `url('${bgImage}')` }}
          variants={bgVariants}
          initial="default"
          animate={levelFocus} // 👈 управляет только scale
          exit={{ opacity: 0 }} // 👈 fade-out старой картинки
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            scale: { duration: 0.5, ease: "easeInOut" },
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.60)_100%)]" />

      <div className="relative flex flex-col h-full overflow-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
