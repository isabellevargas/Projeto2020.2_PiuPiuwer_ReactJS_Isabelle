import styled from "styled-components";

export const Wrapper = styled.li`
  border-bottom: 1px solid rgba(200, 121, 168, 0.73);
  margin: 20px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  div img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div .dados {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  div .dados strong {
    font-size: 14px;
    color: black;
  }

  div .dados span {
    font-size: 13px;
    font-weight: normal;
    color: black;
  }

  div .dados p {
    font-size: 14px;
    color: black;
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  .interacoes {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .interacoes div {
    display: flex;
    align-items: center;
  }

  .interacoes div p {
    text-decoration: none;
    color: #b164ae;
    font-size: 12px;
  }

  .interacoes a img {
    width: 15px;
    height: 15px;
    margin: 10px 5px 0 10px;
  }

  .interacoes a:first-child {
    margin-top: 0;
  }
`;
