import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css';
import BannerItem from './BannerItem/BannerItem';


const Banner = () => {

    const history = useHistory();

    const handleViewPackagesOnClick = () => {
        history.push("/packages");
    }
    const handleViewOffersOnClick = () => {
        console.log("");
    }
    const handleSignUpOnClick = () => {
        history.push("/register");
    }

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
                            subtitle="YOUR DREAM COUNTRIES ARE WAITING...."
                            title="Flat 10% Discount on Upcoming Winter Packages"
                            description="We will give flat 10% discount on all upcoming winter packages. Please Follow our website for more details."
                            button="View All Packages"
                            handleButtonListener = {handleViewPackagesOnClick}
                            image=""
                        ></BannerItem>
                    </div>
                    <div className="carousel-item">
                        <BannerItem
                            background="images/banner2-bg.jpg"
                            subtitle="WANT TO VISIT THE KING OF EUROPIAN LAND??"
                            title="20% Discount on Germany Tour Packages of 2022"
                            description="At the beginning of 2022, We will give 20% discount for all Germany tour packages"
                            button="View All Offers"
                            handleButtonListener = {handleViewOffersOnClick}
                            image=""
                        ></BannerItem>
                    </div>
                    <div className="carousel-item">
                        <BannerItem
                            background="images/banner3-bg.jpg"
                            subtitle="WE ARE HERE TO MAKE YOUR DREAM TRUE"
                            title="Become a member of our website and get more offers"
                            description="Sign up today and get special discount and offers for our registered customers"
                            button="Sign Up Now!"
                            handleButtonListener = {handleSignUpOnClick}
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