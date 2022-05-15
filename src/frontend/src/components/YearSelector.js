import { React } from 'react';
import { Link } from 'react-router-dom';
import './YearSelector.scss';

export const YearSelector = ({teamName}) => {

    let years = [];
    const startYear = process.env.REACT_APP_DATE_START_YEAR;
    const endYear = process.env.REACT_APP_DATE_END_YEAR;

    for( let i = startYear; i <= endYear; i++ ){
        years.push(i);
    }

    return(
        <div className='YearSelector'>
            <ol className='years-list'>
                {years.map(year => 
                    <li className='years-one-list'>
                        <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
                    </li>   
                )}
            </ol>
        </div>
    )

}