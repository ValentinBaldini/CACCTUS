import React from "react";
import "./search.css";
import ImagenCard from "../../../assets/c77a141643bf3cf94d80fbf1bae6eb1c.jpg";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search">
        <h1>Encuentra tus beats favoritos</h1>
        <div className="input-container">
          <span className="material-icons">search</span>
          <input
            type="text"
            className="search-input"
            placeholder="Busca por género, BPM o productor..."
          />
          <p>Buscar</p>
        </div>
        <h3>
          Filtra, explora y descubre miles de beats creados por productores de
          todo el mundo.
        </h3>
        <div className="cards-container">
          <div className="card-beat">
            <img src={ImagenCard} alt="" className="img-card" />
            <div className="info-card-container">
              <h3>Título del beat</h3>
              <p>Productor</p>
            </div>
            <button className="add-cart-beat">
              <span className="material-icons">add_shopping_cart</span>
              $10.000
            </button>
          </div>
          <div className="card-beat">
            <img src={ImagenCard} alt="" className="img-card" />
            <div className="info-card-container">
              <h3>Título del beat</h3>
              <p>Productor</p>
            </div>
            <button className="add-cart-beat">
              <span className="material-icons">add_shopping_cart</span>
              $10.000
            </button>
          </div>
          <div className="card-beat">
            <img src={ImagenCard} alt="" className="img-card" />
            <div className="info-card-container">
              <h3>Título del beat</h3>
              <p>Productor</p>
            </div>
            <button className="add-cart-beat">
              <span className="material-icons">add_shopping_cart</span>
              $10.000
            </button>
          </div>
          <div className="card-beat">
            <img src={ImagenCard} alt="" className="img-card" />
            <div className="info-card-container">
              <h3>Título del beat</h3>
              <p>Productor</p>
            </div>
            <button className="add-cart-beat">
              <span className="material-icons">add_shopping_cart</span>
              $10.000
            </button>
          </div>
          <div className="card-beat">
            <img src={ImagenCard} alt="" className="img-card" />
            <div className="info-card-container">
              <h3>Título del beat</h3>
              <p>Productor</p>
            </div>
            <button className="add-cart-beat">
              <span className="material-icons">add_shopping_cart</span>
              $10.000
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
