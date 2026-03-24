import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { Menu } from "../menu/Menu";
import { useGameStore } from "../../store";
import { GlowWrapper } from "../ui/GlowWrapper";
import type { TGameMenuCategory } from "../../types";
import { HotKeys } from "../../config/hotkeys.config";
import { GameStats } from "../game-details/GameStats";
import { CATEGORIES_GAME_MENU } from "../../data/categories.data";
import { GameSectionSwitcher } from "../game-section-switcher/GameSectionSwitcher";

const titleSection: Record<TGameMenuCategory, string> = {
  play: "Continue game from save point",
  multiplayer: "Join friend's session ",
  trophies: "Trophies",
  store: "Store",
  community: "Community",
  media: "Media",
  management: "Management",
};

export function GameMenu() {
  const [activeCategory, setActiveCategory] = useState<TGameMenuCategory>("play");

  const { levelFocus, getActiveGame } = useGameStore();
  const game = getActiveGame();

  const resetScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resetScrollContainerRef.current) {
      resetScrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  useHotkeys(HotKeys.ArrowRight, () => {
    if (levelFocus === "game-menu") {
      const nextCategory =
        CATEGORIES_GAME_MENU.findIndex((cat) => cat.slug === activeCategory) + 1;
      if (nextCategory < CATEGORIES_GAME_MENU.length) {
        setActiveCategory(CATEGORIES_GAME_MENU[nextCategory].slug);
      }
    }
  });

  useHotkeys(HotKeys.ArrowLeft, () => {
    if (levelFocus === "game-menu") {
      const prevCategory =
        CATEGORIES_GAME_MENU.findIndex((cat) => cat.slug === activeCategory) - 1;
      if (prevCategory >= 0) {
        setActiveCategory(CATEGORIES_GAME_MENU[prevCategory].slug);
      }
    }
  });

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div
      className={
        `absolute top-[calc(-1*var(--header-h))] left-0 right-0 bottom-0 transition-all duration-350 ease-in-out will-change-transform` +
        (levelFocus === "game-menu" || levelFocus === "game-menu-content"
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none")
      }
    >
      <div className="absolute inset-0 flex flex-col w-220 pt-[calc(1*var(--header-h))] pl-26 bg-[#1b1f23]">
        <div className="flex flex-1 flex-col gap-12 pr-26 ">
          <div className="relative w-fit">
            <GlowWrapper isActive={levelFocus === "game-menu"} />
            <Menu
              categories={CATEGORIES_GAME_MENU}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              itemClassName="text-xs px-2"
            />
          </div>
          <div className="pr-11">
            <GameStats game={game} />
          </div>

          <h3 className="mb-1 uppercase tracking-wider font-bold opacity-60">
            {titleSection[activeCategory]}
          </h3>
        </div>

        <div className="relative flex-1 w-[97%] h-full overflow-y-auto fade-bottom">
          <div
            ref={resetScrollContainerRef}
            className="relative flex-1 h-full overflow-y-auto overflow-x-hidden custom-scrollbar"
          >
            <GameSectionSwitcher activeCategory={activeCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}
