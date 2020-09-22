import React from "react";
import { Wrapper } from "./styles";
import userImg from "../../assets/images/isa.jpeg";

function RightSide() {
  return (
    <Wrapper>
      <img src={userImg} alt="profile" />
      <h2>Isa</h2>
      <p>@isavargas</p>
      <div>
        <span>18 anos</span>
        <span> Curitiba</span>
        <span>ESFJ</span>
        <span>Trainee na PoliJúnior</span>
      </div>
    </Wrapper>
  );
}

export default RightSide;
