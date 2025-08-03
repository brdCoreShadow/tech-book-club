import styled from "@emotion/styled";

export const SharedLayoutCon = styled.div`
padding-left: 16px;
padding-right: 16px;

@media (min-width: 768px) and (max-width:1279px){
   padding-left: 32px;
padding-right: 32px;
}

@media (min-width: 1280px){
    padding-left: auto;
    padding-right: auto;
}
`