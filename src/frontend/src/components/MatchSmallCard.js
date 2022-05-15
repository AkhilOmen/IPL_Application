import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard = ({match, teamName}) => {
  if(!match) return null;
  const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchwon = teamName === match.matchWinner;
  return (
    <div className = {isMatchwon ? "MatchSmallCard won-card" : "MatchSmallCard loss-card"}>
      <span className='vs'>vs</span>
      <h3 className='OtherTeam-Name'><Link to = {otherTeamRoute}>{otherTeam}</Link></h3>
      <p> {match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}