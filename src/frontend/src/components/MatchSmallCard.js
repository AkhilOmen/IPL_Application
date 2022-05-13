import { React } from 'react';

export const MatchSmallCard = ({match}) => {
    if(!match) return null;
  return (
    <div className="MatchSmallCard">
      <h4> {match.team1} vs {match.team2} </h4>
    </div>
  );
}