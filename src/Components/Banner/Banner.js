import React from 'react';
import './Banner.css';
import BannerItem from './BannerItem/BannerItem';


const Banner = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <BannerItem
                            background="images/banner1-bg.jpg"
                            subtitle="Your dream countries are waiting"
                            title="Flat 10% Discount on Upcoming Winter Packages"
                            description="dasdsadsadsadasdasdd"
                            image=""
                        ></BannerItem>
                    </div>
                    <div className="carousel-item">
                        <BannerItem
                            background="images/banner2-bg.jpg"
                            subtitle="Your dream countries are waiting"
                            title="Planning to visit Germany? 20% Discount"
                            description="dasdsadsadsadasdasdd"
                            image=""
                        ></BannerItem>
                    </div>
                    <div className="carousel-item">
                        <BannerItem
                            background="images/banner3-bg.jpg"
                            subtitle="Your dream countries are waiting"
                            title="Become a member of our website and get more offers"
                            description="dasdsadsadsadasdasdd"
                            image=""
                        ></BannerItem>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;