import styled from "styled-components";

export const Caixa = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: 50%;
  width: 50%;
  margin: 10% auto;
  border-radius: 25px;
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #b164ae;
    text-decoration: bold;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form div {
    margin: 10px;
  }

  form div label {
    font-size: 15px;
    margin-right: 10px;
  }

  form div input {
    height: 25px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid gray;
    outline: 0;
  }

  form button {
    height: 20px;
    width: 70px;
    font-size: 15px;
    margin-top: 5px;
    background-color: #b164ae;
    color: white;
    border-radius: 5px;
    border: 1px solid #b164ae;
    outline: 0;
    cursor: pointer;
  }
`;
