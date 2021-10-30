import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>            
            <Packages></Packages>
            <Discount></Discount>
            <Offers></Offers>
        </div>
    );
};

export default Home;