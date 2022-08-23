import React, { useContext, useEffect } from "react";

import { AuthContext } from "../../context/auth";
import { LoginContainer } from "./styles";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";

type UserData = {
  email: string;
  password: string;
};

function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8),
  });
  const { loading, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  useEffect(() => {
    const token = localStorage.getItem("@token:kenziehub");

    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">Email </label>
        {errors.email?.message}
        <input placeholder="User" type="email" {...register("email")} />
        <label htmlFor="senha">Senha </label>
        {errors.password?.message}
        <input placeholder="Senha" type="password" {...register("password")} />
        <button>
          {loading === false ? (
            <FiLogIn stroke="#fff" size={20} />
          ) : (
            <AiOutlineLoading3Quarters color="#fff" />
          )}
        </button>
        <p>Ainda não possui uma conta?</p>
        <Link to="/sign_up" className="create-user">
          <FaUserPlus color="#fff" size={20} />
        </Link>
      </form>
    </LoginContainer>
  );
}
export { SignIn };
