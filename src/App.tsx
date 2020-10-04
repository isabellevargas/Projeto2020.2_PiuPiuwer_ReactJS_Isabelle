import React from "react";
import GlobalStyle from "./assets/styles/global";
import Routes from "./Routes/index";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks/index";
import { LoadProvider } from "./hooks/useLoad";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <LoadProvider>
          <Routes />
          <GlobalStyle />
        </LoadProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
