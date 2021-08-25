import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterCardsHolder from '../components/CharacterCardsHolder';

export default function CharactersPage(props) {
    useEffect(() => {
        fetchCharacters(1, 43);
    }, []);

    const [characters, setCharacters] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [view, setView] = useState('map');

    const toggleView = () => {
        view === 'map' ? setView('list') : setView('map');
    }

    const fetchCharacters = async (page, size) => {
        const data = await fetch(`http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=${page}&PageSize=${size}`);
        const characters = await data.json();
        setCharacters(characters.data);
        setTotalRecords(characters.totalRecords);
    }

    return <div className={"page"}>
        <SearchBar placeholder={"Найти персонажа"} filter={true}/>
        <div className="caption">
            <p className={"grey-caption"}>{`Всего персонажей: ${totalRecords}`}</p>
            <div className="view-toggle-btn" onClick={toggleView}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 6H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 18H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 12H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 18H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        <CharacterCardsHolder view={view} data={characters}/>
    </div>
}
