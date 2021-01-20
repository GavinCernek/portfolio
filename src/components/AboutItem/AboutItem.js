
import React from "react";

import "./AboutItem.css";

const AboutItem = props => {

    return (
        <div className="about-item">
            <div className="about-item-header">
                <h1>{props.header}</h1>
            </div>

            <div className="about-item-image">
                <img src={props.image} alt="About Item"/>
            </div>

            <div className="about-item-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default AboutItem;