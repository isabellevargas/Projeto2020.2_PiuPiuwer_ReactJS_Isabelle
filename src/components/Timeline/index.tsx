import React, { useState } from "react";
import TypePiu from "../TypePiu";
import Piu, { PiuItem } from "../Piu";
import { Wrapper } from "./styles";
import axios from "axios";

function Timeline() {
  const [dados, setDados] = useState<PiuItem[]>([]);

  async function carregarDados() {
    const token = localStorage.getItem("token");
    const dados = await axios({
      url: "http://piupiuwer.polijr.com.br/pius/",
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    setDados(dados.data);
  }

  async function acharUser() {
    var i = 0;
    const token = localStorage.getItem("token");
    const response = await axios({
      url: "http://piupiuwer.polijr.com.br/usuarios/",
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    for (i = 0; i < response.data.length; i++) {
      var usuario = response.data[i];
      if (usuario.username === localStorage.getItem("user")) {
        localStorage.setItem("user_id", usuario.id);
        localStorage.setItem("first_name", usuario.first_name);
        localStorage.setItem("foto", usuario.foto);
        localStorage.setItem("sobre", usuario.sobre);
        break;
      }
    }
  }

  carregarDados();
  acharUser();

  return (
    <Wrapper>
      <TypePiu />
      {dados &&
        dados.map((dado: PiuItem) => {
          return <Piu key={dado.id} dados={dado} />;
        })}
    </Wrapper>
  );
}

export default Timeline;
