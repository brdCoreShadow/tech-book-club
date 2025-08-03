import styled from "@emotion/styled";

export const MainCon = styled.div`
  margin-bottom: 120px;

  padding-top: 80px;
  padding-bottom: 80px;

  text-align: center;

  & > h3 {
    width: 512px;

    margin-bottom: 48px;
    margin-left: auto;
    margin-right: auto;

    font-size: 50px;
    font-family: "Mono";
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -4px;

    color: #062630;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.li`
  text-align: left;

  &:not(:last-of-type) {
    position: relative;

    margin-right: 24px;

    &::after {
      position: absolute;
      top: 0;
      right: 0;

      display: inline-block;
      width: 77px;
      height: 21px;

      content: "";

      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='33' fill='none' viewBox='0 0 80 33'><g stroke='%23FEA36F' stroke-linecap='round' stroke-miterlimit='10' stroke-width='1.553' clip-path='url(%23a)'><path d='M2.545 21.82c10.136-6.576 37.73-17.132 67.013-6.751'/><path d='M66.105 21.638a56.898 56.898 0 0 1 6.17-1.052c.488-.058 5.67-.495 5.561-.808-.519-1.498-1.718-2.888-2.495-4.266-1.59-2.817-2.982-5.61-3.806-8.737-.412-1.565-.652-3.15-.995-4.713'/></g><defs><clipPath id='a'><path fill='%23fff' d='M0 12 75.854.39l3.222 20.257-75.854 11.61z'/></clipPath></defs></svg>");

      background-repeat: no-repeat;
    }
  }
`;

export const Number = styled.div`
  display: inline-block;

  width: 40px;
  height: 40px;

  margin-bottom: 24px;

  text-align: center;
  align-content: center;

  font-size: 24px;
  font-family: "Mono";
  letter-spacing: -1px;

  color: #062630;

  border: 1px solid #062630;
  border-radius: 4px;
`;

export const Content = styled.p`
  font-family: "Mono";
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -1px;
`;
