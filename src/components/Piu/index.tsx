import React from "react";
import avatar from "../../assets/images/isa.jpeg";
import like from "../../assets/images/003-favourite 1.svg";
import deletar from "../../assets/images/delete 2.svg";
import { Wrapper } from "./styles";

function Piu() {
  return (
    <Wrapper>
      <div>
        <img src={avatar} alt="avatar" />
        <div className="dados">
          <strong>Isabelle</strong>
          <span>@isavargas</span>
          <p>Meu piu</p>
        </div>
      </div>
      <div className="interacoes">
        <div>
          <a href="/">
            <img src={like} alt="like" />
          </a>
          <p>1</p>
        </div>
        <a href="/">
          <img src={deletar} alt="deletar" />
        </a>
      </div>
    </Wrapper>
  );
}

export default Piu;
