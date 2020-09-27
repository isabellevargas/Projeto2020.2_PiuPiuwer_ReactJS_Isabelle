import React from "react";
import Box from "../../components/Box";
import MenuLogin from "../../components/MenuLogin";
import { Wrapper } from "./styles";

const Login: React.FC = () => {
  return (
    <Wrapper>
      <MenuLogin />
      <Box />
    </Wrapper>
  );
};

export default Login;
