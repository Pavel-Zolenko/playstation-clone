import type { IAppCategory, IGameMenuCategory } from "../types";

export const CATEGORIES_MAIN: IAppCategory[] = [
  { title: "All", slug: "all" },
  { title: "Racing", slug: "racing" },
  { title: "Roleplaing", slug: "roleplaying" },
  { title: "Sports", slug: "sports" },
  { title: "Online", slug: "online" },
  { title: "Shooter", slug: "shooter" },
];

export const CATEGORIES_GAME_MENU: IGameMenuCategory[] = [
  { title: "Play", slug: "play" },
  { title: "Multiplayer", slug: "multiplayer" },
  { title: "Trophies", slug: "trophies" },
  { title: "Store", slug: "store" },
  { title: "Community", slug: "community" },
  { title: "Media", slug: "media" },
  { title: "Management", slug: "management" },
];
