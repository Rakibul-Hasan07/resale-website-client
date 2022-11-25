import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;