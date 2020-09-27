import styled from "styled-components";

export const BlockComponent = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: 50%;
  width: 50%;
  margin: 10% auto;
  border-radius: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #b164ae;
    text-decoration: bold;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form div {
    margin: 0.5rem;
  }

  form div label {
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  form div input {
    height: 2rem;
    width: 19.5rem;
    border-radius: 1rem;
    border: 1px solid gray;
    outline: 0;
  }

  form button {
    height: 1.5rem;
    width: 6.5rem;
    font-size: 1rem;
    margin-top: 0.1rem;
    background-color: #b164ae;
    color: white;
    border-radius: 0.5rem;
    border: 1px solid #b164ae;
    outline: 0;
    cursor: pointer;
  }
`;
