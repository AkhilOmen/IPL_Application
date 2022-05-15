import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { YearSelector } from '../components/YearSelector';
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
        },[teamName, year]
    );

    if( matches.length == 0 ){
        return ( <div className="MatchPage">
                <div className='year-selector'>
                    <h3>Select Year</h3>
                    <YearSelector teamName = {teamName} />
                </div>
                <div>
                    <h1>Error -{">"} Please select a valid year, {teamName} didn't played in the year - {year}</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="MatchPage">
            <div className='year-selector'>
                <h4 className='text-select-year'>Select Year</h4>
                <YearSelector teamName = {teamName} />
            </div>
            <div>
                <h1 className='teamName'>{teamName} matches in the {year}</h1>
                {matches.map(match => <MatchDetailsCard match = {match} teamName = {teamName} />)}
            </div>
        </div>
    );
}
