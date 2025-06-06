import React, { useRef } from 'react'
import "./about.css";
import { useEffect } from 'react';

import imageParallax from "../../../assets/cacctus-parallax.png"

const About = () => {
    const  imgRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if(imgRef.current) {
                imgRef.current.style.transform = `translateY(${scroll * -0.3}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    return (
        <div className='about-container'>
            <div className="about">
                <div className="about-info">
                    <h2>Sobre Cacctus</h2>
                    <p>Cactcus es una plataforma innovadora dedicada a la compra y venta de beats digitales. Conectamos a productores y artistas de todo el mundo, ofreciendo una amplia variedad de géneros y estilos. Nuestra misión es facilitar el acceso a música de calidad y proporcionar herramientas efectivas para que los productores puedan monetizar su talento. Únete a nuestra comunidad y lleva tu música al siguiente nivel.</p>
                </div>

                <div className="about-parallax">
                    <img ref={imgRef} src={imageParallax} alt="" />
                </div>
            </div>
        </div>
    );
};


export default About;