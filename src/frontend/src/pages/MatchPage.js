import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import './MatchPage.scss';

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect (
        () => {
            const fetchMatchsByYear = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            };
            fetchMatchsByYear();
        },[]
    );

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            <h1>{teamName}</h1>
            {matches.map(match => <MatchDetailsCard match = {match} teamName = {teamName} />)}
        </div>
    );
}
