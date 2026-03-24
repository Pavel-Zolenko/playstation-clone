import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { CloudDownload } from "lucide-react";
import { motion } from "motion/react";

import { useScrollToActiveItem } from "../../hooks/useScrollToActiveItem";
import { ActiveItemIndicator } from "../ui/ActiveItemIndicator";
import { HotKeys } from "../../config/hotkeys.config";

import { useGameStore } from "../../store";
import { SAVES_DATA } from "../../data/save.data";

export function SavesList() {
  const [activeItem, setActiveItem] = useState(0);

  const { levelFocus, getActiveGame } = useGameStore();
  const activeGame = getActiveGame();

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeEl = itemRefs.current[activeItem];

  const savesForGame = SAVES_DATA.find((g) => g.title === activeGame?.title);

  useScrollToActiveItem({ activeEl, itemRefs, levelFocus });

  useHotkeys(HotKeys.ArrowRight, () => {
    if (levelFocus === "game-menu-content" && savesForGame) {
      const nextCategory =
        savesForGame.saves.findIndex((_, idx) => idx === activeItem) + 1;
      if (nextCategory < savesForGame.saves.length) {
        setActiveItem(nextCategory);
      }
    }
  });

  useHotkeys(HotKeys.ArrowLeft, () => {
    if (levelFocus === "game-menu-content" && savesForGame) {
      const prevCategory =
        savesForGame.saves.findIndex((_, idx) => idx === activeItem) - 1;
      if (prevCategory >= 0) {
        setActiveItem(prevCategory);
      }
    }
  });

  if (!savesForGame) {
    return <div>No saves for selected game.</div>;
  }

  return (
    <ul className="relative flex flex-col gap-3 pb-10">
      {savesForGame.saves.map((save, idx) => {
        return (
          <motion.li
            key={save.title}
            layout
            ref={(el: HTMLLIElement | null) => {
              itemRefs.current[idx] = el;
            }}
            onClick={() => setActiveItem(idx)}
            className="relative p-2"
          >
            {levelFocus === "game-menu-content" && idx === activeItem && (
              <ActiveItemIndicator isActive={levelFocus === "game-menu-content"} />
            )}
            <div className="flex gap-6">
              <div className="w-46 aspect-video bg-gray-500">
                <img src={save.image} alt="screenshot" />
              </div>

              <div className="flex flex-1 py-3">
                <div className="flex flex-4 flex-col justify-between ">
                  <div>
                    <h4 className="text-sm tracking-wider uppercase font-bold opacity-60 ">
                      {activeGame?.title}
                    </h4>
                    <p className="text-2xl font-bold">{save.title}</p>
                  </div>
                  <div className="flex gap-5">
                    <span className="text-sm opacity-60">{save.date}</span>
                    <span className="text-sm opacity-60">{save.time}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between items-start text-sm opacity-60 ">
                  <CloudDownload />
                  <span>{save.progress}</span>
                </div>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
