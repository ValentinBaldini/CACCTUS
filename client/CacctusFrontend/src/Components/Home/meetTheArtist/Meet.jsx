import React from 'react'
import "./meet.css";
import imageMeetTheArtist from "../../../assets/image-meetTheArtist.png";

const Meet = () => {
    return (
        <div className='meet-container'>
            <div className="meet">
                <div className="meet-image">
                    <img src={imageMeetTheArtist} alt="meet the artist" />
                </div>

                <div className="meet-info">
                    <h2>Conoce a los artistas</h2>
                    <p>Crea tu propio perfil en nuestra plataforma y sumérgete en una comunidad vibrante de artistas y productores. Al visitar los perfiles de otros artistas, podrás explorar una amplia variedad de estilos musicales y conocer en detalle sus propuestas creativas. Conéctate, colabora y descubre nuevas oportunidades para llevar tu música al siguiente nivel.</p>
                    <button className='btn-meet'>
                        Crear perfil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meet;
