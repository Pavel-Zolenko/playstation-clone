import type { THotkeyCarousel } from "../../data/hotkeys.data";

interface Props {
  keyDetail: THotkeyCarousel;
}

export function Keyinfo({ keyDetail }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center bg-white rounded-full  text-[#353841] p-0.5">
        {keyDetail.icon}
      </div>
      <div>{keyDetail.label}</div>
    </div>
  );
}
