import React from "react";
import sale from "../assets/0012.png";

const Price = () => {
    return (
        <div id="price">
            <h2>Аппараттың бағасы:</h2>
            <span></span>
            <p>370 000 теңге</p>
            <h1>320 000 теңге</h1>
            <img src={sale} alt="" />
            {/* <a  href="https://kaspi.kz/shop/p/xiaomi-repor-3600-vibratsionnyi-vozdushno-kompressionnyi-razogrevajuschii-raskatyvajuschii-massazher-belyi-seryi-104955103/?c=512610000&ref=shared_link" 
                    target="_blank"  */}
            <a  href="#contact"
                rel="noopener noreferrer" 
                className="red-button"
            >Сатып алу</a>
        </div>
    );
}

export default Price;