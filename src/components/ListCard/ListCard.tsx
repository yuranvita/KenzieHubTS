import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { HiPlus } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";
import ModalEdit from "../ModalEdit/ModalEdit";
import { ListCardContainer } from "./styles";

type ITech = {
  title: string;
  status: string;
};
type ITechResponse = {
  id: string;
  title: string;
  status: string;
};

function ListCard() {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [listCard, setListCard] = useState([]);
  const user = JSON.parse(
    localStorage.getItem("@user:kenziehub") || "{}"
  ) as User;
  const token = localStorage.getItem("@token:kenziehub");

  const schema = Yup.object({
    title: Yup.string().required(),
    status: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ITech) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Cadastrado com sucesso!");
        console.log(res);

        setModal(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
        setModal(false);
      });
  };

  useEffect(() => {
    const res = async () => {
      const data = await api.get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListCard(data.data.techs);
    };
    res();
  }, [user.id, token]);

  function handleShow() {
    setModal(true);
  }
  function handleClose() {
    setModal(false);
  }
  function handleShowModalEdit(id: string, title: string, status: string) {
    setId(id);
    setTitle(title);
    setStatus(status);
    setModalEdit(true);
  }
  function handleCloseModalEdit() {
    setModalEdit(false);
  }

  return (
    <ListCardContainer>
      <ModalEdit
        id={id}
        title={title}
        show={modalEdit}
        handleClose={handleCloseModalEdit}
      />
      <div
        className={
          modal === true ? "container_tech_modal" : "container_tech_modal_none"
        }
      >
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={handleClose}>
            <GrFormClose size={30} />
          </button>
        </header>
        <form className="form_tech" onSubmit={handleSubmit(onSubmit)}>
          {errors.title?.message}
          <label>Nome </label>
          <input type="text" placeholder="Tecnologia" {...register("title")} />
          <label>Selecionar status</label>
          <select placeholder="Tecnologia" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button>Cadastrar</button>
        </form>
      </div>
      <section className="container_list">
        <div className="header_list">
          <h3>Tecnologias</h3>
          <button onClick={handleShow}>
            <HiPlus color="#fff" size={20} />
          </button>
        </div>
        <ul className="list">
          {listCard.map((item: ITechResponse, index: number) => {
            return (
              <li key={index} id={item.id} className="listCard">
                <h2>{item.title}</h2>
                <div>
                  <span>{item.status}</span>{" "}
                  <button
                    onClick={() =>
                      handleShowModalEdit(item.id, item.title, item.status)
                    }
                  >
                    <FaRegEdit size={20} color="#fff" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </ListCardContainer>
  );
}

export default ListCard;
