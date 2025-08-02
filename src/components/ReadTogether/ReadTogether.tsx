import * as SC from "./ReadTogetherStyled";

import readTogetherMob from "../../assets/images/image-read-together-mobile.webp";

const ReadTogether: React.FC = () => {
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
        <img src={readTogetherMob} alt="read together" />
      </SC.PicThumb>
    </SC.ReadTogetherCon>
  );
};

export default ReadTogether;
