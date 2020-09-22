import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 60px;
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
    font-family: "Lobster", cursive;
    color: #b164ae;
  }

  ul {
    display: flex;
    list-style: none;
    font-family: "Roboto", sans-serif;
  }

  nav ul li {
    display: flex;
    align-items: center;

    font-size: 18px;
    color: #b164ae;
    font-weight: bold;

    margin-right: 20px;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 20px;
  }
`;
