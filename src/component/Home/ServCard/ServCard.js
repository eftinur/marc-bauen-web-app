import React from 'react';
import './ServCard.css';
import { Link } from 'react-router-dom';

const ServCard = ({service}) => {
    return (
        <div className=''>
            <div className="card-body h-full">
                <img src={service.image} alt=""/>
                <span>{service.title}</span>
                <p>{service.brief.slice(0, 111)} <a href="/" className='text-blue-400'>read more ...</a></p>
                <h5>$ {service.price}</h5>
                <Link className="btn common-btn">View more</Link>
            </div>
        </div>
    );
};

export default ServCard;