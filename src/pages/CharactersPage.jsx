import React from 'react';
import SearchBar from '../components/SearchBar';
import CardsHolder from '../components/CardsHolder';
import BottomBar from '../components/BottomBar';
export default function CharactersPage(props) {
    return <div className={"page"}>
        <SearchBar placeholder={"Найти персонажа"}/>
        <div className="caption">
            <p className={"grey-caption"}>{"Всего персонажей: 200"}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 6H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 18H5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 12H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 18H20.5" stroke="#5B6975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <CardsHolder />
        <BottomBar />
    </div>
}
