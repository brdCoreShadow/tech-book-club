import styled from "@emotion/styled";

export const MembershipCon = styled.div`
  margin-bottom: 64px;

  & > h3 {
    margin-bottom: 24px;

    font-family: "Mono";
    font-weight: 600;
    font-size: 34px;
    left: 1.3;
    letter-spacing: -2px;

    color: #062630;
  }
`;

export const MembershipListStyled = styled.ul``;

export const Item = styled.li`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  border: 1px solid #e6e1df;
  border-radius: 8px;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  & > h3 {
    margin-bottom: 24px;

    font-family: "Mono";
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -1px;

    color: #062630;
  }
`;

export const Price = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 24px;

  padding-bottom: 24px;

  font-family: "Inter";
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.5px;

  color: #385159;

  border-bottom: 1px solid #e6e1df;

  & > span {
    font-size: 34px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -1px;

    color: #062630;
  }
`;

export const SubList = styled.ul`
  margin-bottom: 32px;
`;

export const SubItem = styled.li`
  position: relative;

  padding-left: 36px;

  font-family: "Inter";
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.5px;

  color: #385159;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    transform: translate(0, 0px);

    width: 28px;
    height: 28px;

    display: inline-block;

    content: "";

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 28 28'><rect width='26' height='26' x='1' y='1' stroke='%23385159' stroke-width='2' rx='3'/><path fill='%23385159' d='m19.06 6.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54h-2.6c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z'/></svg>");
  }
`;

export const Custom = styled.p`
  margin-bottom: 24px;

  padding-bottom: 24px;

  font-family: "Mono";
  font-size: 34px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -1px;

  color: #062630;

  border-bottom: 1px solid #e6e1df;
`;

export const Btn = styled.button`
  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;
  text-transform: uppercase;

  font-family: "Mono";
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -1px;

  color: #062630;
  background-color: transparent;

  border: 1px solid #062630;
  border-radius: 8px;

  transition: all 0.3s;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;

    background: linear-gradient(180deg, #ffe2d1 0%, #fff5ef 100%);

    transition: all 0.3s;
  }
`;
