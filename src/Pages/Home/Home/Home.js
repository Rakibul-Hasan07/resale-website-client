import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Carousel from '../Carousel/Carousel';
import ProductsCategory from '../ProductsCategory/ProductsCategory';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <AdvertisedItems></AdvertisedItems>
            <ProductsCategory></ProductsCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;