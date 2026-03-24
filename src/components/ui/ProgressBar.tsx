import { motion, type Variants } from "motion/react";
import type { Trophy } from "../../data/trophies.data";
import type { TLevelFocus } from "../../types";

const progressVariants: Variants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

type Props = {
  isActive: boolean;
  levelFocus: TLevelFocus;
  title: string;
  data?: Trophy;
  percentage?: string;
};

export function ProgressBar({ isActive, levelFocus, title, data, percentage }: Props) {
  const percentageDisplayText: Partial<Record<TLevelFocus, string>> = {
    details: percentage,
    "game-menu": percentage,
    "game-menu-content": data
      ? `${data.collectedTrophies}/${data.totalTrophies}`
      : percentage,
  };

  const progressBarPercentage: Partial<Record<TLevelFocus, string>> = {
    details: percentage,
    "game-menu": percentage,
    "game-menu-content": data
      ? Math.round((data.collectedTrophies / data.totalTrophies) * 100) + "%"
      : percentage,
  };

  return (
    <motion.div className="space-y-2 ">
      <div className="flex items-center justify-between px-5">
        <span className="font-semibold uppercase tracking-wider ">{title}</span>
        <span className="font-bold">{percentageDisplayText[levelFocus]}</span>
      </div>
      <div className="h-1 w-full rounded-full bg-[#54575a] overflow-hidden">
        <motion.div
          style={{ width: progressBarPercentage[levelFocus]! }}
          className="h-full rounded-full bg-blue-600 origin-left"
          variants={progressVariants}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
        />
      </div>
    </motion.div>
  );
}
