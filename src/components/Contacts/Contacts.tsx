import * as SC from "./ContactStyled"

import blueskyIcon from "../../assets/images/logo-bluesky.svg"
import linkedInIcon from "../../assets/images/logo-linkedin.svg"

const Contacts: React.FC = () => {
  return (
    <SC.MainCon>
      <h3>© 2024 – Tech Book Club</h3>
      <SC.SocNetList>
        <li><img src={blueskyIcon} alt="bluesky" /></li>
        <li>
            <img src={linkedInIcon} alt="linkedin" />
        </li>
      </SC.SocNetList>
    </SC.MainCon>
  );
};

export default Contacts;
