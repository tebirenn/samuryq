import axios from "axios";
import React from "react";
import messageImg from "../assets/message.png";

const Contact = () => {
    // const sendMessage = () => {
    //     const name = document.getElementById("contact-name");
    //     const number = document.getElementById("contact-number");

    //     // console.log(name.value, number.value);

    //     let text = `<b>Имя клиента:</b> ${name.value}\n<b>Номер клиента:</b> ${number.value}`;

    //     // document.location.replace(`https://api.telegram.org/bot5690970767:AAHcn4ScVmd-PkguZIZnInzxk6_LWD0Q7rU/sendMessage?chat_id=-802654452&parse_mode=html&text=${text}`);
    //     window.location = "youtube.com";
    // }

    const sendMessage = () => {
        const TOKEN = "5690970767:AAHcn4ScVmd-PkguZIZnInzxk6_LWD0Q7rU";
        const CHAT_ID = "-802654452";
        const name = document.getElementById("contact-name");
        const number = document.getElementById("contact-number");
        let message_text = `<b>Имя клиента:</b> ${name.value}\n<b>Номер клиента:</b> ${number.value}`;

        const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`; 

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message_text
        });

        name.value = "";
        number.value = "";

        alert("Сіздің өтінішіңіз қабылданды.\nБіз сізбен жақын арада байланысамыз!")
    }

    return (
        <div id="contact">
            <img src={messageImg} alt="" />
            <p className="red-text">Нөміріңізді қалдырып, көбірек ақпарат алыңыз</p>
            <h1 className="text40">Бізбен байланысу</h1>
            <div id="contact-form">
                <input id="contact-name" type="text" placeholder="Есіміңіз" name="user_name" />
                <input id="contact-number" type="number" placeholder="Телефон нөміріңіз" name="user_number" />
                <button onClick={() => sendMessage()}>Жіберу</button>
                {/* <a href="https://api.telegram.org/bot5690970767:AAHcn4ScVmd-PkguZIZnInzxk6_LWD0Q7rU/sendMessage?chat_id=-802654452&parse_mode=html&text=Alan">TEST</a> */}
            </div>
        </div>
    )
}

export default Contact;