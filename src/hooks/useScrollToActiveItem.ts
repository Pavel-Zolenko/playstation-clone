import { useEffect } from "react";

type Props = {
  activeEl: HTMLElement | null;
  itemRefs: { current: (HTMLElement | null)[] };
  levelFocus: string;
};

export const useScrollToActiveItem = ({ activeEl, itemRefs, levelFocus }: Props) => {
  useEffect(() => {
    if (levelFocus !== "game-menu-content") return;
    if (!activeEl) return;

    const items = itemRefs.current;
    if (!items.length) return;

    const lastItem = items[items.length - 1];

    const block: ScrollLogicalPosition = activeEl === lastItem ? "center" : "nearest";

    activeEl.scrollIntoView({
      behavior: "smooth",
      block,
    });
  }, [activeEl, levelFocus, itemRefs]);
};
