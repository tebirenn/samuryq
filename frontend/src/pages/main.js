import React from "react";
import About from "../components/about";
import Collection from "../components/collection";
import Contact from "../components/contact";
import Content1 from "../components/content1";
import Content2 from "../components/content2";
import Illustration from "../components/illustration";
import Outro from "../components/outro";
import Price from "../components/price";

const MainPage = () => {
    return (
        <section>
            <Illustration />
            <Contact />
            {/* <Content1 />
            <Content2 />
            <Price />
            <Collection />
            <Outro />
            <Price />
            <Contact />
            <About /> */}
        </section>
    );
}

export default MainPage;