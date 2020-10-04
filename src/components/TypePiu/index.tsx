import React, {
  FormEvent,
  ChangeEvent,
  useState,
  useCallback,
  useEffect,
} from "react";
import homeIcon from "../../assets/images/023-home.svg";
import { Wrapper, Botao, Frases } from "./styles";
import api from "../../services/api";
import { useLoad } from "../../hooks/useLoad";
import { useAuth } from "../../hooks/useAuth";

const TypePiu: React.FC = () => {
  const [contador, setContador] = useState("0/140");
  const [fraseErro, setFraseErro] = useState("");
  const [botao, setBotao] = useState(true);
  const [textoPiu, setTextoPiu] = useState("");
  const [change, setChange] = useState(false);

  const { carregarDados } = useLoad();
  const { user } = useAuth();

  useEffect(() => {
    carregarDados();
  }, [change, carregarDados]);

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

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const userId = user.id;
      const mensagem = textoPiu;

      await api.post("/pius/", { usuario: userId, texto: mensagem });
      setChange(!change);
    },
    [textoPiu, user.id, change]
  );

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
