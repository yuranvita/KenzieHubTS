import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
};

type AuthContextData = {
  signIn: (data: UserData) => void;
  signOut: () => void;
  loading: Boolean;
  setLoading: React.Dispatch<React.SetStateAction<Boolean>>;
};

type AuthResponse = {
  token: string;
  user: User;
};

type UserData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
  const [loading, setLoading] = useState<Boolean>(false);

  const navigate = useNavigate();

  function signIn(data: UserData) {
    setLoading(true);
    api
      .post<AuthResponse>("/sessions", data)
      .then((res) => {
        toast.success("Login realizado com sucesso");
        localStorage.setItem("@token:kenziehub", res.data.token);
        localStorage.setItem("@user:kenziehub", JSON.stringify(res.data.user));
        setLoading(false);
        api.defaults.headers.common.Authorization = "Bearer " + res.data.token;
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  }

  function signOut() {
    localStorage.removeItem("@token:kenziehub");
    localStorage.removeItem("@user:kenziehub");
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, loading, setLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}
