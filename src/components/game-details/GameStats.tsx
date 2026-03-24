import type { TGame } from "../../data/games.data";

interface Props {
  game: TGame;
}

export function GameStats({ game }: Props) {
  return (
    <div className="flex flex-col gap-8 justify-between pl-3">
      <div>
        <div className="mb-1">
          <img
            src={`${import.meta.env.BASE_URL}images/platforms/${
              game.platform === "PS5" ? "ps5" : "ps4"
            }.png`}
            alt={game.platform}
            width={50}
            className="filter brightness-0 invert"
          />
        </div>
        <span className="text-3xl font-semibold">{game.title}</span>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <StatBlock label="PLAYED FOR" value="23H15M" />
        <StatBlock label="STORAGE" value="152GB" />
        <StatBlock label="ADDONS" value="6" />
        <StatBlock label="OWNED BY FRIENDS" value="12" />
      </div>
    </div>
  );
}

interface StatBlockProps {
  label: string;
  value: string;
}

const StatBlock = ({ label, value }: StatBlockProps) => {
  const parts = value.match(/\d+|[A-Za-z]+/g) || [];

  return (
    <div className="flex flex-col">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-300">
        {label}
      </span>
      <span className="text-white font-bold">
        {parts.map((part, i) =>
          /\d/.test(part) ? (
            <span key={i} className="text-3xl">
              {part}
            </span>
          ) : (
            <span key={i} className="text-sm ">
              {part}
            </span>
          ),
        )}
      </span>
    </div>
  );
};
