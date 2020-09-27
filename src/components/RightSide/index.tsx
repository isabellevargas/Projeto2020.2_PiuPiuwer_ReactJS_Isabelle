import React from "react";
import { Wrapper } from "./styles";

const RightSide: React.FC = () => {
  /*const [user, setUser] = useState();
  const [foto, setFoto] = useState();
  const [sobre, setSobre] = useState();
  const [first_name, setFirstName] = useState();*/
  const user = localStorage.getItem("@Piupiuwer::user");
  const foto = localStorage.getItem("@Piupiuwer::foto");
  const sobre = localStorage.getItem("@Piupiuwer::sobre");
  return (
    <Wrapper>
      <img
        src={
          foto ||
          "https://ii-dd.com/wp-content/uploads/2020/02/default-user.png"
        }
        alt="profile"
      />
      <p>{user}</p>
      <div>
        <span>{sobre}</span>
      </div>
    </Wrapper>
  );
};

export default RightSide;
