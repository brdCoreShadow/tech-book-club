import styled from "@emotion/styled";

export const HeroCon = styled.div`
margin-bottom: 144px;

@media (min-width: 768px) and (max-width:1279px){
    margin-bottom: 160px;
}
`;

export const HeroTitle = styled.h3`
  margin-bottom: 24px;

  font-family: "Mono";
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -2px;

  color: #062630;

  @media (min-width: 768px) and (max-width:1279px){
    font-size: 62px;

}
`;

export const HeroContent = styled.p`
  margin-bottom: 32px;

  font-size: 20px;
  font-family: "Inter";
  line-height: 1.4;
  letter-spacing: -0.5px;

  color: #385159;

  
`;

export const HeroBtn = styled.button`
  position: relative;

  width: 100%;

  margin-bottom: 20px;

  padding-top: 21px;
  padding-bottom: 22px;
  padding-left: 24px;

  text-transform: uppercase;

  text-align: left;

  font-family: "Mono";
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -1px;

  color: #062630;

  border: 1px solid #062630;

  border-radius: 8px;

  &::after {
    position: absolute;

    top: 0;
    right: 0;

    transform: translate(-23px, 20px);

    display: inline-block;

    width: 24px;
    height: 24px;

    content: "";

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' fill='none' viewBox='0 0 24 25'><path fill='%23062630' d='m3.96 14.956.72-3.12c1.224.12 2.328.504 3.264 1.2.936.696 1.584 1.512 1.896 2.496V3.676h2.76v11.856c.672-1.944 2.688-3.48 5.16-3.696l.72 3.12c-3.384.12-5.52 2.112-5.88 5.544H9.84c-.36-3.456-2.496-5.424-5.88-5.544Z'/></svg>");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media (min-width: 768px) and (max-width:1279px){
    width: 50%;
  }
`;

export const HeroContentCon = styled.div`
margin-bottom: 64px;
`

export const AvatarsCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarsThumb = styled.div`
  margin-right: 12px;
  & > img {
    width: 110px;
    height: 40px;
  }
`;

export const StarsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 4px;
`;

export const Attract = styled.p`
font-family: "Mono";
font-size: 14px;
line-height: 1.2;
letter-spacing: -1px;

color: #385159;
`

export const HeroPicThumb = styled.div`

border-radius: 8px;
overflow: hidden;

& > img{
    min-width: 343px;

    @media (min-width: 768px) and (max-width:1279px){
        min-width: 769px;
        max-width: 1279px;
    }
}
`