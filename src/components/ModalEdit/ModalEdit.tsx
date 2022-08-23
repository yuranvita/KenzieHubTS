import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { GrFormClose } from "react-icons/gr";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ModalContainer } from "./styles";

type ITechModal = {
  title: string;
  status: string;
};

type IModalProps = {
  show: Boolean;
  handleClose: () => void;
  id: string;
  title: string;
};

function ModalEdit({ show = false, handleClose, id, title }: IModalProps) {
  const schema = yup.object().shape({
    title: yup.string().min(1),
    status: yup.string().required("Status obrigatório"),
  });

  const token = localStorage.getItem("@token:kenziehub");
  const [id_modal, setId] = useState(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechModal>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ITechModal) => {
    await api
      .put(`/users/techs/${id_modal}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        const notify = () => toast.success("Alteredo com Sucesso!");
        notify();
        handleClose();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        const notify = () => toast.error("Tente Novamente!");
        console.log(err);
        notify();
        handleClose();
      });
  };

  async function handleDelete(id_modal: string) {
    await api
      .delete(`/users/techs/${id_modal}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Deletado com Sucesso!");

        handleClose();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);

        handleClose();
      });
  }

  useEffect(() => {
    setId(id);
  }, [id]);

  return show ? (
    <ModalContainer className="container_modal">
      <div className="form_content">
        <header>
          <h1>Editar tecnologia</h1>
          <button onClick={handleClose}>
            <GrFormClose size={30} />
          </button>
        </header>
        <form className="form_tech" onSubmit={handleSubmit(onSubmit)}>
          {errors.title?.message}
          <label>Nome </label>
          <input
            type="text"
            placeholder="Tecnologia"
            value={title}
            {...register("title")}
          />
          <label>Selecionar status</label>
          <select placeholder="Tecnologia" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="container_buttons">
            <button type="submit">Editar</button>
            <button onClick={() => handleDelete(id_modal)}>Excluir</button>
          </div>
        </form>
      </div>
    </ModalContainer>
  ) : (
    <div></div>
  );
}

export default ModalEdit;
