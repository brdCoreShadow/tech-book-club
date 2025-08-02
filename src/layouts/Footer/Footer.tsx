import * as SC from "./FooterStyled"

import { IChild } from "@/utils/types";

const Footer:React.FC<IChild> = ({children}) => {
    return ( 
        <SC.FooterCon>{children}</SC.FooterCon>
     );
}
 
export default Footer;