import React, { ChangeEvent, useState } from "react";
import homeIcon from "../../assets/images/023-home.svg";
import { Wrapper, Botao, Frases } from "./styles";

function TypePiu() {
  const [contador, setContador] = useState("0/140");
  const [fraseErro, setFraseErro] = useState("");
  const [botao, setBotao] = useState(true);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    var texto = e.target.value;

    setContador(texto.length + "/140");

    if (texto.length === 0) {
      setFraseErro("O piu está vazio");
      setBotao(false);
    } else if (texto.length > 140) {
      setFraseErro("Caracteres em excesso");
      setBotao(false);
    } else {
      setFraseErro("");
      setBotao(true);
    }
  }

  return (
    <Wrapper>
      <div>
        <img src={homeIcon} alt="Home" />
        <h2>Feed</h2>
      </div>

      <form>
        <label>Poste um piu!</label>
        <textarea onChange={handleChange}></textarea>
        <div>
          <Frases id="frase-erro" livre={botao}>
            {fraseErro}
          </Frases>
          <Frases id="contador" livre={botao}>
            {contador}
          </Frases>
          <Botao type="button" livre={botao} disabled={!botao}>
            Piar
          </Botao>
        </div>
      </form>
    </Wrapper>
  );
}

export default TypePiu;
