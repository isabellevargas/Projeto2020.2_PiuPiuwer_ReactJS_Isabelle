import styled from "styled-components";

export const Header = styled.header`
  height: 46px;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
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

    font-size: 13px;
    color: #b164ae;
    font-weight: bold;

    margin-left: 30px;
  }

  nav ul li img {
    width: 20px;
    height: 20px;
  }

  nav ul li img {
    margin-right: 7px;
  }
`;
