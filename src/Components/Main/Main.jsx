import React from "react";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import News from "./News";
import PlayerStats from "./PlayerStats"

const Main = () => {
    return (
        <div className="MainSection">
            <Welcome />
            <Highlights />
            <PlayerStats />
            <News />
        </div>
    );
};

export default Main;