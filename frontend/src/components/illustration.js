import React from "react";
import appImg from "../assets/apparat5.png";

const Illustration = () => {
    return (
        <div id="illustration">
            <div>
                <h4 className="red-text">Samuryq Group</h4>
                <h1 className="big-text">Оңтүстік Кореялық массажер</h1>
                <p className="gray-text">Қазақстандағы №1 аппарат</p>
                {/* <a  href="https://kaspi.kz/shop/p/xiaomi-repor-3600-vibratsionnyi-vozdushno-kompressionnyi-razogrevajuschii-raskatyvajuschii-massazher-belyi-seryi-104955103/?c=512610000&ref=shared_link"  */}
                {/* <a  href="#contact"
                    // target="_blank" 
                    rel="noopener noreferrer" 
                    className="red-button"
                >Сатып алу</a> */}
            </div>
            <div>
                <img src={appImg} alt="" />
                <div className="money">
                    <h1>360.000тг</h1>
                    <p>420.000тг</p>
                </div>
            </div>
            
        </div>
    );
}

export default Illustration;