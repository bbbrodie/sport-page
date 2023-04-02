import React, {useState} from "react";

const Navigation = () => {
    const [selectedNavItem, setSelectedNavItem] = useState("welcome");
    const navItems = [
        { id: 1, title: "Welcome", name: "Welcome"},
        { id: 2, title: "Highlights", name: "Highlights"},
        { id: 3, title: "Player Statistics", name: "PlayerStats"},
        { id: 4, title: "News", name: "News"},
        { id: 5, title: "Buy Tickets", name: "BuyTickets"},
        { id: 6, title: "Betting Odds", name: "BettingOdds"},
        { id: 7, title: "Season Ladder", name: "SeasonLadder"},
    ];
    return (
        <div className="Navigation">
            <ul className="NavigationMenus">
                {navItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setSelectedNavItem(item.name)}
                            className={selectedNavItem === item.name ? `activeNavItem` : ""}
                        >
                            <a href={`#${item.name}`}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navigation;