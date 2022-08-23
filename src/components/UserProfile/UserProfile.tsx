import React from "react";

import { User } from "../../types/types";

import { HeaderProfileContainer } from "./styles";

function UserProfile() {
  const user = JSON.parse(
    localStorage.getItem("@user:kenziehub") || "{}"
  ) as User;
  return (
    <HeaderProfileContainer>
      <h1>{user?.name}</h1>
      <span>{user?.course_module}</span>
    </HeaderProfileContainer>
  );
}

export { UserProfile };
