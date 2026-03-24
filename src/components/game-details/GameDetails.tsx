import { useState } from "react";

import { useGameStore } from "../../store";
import { Menu } from "../menu/Menu";
import { GameStats } from "./GameStats";
import { GameLauncher } from "./GameLauncher";
import { CATEGORIES_GAME_MENU } from "../../data/categories.data";

export function GameDetails() {
  const [activeCategory, setActiveCategory] = useState<string>("play");
  const { levelFocus, getActiveGame } = useGameStore();

  const game = getActiveGame();

  if (!game) {
    return <div className="text-3xl text-center">Game not found</div>;
  }

  const isVisible =
    levelFocus === "details" ||
    levelFocus === "game-menu" ||
    levelFocus === "game-menu-content";

  return (
    <div
      className={
        `fixed left-0 right-0 bottom-20 transition-all duration-350 ease-in-out ` +
        (isVisible ? "translate-y-0" : "translate-y-full pointer-events-none opacity-0")
      }
    >
      <div className="flex justify-between px-28">
        <div className="flex flex-col gap-10 ">
          <Menu
            categories={CATEGORIES_GAME_MENU}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            itemClassName="text-xs px-2"
          />
          <GameStats game={game} />
        </div>
        <GameLauncher />
      </div>
    </div>
  );
}
