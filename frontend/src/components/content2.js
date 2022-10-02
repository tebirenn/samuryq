import React from "react";
import apparat1 from "../assets/apparat1.png";
import apparat2 from "../assets/apparat2.png";

const Content2 = () => {
    return (
        <div id="content2">
            <h1 className="text40">Массажердің сипаттамалары</h1>
            <div className="content2-item">
                <div className="content-item--img">
                    <img src={apparat1} alt="" />
                    <span></span>
                </div>
                <div className="content-item--text">
                    <h2>Желі: 220 В</h2>
                    <h2>Қуаты: 66 Вт</h2>
                    <h2>Салмағы: 11 кг</h2>
                    <h2>Өлшемі: 45х43х29 см</h2>
                    <h2>Басқару: Сенсор</h2>
                </div>
            </div>
            <div className="content2-item">
                <div className="content-item--text left">
                    <h2>Нүктелі массаж</h2>
                    <h2>4 жастақша</h2>
                    <h2>Авто таймер</h2>
                    <h2>Режимді басқару</h2>
                    <h2>Роликтер</h2>
                </div>
                <div className="content-item--img">
                    <span></span>
                    <img src={apparat2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Content2;