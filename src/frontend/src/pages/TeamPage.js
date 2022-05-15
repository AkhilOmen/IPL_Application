import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';

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
            <div className='teamname-section'>
                <Link to={`/`}>HomePage</Link>
                <h1 className='teamname'>{team.teamName}</h1>
                <h4>Latest Match</h4>
            </div>
            <div className='team-win-loss-section'>
                <PieChart className='pie-chart'
                    data={[
                        { title: `Losses ${team.totalMatches - team.totalWins}`, value: team.totalMatches - team.totalWins, color: 'lightpink' },
                        { title: `Wins ${team.totalWins}`, value: team.totalWins, color: 'lightgreen' },
                    ]}
                    radius={30}
                />
            </div>
            <div className='team-matchdetail-section'><MatchDetailsCard match = {team.matches[0]} teamName = {team.teamName} /></div>
            {team.matches.slice(1).map(match => <MatchSmallCard match = {match} teamName = {team.teamName}/>)}
            <div className='team-morematches-section'> 
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATE_END_YEAR}`}>More-{">"}</Link>
            </div>
        </div>
    );
}
