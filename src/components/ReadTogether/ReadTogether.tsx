import * as SC from "./ReadTogetherStyled";

import { useScreenSize } from "@/hooks/useScreenSize";

import readTogetherMob from "../../assets/images/image-read-together-mobile.webp";
import readTogetherTablet from "../../assets/images/image-read-together-tablet.webp"
import readTogehtherDesk from "../../assets/images/image-read-together-desktop.webp"

const ReadTogether: React.FC = () => {

const {isTablet, isDesktop} = useScreenSize()

  return (
    <SC.ReadTogetherCon>
      <div>
        <SC.Title>Read together, grow together</SC.Title>
        <SC.List>
          <SC.Item>
            <p>Monthly curated tech reads selected by industry experts</p>
          </SC.Item>
          <SC.Item>
            <p>Virtual and in-person meetups for deep-dive discussions</p>
          </SC.Item>
          <SC.Item>
            <p>Early access to new tech book releases</p>
          </SC.Item>
          <SC.Item>
            <p>Author Q&A sessions with tech thought leaders</p>
          </SC.Item>
        </SC.List>
      </div>
      <SC.PicThumb>
        <img src={isTablet ? readTogetherTablet : isDesktop ? readTogehtherDesk : readTogetherMob} alt="read together" />
      </SC.PicThumb>
    </SC.ReadTogetherCon>
  );
};

export default ReadTogether;
