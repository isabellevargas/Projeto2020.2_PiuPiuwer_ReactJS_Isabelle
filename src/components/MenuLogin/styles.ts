import styled from "styled-components";

export const Header = styled.header`
  height: 45px;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .items {
    display: flex;
    align-items: center;
    color: #b164ae;
  }

  .items h1 {
    font-family: "Lobster", cursive;
  }

  ul {
    display: flex;
    list-style: none;
    font-family: "Roboto", sans-serif;
  }

  nav ul li {
    display: flex;
    align-items: center;

    font-size: 1rem;
    color: #b164ae;
    font-weight: bold;

    margin-right: 1.5rem;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin: 2rem;
  }
`;
