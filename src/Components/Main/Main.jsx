import React from "react";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import News from "./News";
import PlayerStats from "./PlayerStats"
import ContactUs from "./ContactUs"

const Main = () => {
    return (
        <div className="MainSection">
            <Welcome />
            <Highlights />
            <PlayerStats />
            <News />
            <ContactUs />
        </div>
    );
};

export default Main;