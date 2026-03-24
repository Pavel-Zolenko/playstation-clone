import { useEffect, useState, type RefObject } from "react";

export function useElementHeight<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const newH = Math.round(el.getBoundingClientRect().height);
      setHeight((prev) => (prev !== newH ? newH : prev));
    };

    // Initial measurement
    update();

    // Observe changes
    const ro = new ResizeObserver(update);
    ro.observe(el);

    // Also update on window resize as fallback
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return height;
}
