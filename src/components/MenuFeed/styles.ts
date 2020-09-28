import styled from "styled-components";

export const Header = styled.header`
  height: 7%;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  font-family: "Roboto", sans-serif;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 0.8rem;
    color: #b164ae;
    font-weight: bold;

    margin-left: 2rem;
  }

  nav ul li img {
    width: 1.3rem;
    height: 1.3rem;
  }

  nav ul li img {
    margin-right: 0.5rem;
  }
`;
