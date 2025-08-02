import * as SC from "./HeroStyled";

import heroPicMob from "../../assets/images/image-hero-mobile.webp";
import starIcon from "../../assets/images/icon-star.svg";
import avatarsIcon from "../../assets/images/image-avatars.webp";

const Hero: React.FC = () => {
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
      <div>
        <img src={heroPicMob} alt="hero" />
      </div>
    </SC.HeroCon>
  );
};

export default Hero;
