import cn from "clsx";
import { useGameStore } from "../../store";
import { Keyinfo } from "./Keyinfo";
import { HotkeysDataGameMenu } from "../../data/hotkeys.data";

export function KeysPanelGameMenu() {
  const { levelFocus } = useGameStore();
  return (
    <div
      className={cn(
        "absolute right-20 bottom-4 flex item-center justify-end gap-8 transform transition-all duration-500 ease-in-out will-change-transform",
        levelFocus === "game-menu" ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {HotkeysDataGameMenu.map((hotkey) => (
        <Keyinfo key={hotkey.label} keyDetail={hotkey} />
      ))}
    </div>
  );
}
