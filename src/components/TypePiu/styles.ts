import styled from "styled-components";

export const Wrapper = styled.section`
  font-family: "Roboto", sans-serif;

  > div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(200, 121, 168, 0.73);
    padding: 0.8rem 1rem;
  }

  div img {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.8rem;
  }

  div h2 {
    font-size: 1.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 1.3rem;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(200, 121, 168, 0.73);
  }

  form label {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  form textarea {
    height: 7rem;
    margin-bottom: 1rem;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.28);
    padding-left: 1rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    outline: 0;
  }

  form textarea::placeholder {
    padding-top: 0.8rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  form div {
    align-self: flex-end;
    display: flex;
    align-items: center;
  }
`;

export const Botao = styled.button<{ livre: boolean }>`
  width: 6rem;
  height: 1.8rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  background-color: #7cc1db;
  color: #ffffff;
  border-radius: 25px;
  border: 1px solid #7cc1db;
  outline: 0;
  cursor: pointer;
  opacity: ${(props) => (props.livre ? 1 : 0.5)};
`;

export const Frases = styled.p<{ livre: boolean }>`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  color: ${(props) => (props.livre ? "black" : "red")};
`;
