import React from "react";
import appImg from "../assets/apparat.png";

const Illustration = () => {
    return (
        <div id="illustration">
            <div>
                <h4 className="red-text">Samuryq Group</h4>
                <h1 className="big-text">Массаж аппараты</h1>
                <p className="gray-text">Казакстандагы №1 аппарат</p>
                {/* <a  href="https://kaspi.kz/shop/p/xiaomi-repor-3600-vibratsionnyi-vozdushno-kompressionnyi-razogrevajuschii-raskatyvajuschii-massazher-belyi-seryi-104955103/?c=512610000&ref=shared_link"  */}
                {/* <a  href="#contact"
                    // target="_blank" 
                    rel="noopener noreferrer" 
                    className="red-button"
                >Сатып алу</a> */}
            </div>
            <img src={appImg} alt="" />
        </div>
    );
}

export default Illustration;