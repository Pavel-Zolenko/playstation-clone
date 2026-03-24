import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  // CornerDownLeft,
  Save,
} from "lucide-react";

export const HotkeysDataCarousel = [
  {
    icon: <ArrowUp />,
    label: "TOP MENU",
  },
  {
    icon: <ArrowDown />,
    label: "DETAILS",
  },
  {
    icon: <ArrowLeft />,
    label: "PREV GAME",
  },
  {
    icon: <ArrowRight />,
    label: "NEXT GAME",
  },
];

export const HotkeysDataDetails = [
  {
    icon: <Save />,
    label: "SAVES",
  },
  {
    icon: <ArrowDown />,
    label: "SELECT",
  },

  {
    icon: <ArrowUp />,
    label: "BACK",
  },
];

export const HotkeysDataGameMenu = [
  {
    icon: <ArrowLeft />,
    label: "PREV",
  },
  {
    icon: <ArrowRight />,
    label: "NEXT",
  },
  {
    icon: <ArrowDown />,
    label: "SELECT",
  },
  {
    icon: <ArrowUp />,
    label: "BACK",
  },
];

export type THotkeyDetails = (typeof HotkeysDataDetails)[number];

export type THotkeyCarousel = (typeof HotkeysDataCarousel)[number];
