import React from "react";
import buytickets from "../../images/buy_tickets.jpeg";

const BuyTickets = () => {
    return (
        <div className="BuyTickets" id="BuyTickets">
            <a href="https://www.ticketmaster.com/artist/805902?brand=BRU&camefrom=CFC_BRU_0312IND000100BPLP&f_PPL=true"> 
            <img style={{width: "100%"}} src={buytickets} />
            </a>
        </div>
    );
};

export default BuyTickets;