import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;