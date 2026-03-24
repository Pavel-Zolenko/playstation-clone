import { useState, useRef } from "react";
import { type SwiperRef } from "swiper/react";
import { useHotkeys } from "react-hotkeys-hook";

import { Menu } from "./components/menu/Menu";
import { GameCarousel } from "./components/game-carousel/GameCarousel";
import { GameDetails } from "./components/game-details/GameDetails";
import { GameMenu } from "./components/game-menu/GameMenu";
import { GlowWrapper } from "./components/ui/GlowWrapper";
import { CATEGORIES_MAIN } from "./data/categories.data";
import type { TAppCategory, TLevelFocus } from "./types";
import { HotKeys } from "./config/hotkeys.config";
import { useGameStore } from "./store";

function App() {
  const [activeCategory, setActiveCategory] = useState<TAppCategory>("all");
  const { levelFocus, setLevelFocus } = useGameStore();

  const swiperRef = useRef<SwiperRef>(null);
  const isFirstRender = useRef(true);

  const navigationMap: Record<
    TLevelFocus,
    Partial<Record<"up" | "down", TLevelFocus>>
  > = {
    "top-menu": {
      down: "game-carousel",
    },

    "game-carousel": {
      up: "top-menu",
      down: "details",
    },

    details: {
      up: "game-carousel",
      down: "game-menu",
    },

    "game-menu": {
      up: "details",
      down: "game-menu-content",
    },

    "game-menu-content": {
      up: "game-menu",
    },
  };

  const move = (direction: "up" | "down") => {
    const next = navigationMap[levelFocus]?.[direction];

    if (next) {
      setLevelFocus(next);
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  };

  useHotkeys(HotKeys.ArrowUp, () => move("up"));
  useHotkeys(HotKeys.ArrowDown, () => move("down"));

  useHotkeys(HotKeys.ArrowRight, () => {
    if (levelFocus === "top-menu") {
      const nextCategory =
        CATEGORIES_MAIN.findIndex((cat) => cat.slug === activeCategory) + 1;
      if (nextCategory < CATEGORIES_MAIN.length) {
        setActiveCategory(CATEGORIES_MAIN[nextCategory].slug);
      }
    } else if (levelFocus === "game-carousel") {
      swiperRef.current?.swiper.slideNext();
    }
  });

  useHotkeys(HotKeys.ArrowLeft, () => {
    if (levelFocus === "top-menu") {
      const prevCategory =
        CATEGORIES_MAIN.findIndex((cat) => cat.slug === activeCategory) - 1;
      if (prevCategory >= 0) {
        setActiveCategory(CATEGORIES_MAIN[prevCategory].slug);
      }
    } else if (levelFocus === "game-carousel") {
      swiperRef.current?.swiper.slidePrev();
    }
  });

  return (
    <div className="relative flex flex-col h-full justify-between pb-10">
      <div className="relative w-fit ml-28 mt-5">
        <GlowWrapper isActive={levelFocus === "top-menu"} />
        <Menu
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={CATEGORIES_MAIN}
        />
      </div>

      <div className="relative">
        <GlowWrapper
          isActive={levelFocus === "game-carousel" && !isFirstRender.current}
        />
        <GameCarousel swiperRef={swiperRef} />
      </div>

      <GameDetails />
      <GameMenu />
    </div>
  );
}

export default App;
