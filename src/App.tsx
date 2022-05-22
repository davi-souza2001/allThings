import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { PageNotation } from "./page/PageNotation";
import { Register } from "./page/Register";
import { UserPage } from "./page/UserPage";

import { ModalProvider } from "./services/context/ModalContext"
import { AuthProvider } from "./services/context/AuthContext"

export default function App() {

  return (
    <AuthProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/:idPage" element={<PageNotation />} />
        </Routes>
      </ModalProvider>
    </AuthProvider>
  )
}

