import { Routes, Route,  } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

