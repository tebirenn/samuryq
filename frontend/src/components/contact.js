import axios from "axios";
import React from "react";
import messageImg from "../assets/message.png";
import phoneImg from "../assets/phone.svg";

const Contact = () => {
    const sendMessage = () => {
        const TOKEN = "5690970767:AAHcn4ScVmd-PkguZIZnInzxk6_LWD0Q7rU";
        const CHAT_ID = "-802654452";
        const name = document.getElementById("contact-name");
        const number = document.getElementById("contact-number");

        const name_patt = /[A-Za-zА-Яа-я]+/i;
        const number_patt = /^(7|8)?(727|700|708|705|771|776|777|701|702|775|778|707|747|736)[0-9]{7}$/i;
        if (name.value.length !== 0 && number.value.length !== 0 ) {

            if (name_patt.test(name.value) &&
                number_patt.test(number.value.replace(/[\-\(\)\s\+]/i, ""))) {
                let message_text = `<b>Имя клиента:</b> ${name.value.replace(" ", "")}\n<b>Номер клиента:</b> ${number.value}`;
                const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`; 

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: "html",
                    text: message_text
                });
                
                name.value = "";
                number.value = "";

                alert("Сіздің өтінішіңіз қабылданды.\nБіз сізбен жақын арада байланысамыз!");
            } else {
                alert("Сіз кей ақпараттарды дұрыс толтырмадыңыз!\nҚайта тексеріп көріңіз.");
            }
        } else {
            alert("Сіз кей ақпараттарды жазуды естен шығардыңыз!");
        }
    }

    const whatsappTemplateText = "Толық ақпарат алғым келеді";

    return (
        <div id="contact">
            <a className="call-button" href={`https://api.whatsapp.com/send?phone=77008725003&text=${encodeURIComponent(whatsappTemplateText)}`} target="_blank" rel="noopener noreferrer">
                <img src={phoneImg} alt="" />
                <p>Бағасын білу</p>
            </a>
            {/*<img className="message-icon" src={messageImg} alt="" />*/}
            {/*<p className="red-text">Нөміріңізді қалдырып, көбірек ақпарат алыңыз</p>*/}
            {/*<h1 className="text40">Толық ақпарат алу</h1>*/}
            {/*<div id="contact-form">*/}
            {/*    <input id="contact-name" type="text" placeholder="Есіміңіз" name="user_name" />*/}
            {/*    <input id="contact-number" type="number" placeholder="Телефон нөміріңіз" name="user_number" />*/}
            {/*    <button onClick={() => sendMessage()}>Жіберу</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Contact;