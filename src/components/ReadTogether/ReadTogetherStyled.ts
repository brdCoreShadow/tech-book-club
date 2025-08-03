import styled from "@emotion/styled";

export const ReadTogetherCon = styled.div`
  margin-bottom: 64px;

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  font-family: "Mono";
  font-weight: 600;
  font-size: 34px;
  line-height: 1.3;
  letter-spacing: -2px;

  color: #062630;

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 34px;

    font-size: 50px;
  }
`;

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  position: relative;

  padding-left: 42px;

  font-family: "Inter";
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.5px;

  color: #385159;

  &:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 24px;
    }
  }

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    transform: translate(0, 14px);

    width: 28px;
    height: 28px;

    display: inline-block;

    content: "";

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 28 28'><rect width='26' height='26' x='1' y='1' stroke='%23385159' stroke-width='2' rx='3'/><path fill='%23385159' d='m19.06 6.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54h-2.6c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z'/></svg>");

    @media (min-width: 768px) and (max-width: 1279px) {
      transform: translate(0, 0px);
    }
  }
`;

export const PicThumb = styled.div`
  border-radius: 8px;
  overflow: hidden;
  & > img {
   min-width: 343px;

    @media (min-width: 768px) and (max-width: 1279px) {
      min-width: 768px;
    }
  }
`;
