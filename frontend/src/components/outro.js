import React from "react";
import deliveryImg from "../assets/delivery.svg";

const Outro = () => {
    return (
        <div id="outro">
            <div>
                <p className="red-text">Жеткізу қызметі</p>
                <h1 className="text40">Аппаратқа қалай тапсырыс берсек болады?</h1>
                <p className="gray-text">
                    Бізбен байланысу арқылы сіз кез-келген ақпаратты білсеңіз болады <br/> 
                    Қазақстанның кез-келген қаласына жеткізіп береміз <br/>
                    Сонымен қатар Алматы және Шымкент қалаларында тегін демонстрацияға жазылсаңыз болады!
                </p>
                <a href="https://wa.me/77006638716?text=C%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%2C%20samuryq.kz%20%D1%81%D0%B0%D0%B9%D1%82%D1%8B%D0%BD%D0%B0%D0%BD%20%D0%B6%D0%B0%D0%B7%D1%8B%D0%BF%20%D0%BE%D1%82%D1%8B%D1%80%D0%BC%D1%8B%D0%BD.%20%D0%A2%D0%B5%D0%B3%D1%96%D0%BD%20%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D2%93%D0%B0%20%D0%B6%D0%B0%D0%B7%D1%8B%D0%BB%D2%93%D1%8B%D0%BC%20%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%D1%96." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="red-button">
                    Демонстрацияға жазылу
                </a>
            </div>
            <img src={deliveryImg} alt="" />
        </div>
    );
}

export default Outro;