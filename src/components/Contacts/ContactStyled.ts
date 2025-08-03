import styled from "@emotion/styled";

export const MainCon = styled.div`

text-align: center;

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

& > h3{
    margin-bottom: 16px;

    font-family: "Mono";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -1px;

    color: #FAF5F3;
}
`

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > li{

    &:hover, &:focus, &:active{
        cursor: pointer;
    }
}

& > li:not(:last-of-type){
    margin-right: 24px;
}
`