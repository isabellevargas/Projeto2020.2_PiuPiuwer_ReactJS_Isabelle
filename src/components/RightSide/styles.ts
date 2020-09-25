import styled from "styled-components";

export const Wrapper = styled.aside`
  margin: 5% 5% 0 0;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Roboto", sans-serif;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 30px 30px 20px 30px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 13px;
    margin-top: 10px;
    text-align: center;
  }
`;
