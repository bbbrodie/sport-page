import React from "react";
import ladder from "../../images/ladder.png";
import "../../App.css"

const SeasonLadder = () => {
    return (
        <div className="SeasonLadder" id="SeasonLadder">
          <img style={{width: "100%"}} src={ladder} />
        </div>
    );
};

export default SeasonLadder;