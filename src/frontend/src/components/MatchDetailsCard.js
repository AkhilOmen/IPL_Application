import { React } from 'react';

export const MatchDetailsCard = ({match}) => {
  if(!match) return null;
  return (
    <div className="MatchDetailsCard">
        <h2>Latest Match</h2>
        <h3>MatchDetailsCard</h3>
        <h4> {match.team1} vs {match.team2} </h4>
    </div>
  );
}
