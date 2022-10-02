import React from "react";

const Collection = () => {
    return (
        <div id="collection">
            <span>
                <p className="red-text">Аурулардың алдын алу</p>
                <h1 className="text40">Қандай ауруларды емдеуге көмектеседі?</h1>
            </span>
            <div className="collection-all-cards">
                <div className="collection--card">
                    <div className="collection--card--img1"></div>
                    <span>
                        <p className="gray-text">Подагра</p>
                        {/* <p></p> */}
                    </span>
                </div>
                <div className="collection--card">
                    <div className="collection--card--img2"></div>
                    <span>
                        <p className="gray-text">Варикозды веналар</p>
                        {/* <p>320 000тг</p> */}
                    </span>
                </div>
                <div className="collection--card">
                    <div className="collection--card--img3"></div>
                    <span>
                        <p className="gray-text">Аяқтың ісінуі</p>
                        {/* <p>320 000тг</p> */}
                    </span>
                </div>
            </div>
            <div>
                <div className="collection--card">
                <div className="collection--card--img4"></div>
                    <span>
                        <p className="gray-text">Өкше тіктігі</p>
                        {/* <p>320 000тг</p> */}
                    </span>
                </div>
                <div className="collection--card">
                    <div className="collection--card--img5"></div>
                    <span>
                        <p className="gray-text">Тізе ауруы</p>
                        {/* <p>320 000тг</p> */}
                    </span>
                </div>
                <div className="collection--card">
                    <div className="collection--card--img6"></div>
                    <span>
                        <p className="gray-text">Урологиялық аурулар</p>
                        {/* <p>320 000тг</p> */}
                    </span>
                </div>
            </div>
            <button className="red-button">Толық ақпарат алу</button>
        </div>
    );
}

export default Collection;