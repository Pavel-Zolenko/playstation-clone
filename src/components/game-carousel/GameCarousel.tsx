import type { RefObject } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

// @ts-expect-error: CSS side-effect import
import "swiper/css";

import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";
import { useGameStore } from "../../store";

interface Props {
  swiperRef: RefObject<SwiperRef | null>;
}

export function GameCarousel({ swiperRef }: Props) {
  const { levelFocus, setActiveGameSlug } = useGameStore();

  const isShownGameCarousel =
    levelFocus === "details" ||
    levelFocus === "game-menu" ||
    levelFocus === "game-menu-content";

  return (
    <div
      className={
        `transform transition-all duration-350 ease-in-out will-change-transform` +
        (isShownGameCarousel
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100")
      }
    >
      <div className="ml-32">
        <Swiper
          ref={swiperRef}
          slidesPerView={7}
          loop
          spaceBetween={20}
          slideToClickedSlide
          initialSlide={1}
          onSlideChange={(e) => {
            const gameSlug = GAMES_DATA[e.realIndex].slug;
            setActiveGameSlug(gameSlug);
          }}
        >
          {GAMES_DATA.map((game) => (
            <SwiperSlide key={game.slug}>
              <GameItem game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
