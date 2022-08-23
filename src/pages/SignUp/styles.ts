import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.bg};
  overflow-y: auto;

  nav.nav_header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 80px;

    h1 {
      color: ${(props) => props.theme.primary};
    }
  }

  form.form {
    background: ${(props) => props.theme.gray_3};
    box-shadow: 0px 4px 40px -10px ${(props) => props.theme.transparent_gray};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 20px;
    gap: 10px;
    color: ${(props) => props.theme.font_color};

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 28px;
      color: #f8f9fa;
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 0.7rem;
      line-height: 22px;
      color: ${(props) => props.theme.gray_1};
    }

    div.inputs_area {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        width: 100%;
        font-weight: 400;
        font-size: 0.9rem;
        left: 0;
      }
      input {
        background: ${(props) => props.theme.gray_2};
        width: 100%;
        height: 30px;
        border: 1.2182px solid ${(props) => props.theme.gray_0};
        border-radius: 4px;
        padding: 10px;
        color: ${(props) => props.theme.font_color};
      }

      select {
        background: ${(props) => props.theme.gray_2};
        width: 100%;
        height: 30px;
        border: 1.2182px solid ${(props) => props.theme.gray_0};
        border-radius: 4px;
        color: ${(props) => props.theme.font_color};
        border-radius: 4px;
      }
    }
    button {
      background: ${(props) => props.theme.primary_focus};
      width: 90%;
      height: 30px;
      border-radius: 2px;
      margin-top: 20px;
      border: none;
      color: ${(props) => props.theme.font_color};
    }
  }
`;

export { SignUpContainer };
