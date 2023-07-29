import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Carousel from '../Carousel/Carousel';
import OfferBanner from '../OfferBanner/OfferBanner';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <SearchBar></SearchBar>
            <OfferBanner></OfferBanner>
            <AdvertiseItems></AdvertiseItems>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;