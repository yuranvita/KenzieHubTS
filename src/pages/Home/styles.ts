import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font_color};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

export { HomeContainer };
