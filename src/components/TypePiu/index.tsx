import React, { FormEvent, ChangeEvent, useState } from "react";
import homeIcon from "../../assets/images/023-home.svg";
import { Wrapper, Botao, Frases } from "./styles";
import axios from "axios";

const TypePiu: React.FC = () => {
  const [contador, setContador] = useState("0/140");
  const [fraseErro, setFraseErro] = useState("");
  const [botao, setBotao] = useState(true);
  const [textoPiu, setTextoPiu] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    var texto = e.target.value;

    setContador(texto.length + "/140");
    setTextoPiu(texto);

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userId = localStorage.getItem("@Piupiuwer::id");
    const mensagem = textoPiu;
    const token = localStorage.getItem("@Piupiuwer::token");

    await axios({
      url: "http://piupiuwer.polijr.com.br/pius/",
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
      },
      data: {
        usuario: userId,
        texto: mensagem,
      },
    });
  }

  return (
    <Wrapper>
      <div>
        <img src={homeIcon} alt="Home" />
        <h2>Feed</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Poste um piu!</label>
        <textarea onChange={handleChange}></textarea>
        <div>
          <Frases id="frase-erro" livre={botao}>
            {fraseErro}
          </Frases>
          <Frases id="contador" livre={botao}>
            {contador}
          </Frases>
          <Botao type="submit" livre={botao} disabled={!botao}>
            Piar
          </Botao>
        </div>
      </form>
    </Wrapper>
  );
};

export default TypePiu;
