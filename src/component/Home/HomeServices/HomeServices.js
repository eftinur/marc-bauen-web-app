import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServCard from '../ServCard/ServCard';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const services = useLoaderData();
    return (
       <div className='w-3/4 mx-auto my-20'>
        <div className="common-title">
          <h2>
            Our <span>Services</span>
          </h2>
        </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-12'>
            {
                services.map(service => <ServCard key={service._id} service={service}></ServCard>)
            }
        </div>
        <div className='text-center'>
        <Link to='/services' className="btn common-btn">Load more</Link>
        </div>
       </div>
    );
};

export default HomeServices;