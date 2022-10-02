import React from "react";
import messageImg from "../assets/message.png";

const Contact = () => {
    return (
        <div id="contact">
            <img src={messageImg} alt="" />
            <p className="red-text">Нөміріңізді қалдырып, көбірек ақпарат алыңыз</p>
            <h1 className="text40">Бізбен байланысу</h1>
            <div id="contact-form">
                <input type="text" placeholder="Есіміңіз" />
                <input type="text" placeholder="Телефон нөміріңіз" />
                <button>Жіберу</button>
            </div>
        </div>
    )
}

export default Contact;