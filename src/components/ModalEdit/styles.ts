import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${(props) => props.theme.transparent_gray};
  height: 100%;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  top: 0;
  z-index: 100;

  div.form_content {
    padding: 10px;
    background-color: #444;
    height: 50%;
    min-width: 260px;
    min-height: 240px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 10px;
    header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px 0 20px;

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 24px;
        color: ${(props) => props.theme.font_color};
      }
      button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;

        svg path {
          stroke: ${(props) => props.theme.font_color};
        }
      }
    }
    form.form_tech {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 10px;
      padding: 10px;

      label {
        font-weight: 400;
        font-size: 12.182px;
        color: #f8f9fa;
        position: relative;
        width: 90%;
        left: 0;
      }
      input {
        background: #343b41;
        border: 1.2182px solid #f8f9fa;
        border-radius: 4px;
        width: 90%;
        height: 48px;
        color: #fff;
        padding: 10px;
      }
      select {
        background: #343b41;
        border: 1.2182px solid #f8f9fa;
        border-radius: 4px;
        width: 90%;
        height: 48px;
        color: #fff;
      }

      div.container_buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 90%;

        button:first-child {
          background: #ff577f;
          border: 1.2182px solid #f8f9fa;
          border-radius: 4px;
          width: 60%;
          height: 48px;
          color: #fff;
          margin-top: 20px;
        }

        button:nth-child(2) {
          font-size: 0.8rem;
          background: #868e96;
          border: 1.2182px solid #f8f9fa;
          border-radius: 4px;
          width: 30%;
          height: 48px;
          color: #fff;
          margin-top: 20px;
        }
      }
    }
  }
`;

export { ModalContainer };
