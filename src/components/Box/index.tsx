import React from "react";

import { Caixa } from "./styles";

function Box() {
  return (
    <Caixa>
      <h1>Bem vinde novamente!</h1>
      <p>Ficamos felizes que você tenha decidido voltar para dar uns pius!</p>
      <form>
        <div className="user">
          <label>Usuário</label>
          <input type="text"></input>
        </div>
        <div className="password">
          <label>Senha</label>
          <input type="text"></input>
        </div>

        <button>Entrar</button>
      </form>
    </Caixa>
  );
}

export default Box;
