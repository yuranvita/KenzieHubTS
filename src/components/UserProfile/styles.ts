import styled from "styled-components";

const HeaderProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font_color};
  margin-top: 60px;
  height: 60px;
  width: 80%;
  justify-content: space-between;

  h1 {
    font-size: 1.2rem;
  }

  span {
    font-size: 0.7rem;
    display: flex;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: ${(props) => props.theme.gray_1};
  }

  @media screen and (max-width: 472px) {
    flex-direction: column;
  }
`;

export { HeaderProfileContainer };
