import type { TGame } from "../../../data/games.data";
import cn from "clsx";

interface Props {
  game: TGame;
}

export function GameItem({ game }: Props) {
  return (
    <button>
      <div className={cn("transition-all duration-300 ease-in-out")}>
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-44 h-44 p-0.5 border-2 border-transparent object-cover transition-all duration-300 ease-in-out "
        />
      </div>

      <div className="mt-2">
        <img
          src={
            game.platform === "PS5"
              ? "/playstation-clone/images/platforms/ps5.png"
              : "/playstation-clone/images/platforms/ps4.png"
          }
          alt={game.platform}
          width={50}
          className="filter brightness-0 invert opacity-0 transition-opacity duration-300 ease-in-out"
        />
      </div>
    </button>
  );
}
