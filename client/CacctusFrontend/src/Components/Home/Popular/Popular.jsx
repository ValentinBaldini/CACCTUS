import React from 'react';
import "./popular.css";
import CardPopularArtist from './CardPopularArtist';
import CardPopularGender from './cardPopularGender';


import imagePopularGender from "../../../assets/popularGender.png";
import imagePopularArtist from "../../../assets/popularArtist.png";


const gender = [
    {
        image: imagePopularGender,
        title: "techno"
    },
    {
        image: imagePopularGender,
        title: "trap"
    },
    {
        image: imagePopularGender,
        title: "R&B"        
    },
    {
        image: imagePopularGender,
        title: "Reggaeton" 
    },
    {
        image: imagePopularGender,
        title: "Latino" 
    }
];

const artists = [
    {
        image: imagePopularArtist,
        name: "Cacctus" 
    },
    {
        image: imagePopularArtist,
        name: "Kolben" 
    },
    {
        image: imagePopularArtist,
        name: "ErreO" 
    },
    {
        image: imagePopularArtist,
        name: "Benji24" 
    },
    {
        image: imagePopularArtist,
        name: "ElInombrable ahre" 
    }
];





const Popular = () => {
    return (
        <div className="popular-container">
            <div className="popular">
                <div className="popular-gender">
                    <div className="popular-gender-title">
                        <h2>Generos populares</h2>
                        <button className='button-popular'>Ver más</button>
                    </div>

                    <div className="cards-popular">
                        {gender.map((gende, index) => {
                            return(
                                <CardPopularGender key={index} image={gende.image} title={gende.title}/>
                            )
                        })}
                    </div>
                </div>

                    <div className="hr">
                        <hr />
                    </div>

                <div className="popular-artist">
                    <div className="popular-artist-title">
                        <h2>Artistas populares</h2>
                        <button className='button-popular'>Ver más</button>
                    </div>

                    <div className="cards-popular">
                        {artists.map((artist, index) => {
                            return (
                                <CardPopularArtist key={index} image={artist.image} name={artist.name}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
