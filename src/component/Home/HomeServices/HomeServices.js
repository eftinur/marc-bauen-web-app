import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServCard from '../ServCard/ServCard';

const HomeServices = () => {
    const services = useLoaderData();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-3/4 mx-auto my-12'>
            {
                services.map(service => <ServCard key={service._id} service={service}></ServCard>)
            }
        </div>
    );
};

export default HomeServices;