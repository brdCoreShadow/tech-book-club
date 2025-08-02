import styled from "@emotion/styled";

export const NotAverageCon = styled.div`
  margin-bottom: 64px;
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  font-size: 34px;
  font-family: "Mono";
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -2px;

  color: #062630;
`;

export const Highlight = styled.span`
  position: relative;
  display: inline-block;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 130%;
    height: 1.4em;
    transform: translate(-50%, -50%) rotate(-8deg);
    border: 2px solid orange;
    border-radius: 50%;
    z-index: -1;
  }
`;

export const Content = styled.p`
margin-bottom: 40px;

font-family: "Inter";
line-height: 1.4;
letter-spacing: -0.5px;

color: #385159;

& > span{
    font-weight: 600;
}
`

export const PicThumb = styled.div`

& > img{
    width: 343px;

    border-radius: 8px;
}
`
