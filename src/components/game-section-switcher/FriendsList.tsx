import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { useScrollToActiveItem } from "../../hooks/useScrollToActiveItem";
import { ActiveItemIndicator } from "../ui/ActiveItemIndicator";
import { FRIENDS_DATA } from "../../data/friends.data";
import { HotKeys } from "../../config/hotkeys.config";
import { useGameStore } from "../../store";

export function FriendsList() {
  const [activeItem, setActiveItem] = useState(0);
  const { levelFocus } = useGameStore();

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeEl = itemRefs.current[activeItem];

  useScrollToActiveItem({ activeEl, itemRefs, levelFocus });

  const friends = FRIENDS_DATA;

  useHotkeys(HotKeys.ArrowRight, () => {
    if (levelFocus === "game-menu-content" && friends) {
      const nextFriend = friends.findIndex((_, idx) => idx === activeItem) + 1;
      if (nextFriend < friends.length) {
        setActiveItem(nextFriend);
      }
    }
  });

  useHotkeys(HotKeys.ArrowLeft, () => {
    if (levelFocus === "game-menu-content" && friends) {
      const prevFriend = friends.findIndex((_, idx) => idx === activeItem) - 1;
      if (prevFriend >= 0) {
        setActiveItem(prevFriend);
      }
    }
  });

  if (!friends || friends.length === 0) {
    return <div>No friends for the selected game</div>;
  }

  return (
    <ul className="flex flex-col gap-1 pb-10">
      {friends.map((friend, idx) => (
        <motion.li
          layout
          key={friend.username}
          ref={(el: HTMLLIElement | null) => {
            itemRefs.current[idx] = el;
          }}
          onClick={() => setActiveItem(idx)}
          className="relative px-1.5 py-2"
        >
          {levelFocus === "game-menu-content" && idx === activeItem && (
            <ActiveItemIndicator isActive={levelFocus === "game-menu-content"} />
          )}
          <div className="flex gap-6">
            <div className="w-18 aspect-square bg-gray-300 cover">
              <img src={friend.avatar} alt="avatar" />
            </div>
            <div className="flex flex-col justify-center gap-0.5">
              <span className="text-xs uppercase opacity-70 tracking-wider">
                {friend.username}
              </span>
              <span className="text-xl font-bold">{friend.status}</span>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
