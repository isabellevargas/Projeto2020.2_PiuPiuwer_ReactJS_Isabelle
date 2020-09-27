import React, { useState } from "react";
import TypePiu from "../TypePiu";
import Piu, { PiuItem } from "../Piu";
import { Wrapper } from "./styles";
import axios from "axios";

const Timeline: React.FC = () => {
  const [dados, setDados] = useState<PiuItem[]>([]);

  async function carregarDados() {
    const token = localStorage.getItem("@Piupiuwer::token");
    const dados = await axios({
      url: "http://piupiuwer.polijr.com.br/pius/",
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
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
