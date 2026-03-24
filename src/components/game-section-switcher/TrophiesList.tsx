import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, type Variants } from "motion/react";

import { useScrollToActiveItem } from "../../hooks/useScrollToActiveItem";
import { ActiveItemIndicator } from "../ui/ActiveItemIndicator";
import { trophiesByGame } from "../../data/trophies.data";
import { HotKeys } from "../../config/hotkeys.config";
import { ProgressBar } from "../ui/ProgressBar";
import { useGameStore } from "../../store";

const animatedProgressBar: Variants = {
  initial: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.6, ease: "easeInOut", when: "beforeChildren" },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", when: "beforeChildren" },
  },
};

export function TrophiesList() {
  const [activeItem, setActiveItem] = useState(0);
  const { levelFocus, activeGameSlug } = useGameStore();

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeEl = itemRefs.current[activeItem];

  const trophies = trophiesByGame[activeGameSlug];

  useScrollToActiveItem({ activeEl, itemRefs, levelFocus });

  useHotkeys(HotKeys.ArrowRight, () => {
    if (levelFocus === "game-menu-content" && trophies) {
      const nextTrophy = trophies.findIndex((_, idx) => idx === activeItem) + 1;
      if (nextTrophy < trophies.length) {
        setActiveItem(nextTrophy);
      }
    }
  });

  useHotkeys(HotKeys.ArrowLeft, () => {
    if (levelFocus === "game-menu-content" && trophies) {
      const prevTrophy = trophies.findIndex((_, idx) => idx === activeItem) - 1;
      if (prevTrophy >= 0) {
        setActiveItem(prevTrophy);
      }
    }
  });

  if (!trophies || trophies.length === 0) {
    return <div>No trophies yet</div>;
  }

  return (
    <ul className="flex flex-col pb-10">
      {trophies.map((trophy, idx) => (
        <motion.li
          key={trophy.id}
          layout
          ref={(el: HTMLLIElement | null) => {
            itemRefs.current[idx] = el;
          }}
          onClick={() => setActiveItem(idx)}
          className="relative px-1 py-2.5 will-change-transform"
        >
          {levelFocus === "game-menu-content" && idx === activeItem && (
            <ActiveItemIndicator isActive={levelFocus === "game-menu-content"} />
          )}
          <div className="flex gap-6">
            <div className="w-15 h-15 bg-gray-700 cover">
              <img src={trophy.avatar} alt="avatar" />
            </div>
            <div className="flex flex-1 justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold">{trophy.title}</span>
                <span className="text-sm opacity-60">{trophy.description}</span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end text-xs font-bold tracking-wider">
                  <span>{trophy.rarityPercent}</span>
                  <span>{trophy.rarity}</span>
                </div>
                <div className="">{trophy.icon}</div>
              </div>
            </div>
          </div>

          <motion.div
            className="pl-16 pr-9 text-xs"
            key={`progress-${trophy.id}`}
            initial="initial"
            animate={
              levelFocus === "game-menu-content" && idx === activeItem
                ? "animate"
                : "initial"
            }
            variants={animatedProgressBar}
          >
            <ProgressBar
              levelFocus={levelFocus}
              title="progress"
              data={trophy}
              isActive={levelFocus === "game-menu-content" && idx === activeItem}
            />
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}
