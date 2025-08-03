import * as SC from "./HeroStyled";

import heroPicMob from "../../assets/images/image-hero-mobile.webp";
import heroPicTab from "../../assets/images/image-hero-tablet.webp"
import heroPicDesk from "../../assets/images/image-hero-desktop.webp"

import starIcon from "../../assets/images/icon-star.svg";
import avatarsIcon from "../../assets/images/image-avatars.webp";
import { useScreenSize } from "@/hooks/useScreenSize";

const Hero: React.FC = () => {

const {isTablet , isDesktop} = useScreenSize()

  return (
    <SC.HeroCon>
      <SC.HeroContentCon>
        <SC.HeroTitle>Join the ultimate tech book club</SC.HeroTitle>
        <SC.HeroContent>
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </SC.HeroContent>
        <SC.HeroBtn>review membership options</SC.HeroBtn>
        <SC.AvatarsCon>
          <SC.AvatarsThumb>
            <img src={avatarsIcon} alt="avatars" />
          </SC.AvatarsThumb>
          <div>
            <SC.StarsList>
              <li>
                <img src={starIcon} alt="star" />
              </li>
              <li>
                <img src={starIcon} alt="star" />
              </li>
              <li>
                <img src={starIcon} alt="star" />
              </li>
              <li>
                <img src={starIcon} alt="star" />
              </li>
              <li>
                <img src={starIcon} alt="star" />
              </li>
            </SC.StarsList>
            <SC.Attract>200+ developers joined already</SC.Attract>
          </div>
        </SC.AvatarsCon>
      </SC.HeroContentCon>
      <SC.HeroPicThumb>
        <img src={isTablet ? heroPicTab : isDesktop ? heroPicDesk : heroPicMob} alt="hero" />
      </SC.HeroPicThumb>
    </SC.HeroCon>
  );
};

export default Hero;
