import cn from "clsx";
import { HotkeysDataDetails } from "../../data/hotkeys.data";
import { useGameStore } from "../../store";
import { Keyinfo } from "./Keyinfo";

export function KeysPanelDetails() {
  const { levelFocus } = useGameStore();

  return (
    <div
      className={cn(
        "absolute right-20 bottom-4 flex item-center justify-end gap-8 transform transition-all duration-500 ease-in-out will-change-transform",
        levelFocus === "details"
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      )}
    >
      {HotkeysDataDetails.map((hotkey) => (
        <Keyinfo key={hotkey.label} keyDetail={hotkey} />
      ))}
    </div>
  );
}
