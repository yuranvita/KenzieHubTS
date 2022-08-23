import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font_color};
  height: 100vh;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;
    background: #212529;
    box-shadow: 0px 4px 40px -10px ${(props) => props.theme.transparent_gray};
    border-radius: 4px;
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 90%;
    max-width: 350px;

    label {
      position: relative;
      left: 0;
      width: 80%;
      font-weight: 400;
      font-size: 0.9rem;
    }
    span {
      font-weight: 600;
      width: 90%;
      line-height: 18px;
      font-size: 0.9rem;
    }
    button {
      background: #ff577f;
      width: 90%;
      height: 30px;
      border-radius: 2px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      background: #343b41;
      width: 90%;
      height: 10%;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      padding: 10px;
      color: #fff;
    }

    p {
      color: ${(props) => props.theme.gray_1};
    }
  }
`;

export { LoginContainer };
