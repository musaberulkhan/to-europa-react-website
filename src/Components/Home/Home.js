import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Packages></Packages>
        </div>
    );
};

export default Home;