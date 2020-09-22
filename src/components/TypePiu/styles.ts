import styled from "styled-components";

export const Wrapper = styled.section`
  font-family: "Roboto", sans-serif;

  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(200, 121, 168, 0.73);
    padding: 10px 15px;
  }

  div img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  div h2 {
    font-size: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-bottom: 1px solid rgba(200, 121, 168, 0.73);
  }

  form label {
    font-size: 18px;
    margin-bottom: 15px;
  }

  form textarea {
    height: 100px;
    margin-bottom: 15px;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.28);
    padding-left: 20px;
    padding-top: 5px;
    outline: 0;
  }

  form textarea::placeholder {
    padding-top: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }

  form div {
    align-self: flex-end;
    display: flex;
    align-items: center;
  }

  form div p {
    font-size: 12px;
    padding: 10px;
  }

  form button {
    width: 90px;
    height: 30px;
    font-size: 18px;
    margin-bottom: 15px;
    background-color: #7cc1db;
    color: #ffffff;
    border-radius: 25px;
    border: 1px solid #7cc1db;
    outline: 0;
    cursor: pointer;
  }
`;
