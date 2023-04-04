import React from "react";
import HideText from "./HideText";

const Welcome = () => {
    const welcomeText = `Welcome to the homepage for the Boston Bruins NHL team. This introduction is specifically longer than it should be so that it 
    can make use of the show more/show less component, satisfying the reusable component requirement.`
    return (
        
        <div className="Welcome" id="Welcome">
            <h2>Welcome</h2>
            <p>
                <HideText text={welcomeText}/>
            </p>
        </div>
    );
};

export default Welcome;