import React, { useState } from "react";
import TypePiu from "../TypePiu";
import Piu, { PiuItem } from "../Piu";
import { Wrapper } from "./styles";
import api from "../../services/api";

const Timeline: React.FC = () => {
  const [dados, setDados] = useState<PiuItem[]>([]);

  async function carregarDados() {
    const token = localStorage.getItem("@Piupiuwer::token");
    api.defaults.headers.authorization = `JWT ${token}`;
    const dados = await api.get("/pius/");
    setDados(dados.data);
  }
  carregarDados();

  return (
    <Wrapper>
      <TypePiu />
      {dados &&
        dados.map((dado: PiuItem) => {
          return <Piu key={dado.id} dados={dado} />;
        })}
    </Wrapper>
  );
};

export default Timeline;
