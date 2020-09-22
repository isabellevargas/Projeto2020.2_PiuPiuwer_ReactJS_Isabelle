import React from "react";
import logoImg from "../../assets/images/icon.svg";
import { Wrapper } from "./styles";

function LeftSide() {
  return (
    <Wrapper>
      <img src={logoImg} alt="Logo" />
      <h1>Piupiuwer</h1>
    </Wrapper>
  );
}

export default LeftSide;
