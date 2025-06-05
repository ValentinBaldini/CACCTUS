import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
