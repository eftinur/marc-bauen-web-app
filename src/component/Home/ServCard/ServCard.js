import React from 'react';
import './ServCard.css';
import { Link } from 'react-router-dom';

const ServCard = ({service}) => {
    return (
        <div className=''>
            <div className="card-body h-full shadow-2xl bg-base-100">
                <img src={service.image} alt=""/>
                <h4>{service.title}</h4>
                <p>{service.brief.slice(0, 111)}<Link to='/' className='text-blue-400'> read more ...</Link></p>
                <h5>$ {service.price}</h5>
                <Link className="btn common-btn w-fit mt-2">View Details</Link>
            </div>
        </div>
    );
};

export default ServCard;