import React from "react";
import logo from '../assets/logo_samuryq.png';
import instagramLogo from '../assets/instagram_icon.svg';
import whatsappLogo from '../assets/whatsapp_icon.svg';
import kaspiLogo from '../assets/kaspi_icon.svg';
import { MAIN_PAGE_ROUTE } from "../utils/consts";

const Header = () => {
    return (
        <header>
            <a className="header-logo" href={MAIN_PAGE_ROUTE}>
                <img src={logo} alt="" />
                <h2>Samuryq Group</h2>
            </a>

            <div className="header-all-links">
                <span className="header-nav">
                    <a className="gray-text" href="#price">Магазин</a>
                    <a className="gray-text" href="#contact">Байланыс</a>
                    <a className="gray-text" href="#about">Біз жайлы</a>
                </span>

                <span className="header-contact">
                    <a href="https://www.instagram.com/samuryq_group/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=77006638716" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappLogo} alt="" />
                    </a>
                    <a href="https://kaspi.kz/shop/p/g-10-ruchnoi-vibratsionnyi-shiatsu-109738219/?c=511010000&ref=shared_link" target="_blank" rel="noopener noreferrer">
                        <img src={kaspiLogo} alt="" />
                    </a>
                </span>
            </div>
        </header>
    );
}

export default Header;