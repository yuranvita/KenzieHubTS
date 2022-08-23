import { Routes, Route, BrowserRouter } from "react-router-dom";

import { SignIn } from "./pages/Login/SignIn";
import { AuthProvider } from "./context/auth";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
