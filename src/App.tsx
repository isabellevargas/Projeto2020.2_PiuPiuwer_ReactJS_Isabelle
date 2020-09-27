import React from "react";
import GlobalStyle from "./assets/styles/global";
import Routes from "./Routes/index";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks/index";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
