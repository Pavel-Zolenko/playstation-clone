export const GAMES_DATA = [
  {
    title: "PlayStation Store",
    slug: "playstation-store",
    coverImage: `${import.meta.env.BASE_URL}images/covers/ps-store-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/ps-store-bg.jpg`,
    platform: "PS5",
  },
  {
    title: "Final Fantasy VII Remake",
    slug: "final-fantasy-vii-remake",
    coverImage: `${import.meta.env.BASE_URL}images/covers/ff7-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/ff7-bg.jpg`,
    platform: "PS5",
  },
  {
    title: "Ghost of Tsushima",
    slug: "ghost-of-tsushima",
    coverImage: `${import.meta.env.BASE_URL}images/covers/ghost-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/ghost-bg.jpg`,
    platform: "PS5",
  },
  {
    title: "Shadow of the Colossus",
    slug: "shadow-of-the-colossus",
    coverImage: `${import.meta.env.BASE_URL}images/covers/shadov-colossus-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/shadow-colossus-bg.jpg`,
    platform: "PS5",
  },
  {
    title: "Chrono Cross",
    slug: "chrono-cross",
    coverImage: `${import.meta.env.BASE_URL}images/covers/chrono-cross-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/chrono-cross-bg.jpg`,
    platform: "PS4",
  },

  {
    title: "Resident Evil 2",
    slug: "resident-evil-2",
    coverImage: `${import.meta.env.BASE_URL}images/covers/resident-evil-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/resident-evil-bg.jpg`,
    platform: "PS4",
  },
  {
    title: "Rayman Legends",
    slug: "rayman-legends",
    coverImage: `${import.meta.env.BASE_URL}images/covers/rayman-legends-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/rayman-legends-bg.jpg`,
    platform: "PS4",
  },
  {
    title: "Call of Duty: Modern Warfare",
    slug: "call-of-duty-modern-warfare",
    coverImage: `${import.meta.env.BASE_URL}images/covers/call-of-duty-modern-warfare-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/call-of-duty-modern-warfare-bg.jpg`,
    platform: "PS4",
  },
  {
    title: "Baldur's Gate 3",
    slug: "baldurs-gate-3",
    coverImage: `${import.meta.env.BASE_URL}images/covers/baldurs-gate-3-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/baldurs-gate-3-bg.jpg`,
    platform: "PS5",
  },
  {
    title: "Death Stranding",
    slug: "death-stranding",
    coverImage: `${import.meta.env.BASE_URL}images/covers/death-stranding-cover.jpg`,
    bgImage: `${import.meta.env.BASE_URL}images/backgrounds/death-stranding-bg.jpg`,
    platform: "PS5",
  },
];

export type TGame = (typeof GAMES_DATA)[number];
