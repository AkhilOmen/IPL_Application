import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss';

export const HomePage = () => {

    const [ teams, setTeams ] = useState([]);

    useEffect (
        () => {
            const fetchAllteams =  async () => {
                const response = await fetch("http://localhost:8080/team");
                const data = await response.json();
                setTeams(data);
            };
            fetchAllteams();
        }, []
    );

    return (
        <div className='HomePage'>
            <h1 className='project-name'> My IPL Project </h1>
            <div>
                <h1 className='select-team'>Select Team</h1>
                { teams.map(team => <TeamTile key={team.id} teamName = {team.teamName}/>)}
            </div>
        </div>
    );

}
