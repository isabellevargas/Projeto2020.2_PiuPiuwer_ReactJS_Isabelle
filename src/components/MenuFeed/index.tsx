import React, { useCallback } from "react";
import "./styles.ts";

import { Header } from "./styles";
import feedIcon from "../../assets/images/feed.svg";
import profileIcon from "../../assets/images/perfil.svg";
import notificationIcon from "../../assets/images/notificacao.svg";
import settingsIcon from "../../assets/images/configuracoes.svg";
import exitIcon from "../../assets/images/exit 1.svg";
import { useAuth } from "../../hooks/useAuth";
import history from "../../history";

const MenuFeed: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Header>
      <div className="content">
        <nav>
          <ul>
            <li>
              <img src={feedIcon} alt="Feed" />
              Feed
            </li>
            <li>
              <img src={profileIcon} alt="Perfil" />
              Meu perfil
            </li>
            <li>
              <img src={notificationIcon} alt="Notificações" />
              Notificações
            </li>
            <li>
              <img src={settingsIcon} alt="Configurações" />
              Configurações
            </li>
            <li onClick={handleLogout}>
              <img src={exitIcon} alt="Sair" />
              Sair
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default MenuFeed;
