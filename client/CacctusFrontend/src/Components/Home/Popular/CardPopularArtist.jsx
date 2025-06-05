import React from 'react';
import { Link } from 'react-router-dom';

const CardPopularArtist = ({image, name}) => {
    return (
        <div className='cardPopularArtist-container'>
            <div className="cardPopularArtist">
                <Link to={""} className='link'>
                    <div className="image-popular-container">
                        <img src={image} alt={image} />
                        <p>{name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardPopularArtist;
