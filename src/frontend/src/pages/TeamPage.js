import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

    // We have used empty Object in useState b/c we want to initialize the team with an Object. 
    const [team, setTeam] = useState({matches: []});
    const { teamName } = useParams();

    useEffect ( 
        () => {
            const fetchMatchs = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatchs();
            
        }, [teamName] // We have used an empty array b/c Its Initialize the useEffect only when component loades for the FirstTime. 
            // Its won't run Infinite time as its happen when we don't give an empty array.

    );

    if(!team || !team.teamName ){
        return <h1> Team Not Found </h1>
    }
        
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <h1> % of wins {(team.totalWins/team.totalMatches) * 100}</h1>
            <MatchDetailsCard match = {team.matches[0]} teamName = {team.teamName} />
            {team.matches.slice(1).map(match => <MatchSmallCard match = {match} teamName = {team.teamName}/>)}
        </div>
    );
}
