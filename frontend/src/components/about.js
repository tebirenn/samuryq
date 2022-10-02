import React from "react";
import mailImg from "../assets/mail.svg";
import mapImg from "../assets/map.svg";
import callImg from "../assets/callme.svg";

const About = () => {
    return (
        <div id="about">
            <h1>Samuryq Group</h1>
            <p className="gray-text">Сіздің денсаулығыңыз - біздің шабытымыз<br/></p>
            <div id="about-item">
                <div className="about-item--card">
                    <img src={mailImg} alt="" />
                    <h6>Электронды почтамыз</h6>
                    <p className="gray-text">pompeopotery@gmail.com</p>
                </div>
                <div className="about-item--card">
                    <img src={mapImg} alt="" />
                    <h6>Біздің филиалдар</h6>
                    <p className="gray-text">Алматы, Шымкент</p>
                </div>
                <div className="about-item--card">
                    <img src={callImg} alt="" />
                    <h6>Ұялы телефонымыз</h6>
                    <p className="gray-text">+7 (700) 663 87-16</p>
                </div>
            </div>
        </div>
    );
}

export default About;