import React from 'react';
import './BannerItem.css';

const BannerItem = (props) => {
    const { background, subtitle, title, description, image } = props;

    return (
        <div style={{ backgroundImage: `url(${background})` }}
            className="banner-item container-fluid">
            <div className="container p-5">
                <h4>{subtitle}</h4>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quos repellat laboriosam maiores possimus deleniti, quia tenetur blanditiis voluptate consectetur!</p>
                <button className="btn btn-dark px-4">View Packages</button>
            </div>
        </div>
    );
};

export default BannerItem;