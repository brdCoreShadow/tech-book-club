import * as SC from "./TestimonialStyled"

import starIcon from "../../assets/images/icon-star.svg"

const Testimonial:React.FC = () => {
    return ( 
        <SC.TestimonialCon>
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
            <SC.Content>"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</SC.Content>
            <SC.Author>Sarah Chen, Software Architect</SC.Author>
        </SC.TestimonialCon>
     );
}
 
export default Testimonial;