import React from 'react';
import './ServCard.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServCard = ({service}) => {
    return (
        <div className=''>
            <div className="card-body h-full shadow-2xl bg-base-100">
                <PhotoProvider>
                    <PhotoView src={service.image}>
                    <img src={service.image} alt=""/>
                    </PhotoView>
                </PhotoProvider>
                <h4>{service.title}</h4>
                <p>{service.brief.slice(0, 111)}<Link to='/' className='text-blue-400'> read more ...</Link></p>
                <h5>$ {service.price}</h5>
                <Link to={`/services/${service._id}`} className="btn common-btn w-fit mt-2">View Details</Link>
            </div>
        </div>
    );
};

export default ServCard;