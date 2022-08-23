import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

import { HomeContainer } from "./styles";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import ListCard from "../../components/ListCard/ListCard";

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

function Home() {
  const user = JSON.parse(
    localStorage.getItem("@user:kenziehub") || "{}"
  ) as User;

  const token = localStorage.getItem("@token:kenziehub" || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <HomeContainer>
      <Header />
      <UserProfile />
      <ListCard />
    </HomeContainer>
  );
}

export { Home };
