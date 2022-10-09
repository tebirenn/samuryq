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
            <a href="https://wa.me/77006638716?text=C%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%2C%20samuryq.kz%20%D1%81%D0%B0%D0%B9%D1%82%D1%8B%D0%BD%D0%B0%D0%BD%20%D0%B6%D0%B0%D0%B7%D1%8B%D0%BF%20%D0%BE%D1%82%D1%8B%D1%80%D0%BC%D1%8B%D0%BD.%20%D0%90%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20%D0%B6%D0%B0%D0%B9%D0%BB%D1%8B%20%D2%9B%D0%BE%D1%81%D1%8B%D0%BC%D1%88%D0%B0%20%D0%B0%D2%9B%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20%D0%B0%D0%BB%D2%93%D1%8B%D0%BC%20%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%D1%96." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="red-button">
                    Толық ақпарат алу
                </a>
        </div>
    );
}

export default Collection;