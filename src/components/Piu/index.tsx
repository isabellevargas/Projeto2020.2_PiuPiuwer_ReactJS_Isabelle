import React from "react";
import like from "../../assets/images/003-favourite 1.svg";
import deletar from "../../assets/images/delete 2.svg";
import {
  WrapperComponent,
  InteractionsComponent,
  DataComponent,
} from "./styles";
import axios from "axios";

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
  async function handleDelete(e: React.MouseEvent) {
    e.preventDefault();
    const token = localStorage.getItem("@Piupiuwer::token");
    const piuId = dados.id;
    const userId = Number(localStorage.getItem("@Piupiuwer::id"));

    if (dados.usuario.id === userId) {
      await axios({
        url: `http://piupiuwer.polijr.com.br/pius/${piuId}`,
        method: "DELETE",
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
    } else {
      alert("Você não pode excluir pius que não são seus");
    }
  }
  async function handleLike(e: React.MouseEvent) {
    e.preventDefault();
    const token = localStorage.getItem("@Piupiuwer::token");
    const piuId = dados.id;
    const userId = localStorage.getItem("@Piupiuwer::id");

    await axios({
      url: "http://piupiuwer.polijr.com.br/pius/dar-like/",
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
      },
      data: {
        usuario: userId,
        piu: piuId,
      },
    });
  }

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
