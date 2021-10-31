import React, { useEffect, useState } from 'react';
import './MyOrder.css';

const MyOrder = (props) => {

    const { _id, packageId, status } = props.order;
    const [_package, setPackage] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackage(data));
    }, []);


    return (
        <div className="my-order m-3 p-3 d-flex align-items-center">
            <div className="">
                <img className="package-image img-fluid" src={_package?.image} alt="" />
            </div>
            <div className="ms-4">
                <h3>{_package?.name}</h3>
                <h5>Price: {_package.price}</h5>
                <ul>
                    {
                        _package?.details?.map(detail => <li
                            key={detail}
                        >
                            <i className="fas fa-check"></i>{detail}</li>)
                    }
                </ul>
                <h6>Status: {status}</h6>
            </div>

        </div>
    );
};

export default MyOrder;