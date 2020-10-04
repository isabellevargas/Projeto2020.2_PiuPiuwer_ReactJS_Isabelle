import React, { useCallback, useEffect, useState } from "react";
import like from "../../assets/images/003-favourite 1.svg";
import deletar from "../../assets/images/delete 2.svg";
import {
  WrapperComponent,
  InteractionsComponent,
  DataComponent,
} from "./styles";
import api from "../../services/api";
import { useLoad } from "../../hooks/useLoad";
import { useAuth } from "../../hooks/useAuth";

export interface PiuItem {
  id: number;
  usuario: DadosGerais;
  likers: DadosGerais[];
  texto: string;
  horario: string;
}

export interface DadosGerais {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  foto: string;
}

interface PiuItemProps {
  dados: PiuItem;
}

const Piu: React.FC<PiuItemProps> = ({ dados }) => {
  const [change, setChange] = useState(false);
  const { carregarDados } = useLoad();
  const { user } = useAuth();

  useEffect(() => {
    carregarDados();
  }, [change, carregarDados]);

  const handleDelete = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      const piuId = dados.id;
      const userId = user.id;

      if (dados.usuario.id === userId) {
        await api.delete(`/pius/${piuId}`);
      } else {
        alert("Você não pode excluir pius que não são seus");
      }
      setChange(!change);
    },
    [dados.id, dados.usuario.id, user.id, change]
  );

  const handleLike = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      const piuId = dados.id;
      const userId = user.id;

      await api.post("/pius/dar-like/", { usuario: userId, piu: piuId });
      setChange(!change);
    },
    [dados.id, user.id, change]
  );

  return (
    <WrapperComponent>
      <div>
        <DataComponent>
          <img src={dados.usuario.foto} alt="avatar" />
          <div>
            <strong>
              {dados.usuario.first_name + " " + dados.usuario.last_name}
            </strong>
            <span>{dados.usuario.username}</span>
            <p>{dados.texto}</p>
          </div>
        </DataComponent>
        <InteractionsComponent>
          <div className="like">
            <a href="/" onClick={handleLike}>
              <img src={like} alt="like" />
            </a>
            <p>{dados.likers.length}</p>
          </div>
          <a href="/" onClick={handleDelete}>
            <img src={deletar} alt="deletar" />
          </a>
        </InteractionsComponent>
      </div>
    </WrapperComponent>
  );
};

export default Piu;
