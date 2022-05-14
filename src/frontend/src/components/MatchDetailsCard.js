import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailsCard = ({match, teamName}) => {
  if(!match) return null;
  const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailsCard">
        <h2>Latest Match</h2>
        <h1> vs <Link to = {otherTeamRoute}>{otherTeam}</Link> </h1>
        <h2> on {match.date}</h2>
        <h3> at {match.venue}</h3>
        <h5> {match.matchWinner} won by {match.resultMargin} {match.result}</h5>
        <p>-----------------------------------------------------------------</p>
    </div>
  );
}
