import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Package from './Package/Package';
import './Packages.css';

const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, []);

    const handleBookNowClick = id => {
        console.log(id);
    }

    return (
        <div className="packages my-5 container">
            <h2 className="text-center py-3">Regular Packages</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    packages?.map(_package => <Package
                        key={_package._id}
                        handleBookNowClick={handleBookNowClick}
                        _package={_package}
                    >                        
                    </Package>)
                }
            </div>
        </div>
    );
};

export default Packages;