import React from "react";
import BettingOdds from "./BettingOdds";
import BuyTickets from "./BuyTickets";
import SeasonLadder from "./SeasonLadder";

const Aside = () => {
    return (
        <div className="AsideSection">
            <BuyTickets />
            <BettingOdds />
            <SeasonLadder />
        </div>
    );
};
export default Aside;