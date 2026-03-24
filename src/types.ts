export interface IBaseCategory<T extends string> {
  title: string;
  slug: T;
}

export interface IAppCategory {
  title: string;
  slug: TAppCategory;
}

export interface IGameMenuCategory {
  title: string;
  slug: TGameMenuCategory;
}

export type TAppCategory =
  | "all"
  | "racing"
  | "roleplaying"
  | "sports"
  | "online"
  | "shooter";

export type TGameMenuCategory =
  | "play"
  | "multiplayer"
  | "trophies"
  | "store"
  | "community"
  | "media"
  | "management";

export type TLevelFocus =
  | "top-menu"
  | "game-carousel"
  | "details"
  | "game-menu"
  | "game-menu-content";
