import React from "react";
import appImg from "../assets/apparat.png";

const Illustration = () => {
    return (
        <div id="illustration">
            <div>
                <h4 className="red-text">Samuryq Group</h4>
                <h1 className="big-text">Массаж аппараты</h1>
                <p className="gray-text">Казакстандагы №1 аппарат</p>
                <button className="red-button">Сатып алу</button>
            </div>
            <img src={appImg} alt="" />
        </div>
    );
}

export default Illustration;