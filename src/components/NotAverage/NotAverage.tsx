import * as SC from "./NotAverageStyled";

import notAverageMob from "../../assets/images/image-not-average-mobile.webp";

const NotAverage: React.FC = () => {
  return (
    <SC.NotAverageCon>
      <SC.Title>
        Not your average book <SC.Highlight>club</SC.Highlight>
      </SC.Title>
      <SC.Content>
        Connect with a community that speaks your language - from{" "}
        <span>Python</span> to <span>TypeScript</span> and everything in
        between. Our discussions blend technical depth with practical
        applications.
      </SC.Content>
      <SC.PicThumb>
        <img src={notAverageMob} alt="not average" />
      </SC.PicThumb>
    </SC.NotAverageCon>
  );
};

export default NotAverage;
