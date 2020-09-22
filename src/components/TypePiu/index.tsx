import React from "react";
import homeIcon from "../../assets/images/023-home.svg";
import { Wrapper } from "./styles";

function TypePiu() {
  return (
    <Wrapper>
      <div>
        <img src={homeIcon} alt="Home" />
        <h2>Feed</h2>
      </div>

      <form>
        <label>Poste um piu!</label>
        <textarea></textarea>
        <div>
          <p id="frase-erro"></p>
          <p id="contador">0/140</p>
          <button type="button" id="botao-texto">
            Piar
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default TypePiu;
