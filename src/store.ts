import { create } from "zustand";
import { GAMES_DATA, type TGame } from "./data/games.data";
import type { TGameMenuCategory, TLevelFocus } from "./types";

interface IStore {
  activeGameSlug: string;
  setActiveGameSlug: (slug: string) => void;
  getActiveGame: () => TGame | undefined;
  levelFocus: TLevelFocus;
  setLevelFocus: (focus: TLevelFocus) => void;
  activeCategoryGameMenu: TGameMenuCategory;
  setActiveCategoryGameMenu: (slug: TGameMenuCategory) => void;
}

export const useGameStore = create<IStore>((set) => ({
  activeGameSlug: "ghost-of-tsushima",
  setActiveGameSlug: (slug: string) => set({ activeGameSlug: slug }),
  getActiveGame: (): TGame | undefined => {
    const state = useGameStore.getState();
    return GAMES_DATA.find((game) => game.slug === state.activeGameSlug);
  },
  levelFocus: "game-carousel",
  setLevelFocus: (focus: TLevelFocus) => set({ levelFocus: focus }),

  activeCategoryGameMenu: "play",
  setActiveCategoryGameMenu: (slug: TGameMenuCategory) =>
    set({ activeCategoryGameMenu: slug }),
}));
