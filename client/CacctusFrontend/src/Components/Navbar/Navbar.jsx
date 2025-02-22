/* eslint-disable no-unused-vars */
import React  from "react";
import "./navbar.css";
import LogoCacctus from "../../assets/cactus_10489609 1.png";

const Navbar = () => {
  return (
    <div className="navbar-full-container">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={LogoCacctus} alt="" /> <h1 className="logo-h1">CACCTUS</h1>
        </div>
        <div className="items-container">
          <ul className="ul-items-navbar">
            <li>Inicio</li>
            <li className="beats-li">
              Beats <span className="material-icons">arrow_drop_down</span>
            </li>
            <li>Quienes somos</li>
            <li>Precios</li>
            <li className="beats-li">
              Mi perfil{" "}
              <span className="material-icons">account_circle</span>
            </li>
          </ul>
          <button className="button-beats-navbar">Vender beats</button>
          <span className="material-icons cart-icon">local_mall</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
