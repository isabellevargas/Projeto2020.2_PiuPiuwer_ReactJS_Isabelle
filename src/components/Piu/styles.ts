import styled from "styled-components";

export const WrapperComponent = styled.li`
  border-bottom: 1px solid rgba(200, 121, 168, 0.73);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  width: 100%;

  > div {
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
  margin-top: 1rem;

  .like {
    display: flex;
    align-items: center;
  }

  .like p {
    text-decoration: none;
    color: #b164ae;
    font-size: 0.8rem;
    padding-top: 0.8rem;
  }

  a img {
    width: 1rem;
    height: 1rem;
    margin: 1rem 0.5rem 0 1rem;
  }

  a:first-child {
    margin-top: 0;
  }
`;

export const DataComponent = styled.div`
  display: flex;

  img {
    object-fit: cover;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  div {
    margin-left: 0.8rem;
    display: flex;
    flex-direction: column;
  }

  div strong {
    font-size: 1rem;
    color: black;
  }

  div span {
    font-size: 0.8rem;
    font-weight: normal;
    color: black;
  }

  div p {
    font-size: 0.9rem;
    color: black;
    margin-top: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    width: 100%;
  }
`;
