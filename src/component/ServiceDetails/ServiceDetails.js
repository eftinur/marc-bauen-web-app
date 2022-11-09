import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className='ser-main min-h-screen'>
        <div className='w-3/4 mx-auto my-16'>
            <h3>{service.title}</h3>
            <div className='service-photo w-full shadow-2xl'>
                <img src={service.image} alt="" />
            </div>
            <div className='service-details mt-9'>
                <p>{service.brief}</p>
                <h5>$ {service.price}</h5>
                <Link to='/' className="btn common-btn">Hire now</Link>
            </div>
        </div>
        <div className="review-main">
            <h2 className='text-center'>reviews</h2>
        </div>
        </div>
    );
};

export default ServiceDetails;