import React, { useEffect, useState } from 'react';
import Offer from './Offer/Offer';
import './Offers.css';

const Offers = () => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, []);

    const handleBookNowClick = (id) => {
        console.log(id);
    }

    return (
        <div className="offers my-5 container">
            <h2 className="text-center my-3">On Going Offers!</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    offers?.map(offer => <Offer
                        key={offer._id}
                        handleBookNowClick={handleBookNowClick}
                        offer={offer}
                    >
                        
                    </Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;