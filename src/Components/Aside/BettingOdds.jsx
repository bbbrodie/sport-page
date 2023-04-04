import React from "react";
import bettingodds from "../../images/bettingodds.png";

const BettingOdds = () => {
    return (
        <div className="BettingOdds" id="BettingOdds">
            <h3>Betting Odds</h3>
            <img style={{width: "100%"}} src={bettingodds} />
        </div>
    );
};

export default BettingOdds;