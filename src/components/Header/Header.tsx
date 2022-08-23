import React, { useContext } from "react";

import { HeaderContainer } from "./styles";

import { CgLogOut } from "react-icons/cg";
import { AuthContext } from "../../context/auth";

function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <nav>
        <h1>Kenzie Hub</h1>
        <button onClick={signOut}>
          <CgLogOut color="#fff" size={20} />
        </button>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
