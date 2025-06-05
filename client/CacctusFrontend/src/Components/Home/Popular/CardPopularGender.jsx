import React from 'react';
import {Link} from "react-router-dom";

const cardPopularGender = ({title, image}) => {
    return (
        <div className='cardPopularGender-container'>
            <div className="cardPopularGender">
                <Link to={""} className='link'>
                    <div className="image-popular-container">
                        <img src={image} alt="" />
                        <p>{title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default cardPopularGender;
