import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Offer from './Offer/Offer';
import './Offers.css';

const Offers = () => {

    const [offers, setOffers] = useState([]);


    //  ----------------    Get Offers Details   ---------------
    useEffect(() => {
        fetch('https://grim-broomstick-65956.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, []);
   
    return (
        <div className="offers my-5 container">
            <h2 className="text-center my-3">On Going Offers!</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    //  ----------------    Display All Offers   ---------------
                    offers?.map(offer => <Offer
                        key={offer._id}                     
                        offer={offer}
                    >                        
                    </Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;