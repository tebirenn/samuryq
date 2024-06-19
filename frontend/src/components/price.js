import React from "react";
import sale from "../assets/img.png";

const Price = () => {
    return (
        <div id="price">
            {/* <h2>Аппараттың бағасы:</h2>
            <span></span> */}
            <span>
                <img src={sale} alt="" />
            </span>
            {/* <a  href="https://kaspi.kz/shop/p/xiaomi-repor-3600-vibratsionnyi-vozdushno-kompressionnyi-razogrevajuschii-raskatyvajuschii-massazher-belyi-seryi-104955103/?c=512610000&ref=shared_link" 
                    target="_blank"  */}
            {/* <a  href="#contact"
                rel="noopener noreferrer" 
                className="red-button"
            >Сатып алу</a> */}
{/* 
            <p>БАРЛЫҒЫ БӨЛІП ТӨЛЕУГЕ</p>
            <h1>0•0•12</h1>
            <p>ВСЁ В РАССРОЧКУ</p> */}
        </div>
    );
}

export default Price;