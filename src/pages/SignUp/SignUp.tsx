import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { IFormSignUp } from "../../types/types";
import { SignUpContainer } from "./styles";

function SignUp() {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().required("E-mail inválido").email(),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(
        8,
        "Sua senha deve ter entre 8 caracteres e possuir simbolos especiais"
      )
      .matches(
        /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/,
        "Não possui caracteres especiais"
      ),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Confirmação de senha inválida")
      .required("Campo obrigatório")
      .required("Campo obrigatório"),
    name: Yup.string().required("nome obrigatório"),
    bio: Yup.string().required("coloque uma bio"),
    contact: Yup.string().required("coloque seu linkedin"),
    course_module: Yup.string().required("coloque em qual curso você está"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignUp>({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: IFormSignUp) => {
    setLoading(true);
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        const notify = () => toast.success("Cadastro realizado com sucesso!");
        console.log(res);
        notify();
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        const notify = () => toast.error(err.response.data.message);
        console.log();
        notify();
        setLoading(false);
      });
  };

  return (
    <SignUpContainer className="container_sign_up">
      <nav className="nav_header">
        <h1>Kenzie Hub</h1>
        <Link to="/">
          <FaArrowLeft color="#fff" />
        </Link>
      </nav>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Crie sua conta</h3>
        <span>Rapido e grátis, vamos nessa</span>
        <div className="inputs_area">
          {errors.email?.message}
          <label>Email </label>
          <input type="email" alt="email" {...register("email")} />
          {errors.password?.message}
          <label htmlFor="password">Senha </label>
          <input type="password" alt="password" {...register("password")} />
          {errors.passwordConfirm?.message}
          <label htmlFor="passwordConfirm">Confirmar senha</label>
          <input
            type="password"
            alt="passwordConfirm"
            {...register("passwordConfirm")}
          />
          {errors.name?.message}
          <label htmlFor="name">Nome </label>
          <input type="text" alt="name" {...register("name")} />
          {errors.bio?.message}
          <label htmlFor="bio">Biográfia </label>
          <input type="text" alt="bio" {...register("bio")} />
          {errors.contact?.message}
          <label htmlFor="contact">Contato </label>
          <input type="text" alt="contact" {...register("contact")} />
          {errors.course_module?.message}
          <label htmlFor="course_module">Módulo</label>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
        </div>
        <button type="submit">
          {loading === false ? (
            "Cadastrar"
          ) : (
            <AiOutlineLoading3Quarters color="#fff" />
          )}
        </button>
      </form>
    </SignUpContainer>
  );
}

export { SignUp };
