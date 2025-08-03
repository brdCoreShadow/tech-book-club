import styled from "@emotion/styled";

export const MainCon = styled.div`
  margin-bottom: 24px;

  text-align: center;

  & > h3 {
    margin-bottom: 40px;

    font-family: "Mono";
    font-size: 34px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -2px;

    color: #faf5f3;

    @media (min-width: 768px){
        font-size: 50px;
    }
  }

  & > button {
    position: relative;

    width: 100%;

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 24px;
    padding-right: 64px;

    text-transform: uppercase;

    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -1px;

    color: #faf5f3;

    background-color: transparent;

    border: 1px solid #faf5f3;
    border-radius: 8px;

    @media (min-width: 768px){
        width: 50%;
    }

    &:hover, &:active, &:focus{
        cursor: pointer;

      
    background: linear-gradient(180deg, #385159 0%, #062630 100%);

    transition: all 0.3s;
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;

      transform: translate(-24px, 20px);

      display: inline-block;
      width: 24px;
      height: 24px;

      content: "";

      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' fill='none' viewBox='0 0 24 25'><path fill='%23fff' d='m3.96 8.742.72 3.12c1.224-.12 2.328-.504 3.264-1.2.936-.696 1.584-1.512 1.896-2.496v11.856h2.76V8.166c.672 1.944 2.688 3.48 5.16 3.696l.72-3.12c-3.384-.12-5.52-2.112-5.88-5.544H9.84c-.36 3.456-2.496 5.424-5.88 5.544Z'/></svg>");
    }
  }
`;
