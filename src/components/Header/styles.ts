import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font_color};
  height: 60px;
  width: 100%;

  nav {
    display: flex;
    width: 80%;
    height: 72px;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.3rem;
      color: ${(props) => props.theme.primary};
    }

    button {
      background: transparent;
      border: none;
    }
  }
`;

export { HeaderContainer };
