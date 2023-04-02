import React from "react";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import PlayerStats from "./PlayerStats";
import News from "./News";

const Main = () => {
    return (
        <div>
            <Welcome />
            <Highlights />
            <PlayerStats />
            <News />
        </div>
    );
};

export default Main;