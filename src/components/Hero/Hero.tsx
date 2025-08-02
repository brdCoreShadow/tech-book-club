import * as SC from "./HeroStyled";

import heroPicMob from "../../assets/images/image-hero-mobile.webp";
import starIcon from "../../assets/images/icon-star.svg";
import avatarsIcon from "../../assets/images/image-avatars.webp";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon>
      <div>
        <SC.HeroTitle>Join the ultimate tech book club</SC.HeroTitle>
        <SC.HeroContent>
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </SC.HeroContent>
        <SC.HeroBtn>review membership options</SC.HeroBtn>
        <div>
          <div>
            <img src={avatarsIcon} alt="avatars" />
          </div>
          <div>
            <ul>
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
            </ul>
            <p>200+ developers joined already</p>
          </div>
        </div>
      </div>
      <div>
        <img src={heroPicMob} alt="hero" />
      </div>
    </SC.HeroCon>
  );
};

export default Hero;
