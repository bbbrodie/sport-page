import React from "react";
import scores from "../../images/scores.png";

const Header = () => {
    return (
        <div className="Header">
          <img style={{width: "100%"}} src={scores} />
        </div>
    );
};

export default Header;