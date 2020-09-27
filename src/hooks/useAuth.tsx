import React, { createContext, useContext, useState, useCallback } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  login({ username, password }: LoginCred): void;
  logout(): void;
}

interface LoginCred {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem("@Piupiuwer::user");
    const token = localStorage.getItem("@Piupiuwer::token");

    if (user && token) {
      return { user: JSON.parse(user), token };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ username, password }: LoginCred) => {
    const response = await api.post("/login/", { username, password });

    const { token } = response.data;
    localStorage.setItem("@Piupiuwer::token", token);

    if (!!token) {
      const response = await api.get("/usuarios/?search=" + username);
      const user = response.data[0].username;
      const id = response.data[0].id;
      const sobre = response.data[0].sobre;
      const foto = response.data[0].foto;
      localStorage.setItem("@Piupiuwer::user", user);
      localStorage.setItem("@Piupiuwer::id", id);
      localStorage.setItem("@Piupiuwer::sobre", sobre);
      localStorage.setItem("@Piupiuwer::foto", foto);

      setData({ user, token });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("@Piupiuwer::user");
    localStorage.removeItem("@Project::token");
  };

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
