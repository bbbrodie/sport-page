import React from "react";

function PlayerStats(){
  const data=[
      {
          pName:"David Pastrnak",
          gPlay: 77,
          goal: 56,
          assist: 47
        },
        {
          pName:"Brad Marchand",
          gPlay: 68,
          goal: 20,
          assist: 43
        },
        {
          pName:"Patrice Bergeron",
          gPlay: 74,
          goal: 27,
          assist: 30
        },
        {
          pName:"David Krejci",
          gPlay: 70,
          goal: 16,
          assist: 40
        },
        {
          pName:"Pavel Zacha",
          gPlay: 77,
          goal: 18,
          assist: 35
        },
        {
          pName:"Hampus Lindholm",
          gPlay: 75,
          goal: 10,
          assist: 41
        },
        {
          pName:"Charlie McAvoy",
          gPlay: 63,
          goal: 7,
          assist: 43
        },
        {
          pName:"Jake DeBrusk",
          gPlay: 59,
          goal: 25,
          assist: 23
        },
        {
          pName:"Charlie Coyle",
          gPlay: 77,
          goal: 13,
          assist: 28
        },
        {
          pName:"Taylor Hall",
          gPlay: 58,
          goal: 16,
          assist: 20
        },

  ]
    return (
      <div className="PlayerStats" id="PlayerStats">
        <h3>Player Statistics</h3>
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Games Played</th>
              <th>Goals Scored</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val,i)=>
              <tr>
                <td>{val.pName}</td>
                <td>{val.gPlay}</td>
                <td>{val.goal}</td>
                <td>{val.assist}</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PlayerStats;