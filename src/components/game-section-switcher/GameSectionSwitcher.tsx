import React from "react";
import { motion, AnimatePresence } from "motion/react";

import type { TGameMenuCategory } from "../../types";
import { FriendsList } from "./FriendsList";
import { SavesList } from "./SavesList";
import { TrophiesList } from "./TrophiesList";

type Props = {
  activeCategory: TGameMenuCategory;
};

const views: Partial<Record<TGameMenuCategory, React.ComponentType>> = {
  play: SavesList,
  multiplayer: FriendsList,
  trophies: TrophiesList,
};

export function GameSectionSwitcher({ activeCategory }: Props) {
  const Component = views[activeCategory];

  return (
    <div className="relative h-full mr-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {Component ? (
            <Component />
          ) : (
            <p className="uppercase py-20 text-xl text-center font-bold opacity-60 tracking-wider">
              No information
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
