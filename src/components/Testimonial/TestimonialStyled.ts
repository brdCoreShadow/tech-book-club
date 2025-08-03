import styled from "@emotion/styled";

export const TestimonialCon = styled.div`
  margin-bottom: 64px;

  @media (min-width: 768px){
    margin-bottom: 80px;
  }
`;

export const StarList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 32px;

  @media (min-width: 1280px){
    justify-content: center;
  }
`;

export const Content = styled.p`
  margin-bottom: 164px;

  font-family: "Mono";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1px;

  color: #062630;

  @media (min-width: 768px){
    margin-bottom: 32px;

    font-size: 34px;
  }

  @media (min-width: 1280px){
    text-align: center;
  }
`;

export const Author = styled.h3`
font-family: "Inter";
font-size: 20px;
font-weight: 400;
line-height: 1.4;
letter-spacing: -0.5px;

color: #385159;

@media (min-width: 1280px){
    text-align: center;
}
`