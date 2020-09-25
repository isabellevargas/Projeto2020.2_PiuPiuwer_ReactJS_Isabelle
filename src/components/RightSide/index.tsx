import React from "react";
import { Wrapper } from "./styles";
import icon from "../../assets/images/isa.jpeg";

const RightSide: React.FC = () => {
  var first_name = localStorage.getItem("first_name");
  var foto = localStorage.getItem("foto");
  var sobre = localStorage.getItem("sobre");
  var user = localStorage.getItem("user");
  return (
    <Wrapper>
      <img src={icon} alt="profile" />
      <h2>{first_name}</h2>
      <p>{user}</p>
      <div>
        <span>{sobre}</span>
      </div>
    </Wrapper>
  );
};

export default RightSide;
