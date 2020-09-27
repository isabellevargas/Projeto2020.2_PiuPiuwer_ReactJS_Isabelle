import React, { FormEvent, useCallback, useState } from "react";
import { BlockComponent } from "./styles";
import { useAuth } from "../../hooks/useAuth";

const Box: React.FC = () => {
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLogin = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      login(cred);
    },
    [cred, login]
  );

  return (
    <BlockComponent>
      <h1>Bem vinde novamente!</h1>
      <p>Ficamos felizes que você tenha decidido voltar para dar uns pius!</p>
      <form onSubmit={handleLogin}>
        <div className="user">
          <label>Usuário</label>
          <input
            type="text"
            onChange={(e) => {
              setCred({
                username: e.target.value,
                password: cred.password,
              });
            }}
          ></input>
        </div>
        <div className="password">
          <label>Senha</label>
          <input
            type="text"
            onChange={(e) => {
              setCred({
                username: cred.username,
                password: e.target.value,
              });
            }}
          ></input>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </BlockComponent>
  );
};

export default Box;
