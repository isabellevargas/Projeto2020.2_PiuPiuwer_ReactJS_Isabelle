import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Caixa } from "./styles";

function Box() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function verifyUser(e: FormEvent) {
    e.preventDefault();

    await axios({
      url: "http://piupiuwer.polijr.com.br/login/",
      method: "POST",
      data: {
        username: usuario,
        password: senha,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        history.push("/feed");
      })
      .catch((error) => {
        console.log(error);
        alert("Dados incorretos");
        history.push("/");
      });
  }

  return (
    <Caixa>
      <h1>Bem vinde novamente!</h1>
      <p>Ficamos felizes que você tenha decidido voltar para dar uns pius!</p>
      <form onSubmit={verifyUser}>
        <div className="user">
          <label>Usuário</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          ></input>
        </div>
        <div className="password">
          <label>Senha</label>
          <input
            type="text"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          ></input>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </Caixa>
  );
}

export default Box;
