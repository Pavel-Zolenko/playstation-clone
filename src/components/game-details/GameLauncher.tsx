import { motion, type Variants } from "motion/react";
import { ProgressBar } from "../ui/ProgressBar";
import { useGameStore } from "../../store";

const progressVariants: Variants = {
  default: {
    transform: "translateY(150%)",
  },

  details: {
    transform: "translateY(0%)",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },

  "game-menu": {
    transform: "translateY(90%)",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  "game-menu-content": {
    transform: "translateY(90%)",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

export function GameLauncher() {
  const { levelFocus } = useGameStore();

  return (
    <div className="flex flex-col justify-between w-70">
      <motion.div
        className="text-sm"
        variants={progressVariants}
        initial="default"
        animate={levelFocus}
      >
        <ProgressBar
          isActive={
            levelFocus === "details" ||
            levelFocus === "game-menu" ||
            levelFocus === "game-menu-content"
          }
          levelFocus={levelFocus}
          title="Trophy progress"
          percentage="23%"
        />
      </motion.div>

      <button className="group w-full px-5 py-5 overflow-hidden rounded-sm border-2 border-white bg-transparent  transition-all duration-300 ease-in-out hover:bg-white/10">
        <div className="flex items-center justify-between gap-1 ">
          <span className="text-xs font-bold uppercase tracking-wide text-white">
            Start the game
          </span>
          <div className=" flex h-8 w-8 items-center justify-center rounded-full border-2 border-white  transition-transform duration-300 group-hover:scale-110">
            <div className="h-2 w-2 rounded-full border-2 border-white" />
          </div>
        </div>
      </button>
    </div>
  );
}
