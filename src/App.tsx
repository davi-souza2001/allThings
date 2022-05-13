import { Routes, Route,  } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { UserPage } from "./page/UserPage";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
  )
}

