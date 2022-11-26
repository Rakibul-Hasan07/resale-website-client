import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Carousel from '../Carousel/Carousel';
import OfferBanner from '../OfferBanner/OfferBanner';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AdvertisedItems></AdvertisedItems>
            <OfferBanner></OfferBanner>
        </div>
    );
};

export default Home;