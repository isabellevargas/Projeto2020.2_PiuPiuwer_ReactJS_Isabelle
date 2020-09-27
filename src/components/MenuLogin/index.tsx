import React from "react";
import "./styles.ts";

import logoImg from "../../assets/images/icon.svg";
import { Header } from "./styles";

const MenuLogin: React.FC = () => {
  return (
    <Header>
      <div className="content">
        <div className="items">
          <img src={logoImg} alt="Piupiuwer" />
          <h1>Piupiuwer</h1>
        </div>
        <nav>
          <ul>
            <li>Cadastre-se</li>
            <li>Entrar</li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default MenuLogin;
