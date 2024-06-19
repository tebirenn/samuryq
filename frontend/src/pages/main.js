import React from "react";
import About from "../components/about";
import Collection from "../components/collection";
import Contact from "../components/contact";
import Content1 from "../components/content1";
import Content2 from "../components/content2";
import Illustration from "../components/illustration";
import Outro from "../components/outro";
import Price from "../components/price";
import Header from "../components/header";

const MainPage = () => {
    return (
        <section id="app">
            <Header />
            <Illustration />
            <Price />
            {/* <Contact /> */}
            {/* <Content1 /> */}
            {/* <Content2 /> */}
            {/* <Collection /> */}
            {/* <Outro /> */}
            {/* <Price /> */}
            {/* <Contact /> */}
            <About />
        </section>
    );
}

export default MainPage;