import { KeysPanelCarousel } from "../../keys-panel/KeysPanelCarousel";
import { KeysPanelDetails } from "../../keys-panel/KeysPanelDetails";
import { KeysPanelGameMenu } from "../../keys-panel/KeysPanelGameMenu";

export function Footer() {
  return (
    <div className="relative flex item-center gap-8 pr-18 text-sm ">
      <KeysPanelCarousel />
      <KeysPanelDetails />
      <KeysPanelGameMenu />
    </div>
  );
}
