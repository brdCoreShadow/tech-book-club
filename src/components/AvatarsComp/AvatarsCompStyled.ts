import styled from "@emotion/styled";

export const MainCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 24px;

padding-bottom: 64px;

border-bottom: 1px solid #385159;
`

export const AvatarsThumb = styled.div`

margin-right: 12px;

& > img{
    width: 110px;
}
`

export const StarList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 4px;
`

export const Content = styled.p`
font-family: "Mono";
font-size: 14px;
line-height: 1.2;
letter-spacing: -1px;

color: #FAF5F3;
`