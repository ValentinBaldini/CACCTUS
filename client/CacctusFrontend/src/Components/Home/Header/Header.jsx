import React from "react";
import "./header.css";
import ImgHeader from '../../../assets/4673541.png'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div>
          <h1>
            Accede a la mejor plataforma de compra y venta de beats digitales
          </h1>
          <p>
            Descubre más de 10,000 instrumentales de diversos géneros para todos
            los artistas
          </p>
          <button className="btn-header">Regístrate gratis</button>
        </div>
        <div>
          <img src={ImgHeader} alt=""  className="img-header"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
