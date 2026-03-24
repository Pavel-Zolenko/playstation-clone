import { useEffect, useRef, useState } from "react";
import { Bell, Gamepad2, Handbag, SmilePlus, Trophy, Wifi } from "lucide-react";

import { useElementHeight } from "../../../hooks/useElementHeight";

const getTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

export function Header() {
  const ref = useRef<HTMLElement>(null);
  const height = useElementHeight(ref);
  const [currentDate, setCurrentDate] = useState(getTime());

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const update = () => setCurrentDate(getTime());

    // initial render update
    update();

    // ms until the start of next minute
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // set a timeout to align to the next minute, then start a 60s interval
    timeoutRef.current = setTimeout(() => {
      update();
      intervalRef.current = setInterval(update, 60_000);
    }, msUntilNextMinute);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (height > 0) {
      document.documentElement.style.setProperty("--header-h", `${height}px`);
    }
  }, [height]);

  return (
    <header ref={ref} className="z-10 flex justify-between items-center p-8 pb-4">
      <div className="flex items-center gap-18">
        <div className="flex items-center gap-3">
          <time className="font-semibold">{currentDate}</time>
          <Wifi className="size-4" />
        </div>
        <div className="flex items-center  gap-2 text-xs">
          <span className="flex items-center gap-1">
            <Handbag className="size-5" />
            <span>3</span>
          </span>
          <span>|</span>
          <span>$9.99</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-medium ">
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <span className="-mt-1.5">1</span>
        </div>
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <span className="-mt-1.5">2</span>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm ">
        <div className="flex items-center gap-1">
          <Bell fill="white" />
          <span>12</span>
        </div>
        <div className="flex items-center gap-1">
          <SmilePlus />
          <span>9</span>
        </div>
        <div className="flex gap-2">
          <img
            src={`${import.meta.env.BASE_URL}icons/ps-icon.svg`}
            alt="User Avatar"
            width={24}
            height={24}
          />
          <div className="flex flex-row gap-2 items-center">
            <img
              src={`${import.meta.env.BASE_URL}images/avatar.png`}
              alt="avatar"
              width={48}
              height={48}
            />
            <div>
              <div>FallingStickman</div>
              <div className="flex items-center gap-1 text-xs ">
                <Trophy fill="white" className="size-3" />
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
