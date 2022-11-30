import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Carousel from '../Carousel/Carousel';
import OfferBanner from '../OfferBanner/OfferBanner';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <OfferBanner></OfferBanner>
            <AdvertiseItems></AdvertiseItems>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;