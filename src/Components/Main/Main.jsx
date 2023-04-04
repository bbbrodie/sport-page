import React from "react";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import News from "./News";
import PlayerStats from "./PlayerStats"
import ContactUs from "./ContactUs"
import ErrorBoundary from "../ErrorBoundary"

const Main = () => {
    return (
        <div className="MainSection">
            <Welcome />
            <Highlights />
            <React.StrictMode>
                <ErrorBoundary>
                    <PlayerStats />
                    <h3 className="News">News</h3>
                </ErrorBoundary>  
            </React.StrictMode>
            <News />
            <ContactUs />
        </div>
    );
};

export default Main;