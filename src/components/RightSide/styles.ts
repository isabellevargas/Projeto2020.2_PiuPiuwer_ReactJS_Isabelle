import styled from "styled-components";

export const Wrapper = styled.aside`
  margin: 0 5% 0 0;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Roboto", sans-serif;

  img {
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin: 2.5rem 2.5rem 1.5rem 2.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.9rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 0.9rem;
    margin-top: 0.8rem;
    text-align: center;
  }
`;
