import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Carousel from '../Carousel/Carousel';
import OfferBanner from '../OfferBanner/OfferBanner';
import SearchBar from '../SearchBar/SearchBar';
import RecentProduct from '../RecentProduct/RecentProduct';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <SearchBar></SearchBar>
            <OfferBanner></OfferBanner>
            <AdvertiseItems></AdvertiseItems>
            <RecentProduct></RecentProduct>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;