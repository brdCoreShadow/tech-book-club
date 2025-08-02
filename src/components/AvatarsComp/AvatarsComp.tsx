import * as SC from "./AvatarsCompStyled"

import avatars from "../../assets/images/image-avatars.webp"
import starIcon from "../../assets/images/icon-star.svg"
const AvatarsComp:React.FC = () => {
    return ( 
        <SC.MainCon>
            <SC.AvatarsThumb>
                <img src={avatars} alt="avatars" />
            </SC.AvatarsThumb>
            <div>
                <SC.StarList>
                    <li><img src={starIcon} alt="star" /></li>
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
                </SC.StarList>
                <SC.Content>200+ developers joined already</SC.Content>
            </div>
        </SC.MainCon>
     );
}
 
export default AvatarsComp;