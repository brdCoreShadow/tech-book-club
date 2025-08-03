import * as SC from "./NotAverageStyled";

import notAverageMob from "../../assets/images/image-not-average-mobile.webp";
import notAverageTab from "../../assets/images/image-not-average-tablet.webp";
import notAverageDesk from "../../assets/images/image-not-average-desktop.webp";
import { useScreenSize } from "@/hooks/useScreenSize";

const NotAverage: React.FC = () => {
  const { isTablet, isDesktop } = useScreenSize();

  return (
    <SC.NotAverageCon>
      <SC.ContentCon>
        <SC.Title>
          Not your average book <SC.Highlight>club</SC.Highlight>
        </SC.Title>
        <SC.Content>
          Connect with a community that speaks your language - from{" "}
          <span>Python</span> to <span>TypeScript</span> and everything in
          between. Our discussions blend technical depth with practical
          applications.
        </SC.Content>
      </SC.ContentCon>
      <SC.PicThumb>
        <img
          src={
            isTablet
              ? notAverageTab
              : isDesktop
              ? notAverageDesk
              : notAverageMob
          }
          alt="not average"
        />
      </SC.PicThumb>
    </SC.NotAverageCon>
  );
};

export default NotAverage;
