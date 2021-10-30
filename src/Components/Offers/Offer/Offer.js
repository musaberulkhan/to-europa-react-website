import React from 'react';
import './Offer.css';

const Offer = (props) => {
    const { _id, image, name, details, regularPrice, discountedPrice } = props.offer;
    const { handleBookNowClick } = props;
    return (
        <div className="offer">
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <ul className="card-text">
                            {
                                details.map(detail => <li
                                    key={detail}
                                >
                                    <i className="fas fa-check"></i>{detail}</li>)
                            }
                        </ul>

                    </div>
                    <div className="card-footer">
                        <h5> <span>{regularPrice}</span> {discountedPrice} BDT </h5>
                        <button onClick={() => handleBookNowClick(_id)} className="w-100 btn btn-book-now">Book Now</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Offer;