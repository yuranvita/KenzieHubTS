import styled from "styled-components";

const ListCardContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.font_color};
  width: 80%;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;

  div.container_tech_modal {
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

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      width: 50%;
      background: ${(props) => props.theme.gray_2};
      border-radius: 4px 4px 0px 0px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
      }
    }

    button svg path {
      stroke: ${(props) => props.theme.gray_0};
    }

    form {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      padding: 10px;
      width: 50%;
      height: 50%;

      background-color: ${(props) => props.theme.gray_4};

      label {
        font-weight: 400;
        font-size: 1rem;
        color: #f8f9fa;
        position: relative;
        width: 90%;
        left: 0;
      }
      input {
        background: ${(props) => props.theme.gray_2};
        border: 1.2182px solid ${(props) => props.theme.gray_0};
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
      button {
        background: ${(props) => props.theme.primary};
        border: 1.2182px solid #f8f9fa;
        border-radius: 4px;
        width: 90%;
        height: 48px;
        color: #fff;
        margin-top: 20px;
      }
    }
  }
  div.container_tech_modal_none {
    display: none;
  }

  section.container_list {
    display: flex;
    width: 100%;
    flex-direction: column;

    div.header_list {
      display: flex;
      width: 100%;
      justify-content: space-between;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
      }
    }
    ul {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 10px;
      justify-content: space-between;
      gap: 10px;
      background-color: ${(props) => props.theme.gray_3};
      margin-top: 20px;
      border-radius: 5px;

      li {
        width: 100%;
        height: 49px;
        display: flex;
        background: ${(props) => props.theme.gray_4};
        border-radius: 4px;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        flex-direction: column;
        padding: 10px;
      }
      h2 {
        font-size: 0.8rem;
        position: relative;
        width: 100%;
      }
      div {
        display: flex;
        gap: 40px;
        padding-right: 20px;
        width: 100%;
        align-items: center;
        justify-content: center;
        span {
          font-size: 0.8rem;
          position: relative;
          width: 100%;
        }
        button {
          background: transparent;
          border: none;
          position: relative;
          top: -8px;
        }
      }
    }
  }
`;

export { ListCardContainer };
