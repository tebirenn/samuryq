import React from "react";
import mailImg from "../assets/mail.svg";
import mapImg from "../assets/map.svg";
import callImg from "../assets/callme.svg";
import { POLICY_PAGE_ROUTE } from "../utils/consts";

const About = () => {
    return (
        <div id="about">
            <h1>Samuryq Group</h1>
            {/* <p className="gray-text">Сіздің денсаулығыңыз - біздің шабытымыз<br/></p> */}
            <div id="about-item">
                <div className="about-item--card">
                    {/* <img src={mailImg} alt="" /> */}
                    {/* <h6>Электронды почтамыз</h6> */}
                    <p className="gray-text">bekzat322b@gmail.com</p>
                </div>
                <div className="about-item--card">
                    {/* <img src={mapImg} alt="" /> */}
                    {/* <h6>Біздің филиалдар</h6> */}
                    <p className="gray-text">Казахстан, Шымкент, Байдибек би, 24Б</p>
                </div>
                <div className="about-item--card">
                    {/* <img src={callImg} alt="" /> */}
                    {/* <h6>Ұялы телефонымыз</h6> */}
                    <p className="gray-text">8 (700) 872 50-03</p>
                </div>

                <div className="about-links">
                    <a href={POLICY_PAGE_ROUTE}>Политика конфиденциальности</a>
                    <p>© Samuryq Group 2024. Массажные кресла, массажеры, товары для дома</p>
                </div>
            </div>
        </div>
    );
}

export default About;