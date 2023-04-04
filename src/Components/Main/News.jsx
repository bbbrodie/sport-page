import React, { Component } from "react";
import EnhancedComponent from "./Search.jsx";
import HideNews from "./HideNews";

const newsList = [
  {
    "headline": "David Pastrnak Named NHL's 3rd Star of the Week",
    "article": `BOSTON - The National Hockey League announced today, April 3, that Boston Bruins forward David Pastrnak has been named the NHL Third Star of the Week for the week ending April 2.
    Pastrnak, 26, tallied points in each of the team's four games this week, helping the Bruins win three out of four and reach the 60-win mark on the season. He scored a goal in each of the team's home games against Nashville on March 28 and Columbus on March 30, before recording his 14th career hat trick to lead the Bruins to a 4-3 win at Pittsburgh on April 1. He finished the week with an assist in the team's 4-3 shootout win at St. Louis on April 2.
    Pastrnak has played in 77 games with the Bruins this season, recording a career-high 56 goals (2nd, NHL) and 47 assists for 103 points (4th, NHL) with a plus-32 rating. 
    The 6-foot-1, 195-pound winger has spent all nine seasons of his career in Boston, playing in a total of 587 games for the Bruins. In that time, Pastrnak has amassed 296 goals and 311 assists for 607 points. 
    The Havirov, Czech Republic native was originally drafted by the Bruins in the first round (25th overall) of the 2014 NHL Entry Draft.`,
    "link": <a href="https://www.nhl.com/bruins/news/david-pastrnak-named-nhls-3rd-star-of-the-week/c-343076866">"Bruins News"</a>
  },
  {
    "headline": "Bruins Assign Oskar Steen To Providence",
    "article": `BOSTON - Boston Bruins General Manager Don Sweeney announced today, April 3, that the team has assigned forward Oskar Steen  to Providence.
    Steen, 25, has skated in two games with Boston this season, tallying his first goal of the year in the team's 4-3 shootout win at St. Louis on April 2.    
    He has skated in 62 games with Providence this season, recording 14 goals and 17 assists for 31 points. The 5-foot-9, 199-pound forward has appeared in 194 career AHL games with Providence, totaling 41 goals and 59 assists for 100 points.    
    The Karlstad, Sweden native was originally selected by Boston in the sixth round (165th overall) of the 2016 NHL Entry Draft.`,
    "link": <a href="https://www.nhl.com/bruins/news/bruins-assign-oskar-steen-to-providence/c-343073812">"Bruins News"</a>
  },
  {
    "headline": "Bruins Announce Affiliation Extension Agreement With Maine Mariners",
    "article": `BOSTON - The Boston Bruins announced today, April 3, a two-year extension of their affiliation agreement with the Maine Mariners of the ECHL through the 2024-25 season. 
    "We are thrilled to extend our affiliation agreement with the Maine Mariners," said Providence Bruins General Manager Evan Gold. "The collaboration between Boston, Providence and Maine has been instrumental in helping our prospects improve not only their hockey skillsets on the ice, but also their work ethic and approach to becoming professionals off the ice. We are excited to continue to partner with the Mariners' coaching staff and front office as we strive to provide the best development opportunities for our players."
    "The Mariners are ecstatic to extend our affiliation with the Boston Bruins," said Mariners Vice President of Business Operations Adam Goldberg. "Beyond the obvious geographical connection between Maine and Boston, both of our organizations take great pride in professionalism and performance. It is an agreement for our players' development, our staff's relationships and most importantly for our fans. Maine is Bruins Country." 
    The Mariners will remain affiliated with the Providence Bruins at the AHL level. Providence represents the original Maine Mariners AHL franchise. The AHL's Mariners were Bruins affiliates from 1987 until 1992, when the franchise was relocated to Rhode Island. 
    The affiliation extension with the Mariners continues the "trifecta" of Portland-Boston affiliations, with the Portland Sea Dogs and Maine Celtics (formerly Maine Red Claws) having existing agreements with the Boston Red Sox and Boston Celtics, respectively.    
    The Bruins have had an ECHL affiliate since 1991. They've partnered up with the Johnstown Chiefs (1991-93, 2007-08), Charlotte Checkers (1993-94, 1995-98), Greenville Grrrowl (2001-02), Reading Royals (2009-12), South Carolina Stingrays (2012-15), and most recently, the Gwinnett/Atlanta Gladiators (2015-20). The Mariners represent their geographically closest ECHL affiliate. `,
    "link": <a href="https://www.nhl.com/bruins/news/bruins-assign-oskar-steen-to-providence/c-343073812">"Bruins News"</a>
  }
]

const NewsCom = (props) => {
  return (
    <div className="HideNews" id="News">
      <hr />
      <p>
        <b>Headline:</b> {props.headline}
      </p>
      <p>
        <b>Article:</b> <HideNews text={props.article}/>
      </p>
      <p>
        <b>Link:</b> {props.link}
      </p>
      <hr />
    </div>
  )
}


export class News extends Component {
  render() {
    const {searchTerm} = this.props;
    return (
      <div>
        <div>
          <h3>News</h3>
        </div>
        <div>
        {newsList
          .filter(news => `${news.title} ${news.location} ${news.hours}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
          .map(news => <NewsCom key={news.id} {...news} />)}
        </div>
      </div>
    );
  }
}

export default EnhancedComponent(News);