import React from "react";
import Box from "../../components/Box";
import MenuLogin from "../../components/MenuLogin";
import { Wrapper } from "./styles";

function Login() {
  return (
    <Wrapper>
      <MenuLogin />
      <Box />
    </Wrapper>
  );
}

export default Login;
