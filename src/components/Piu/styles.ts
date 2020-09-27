import styled from "styled-components";

export const WrapperComponent = styled.li`
  border-bottom: 1px solid rgba(200, 121, 168, 0.73);
  margin: 2%;
  padding: 2% 2%;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const InteractionsComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .like {
    display: flex;
    align-items: center;
  }

  .like p {
    text-decoration: none;
    color: #b164ae;
    font-size: 12px;
  }

  a img {
    width: 15px;
    height: 15px;
    margin: 10px 5px 0 10px;
  }

  a:first-child {
    margin-top: 0;
  }
`;

export const DataComponent = styled.div`
  img {
    object-fit: cover;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  div strong {
    font-size: 14px;
    color: black;
  }

  div span {
    font-size: 13px;
    font-weight: normal;
    color: black;
  }

  div p {
    font-size: 14px;
    color: black;
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    width: 100%;
  }
`;
