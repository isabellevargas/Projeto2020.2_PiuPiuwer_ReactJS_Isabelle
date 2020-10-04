import React from "react";
import { Wrapper } from "./styles";
import { useAuth } from "../../hooks/useAuth";

const RightSide: React.FC = () => {
  const { user } = useAuth();
  return (
    <Wrapper>
      <img
        src={
          user.foto ||
          "https://ii-dd.com/wp-content/uploads/2020/02/default-user.png"
        }
        alt="profile"
      />
      <h2>{user.first_name}</h2>
      <p>{user.username}</p>
      <div>
        <span>{user.sobre}</span>
      </div>
    </Wrapper>
  );
};

export default RightSide;
