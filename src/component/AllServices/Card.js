import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
    return (
        <div>
            <div className="card-body h-full shadow-2xl bg-base-100">
                <img src={service.image} alt=""/>
                <h4>{service.title}</h4>
                <p>{service.brief}</p>
                <h5>$ {service.price}</h5>
                <Link className="btn common-btn w-1/3 mt-2">Book now</Link>
            </div>
        </div>
    );
};

export default Card;