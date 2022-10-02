import React from "react";
import footImg from "../assets/foot.svg";
import thunderImg from "../assets/thunder.svg";
import wavesImg from "../assets/waves.svg";

const Content1 = () => {
    return  (
        <div id="content1">
            <div>
                <h4 className="red-text">Samuryq</h4>
                <h1 className="text40">Аппараттың массаж түрлері</h1>
            </div>
            <div id="content1-desc">
                <div className="type">
                    <span>
                        <img src={footImg} alt="" />
                    </span>
                    <h1>Аяқ массажы</h1>
                </div>
                <div className="type">
                    <span>
                        <img src={thunderImg} alt="" />
                    </span>
                    <h1>Вибрациялық массаж</h1>
                </div>
                <div className="type">
                    <span>
                        <img src={wavesImg} alt="" />
                    </span>
                    <h1>Жылу терапиясы</h1>
                </div>
            </div>
        </div>
    );
}

export default Content1;