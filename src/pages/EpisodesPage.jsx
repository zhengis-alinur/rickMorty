import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import EpisodeCardsHolder from '../components/EpisodeCardsHolder';
import BottomBar from '../components/BottomBar';
import '../styles/EpisodesPage.scss';

export default function EpisodesPage(props) {
    const seasons = ['1', '2', '3', '4', '5', '6', '7'];

    return <div className={"page"}>
        <SearchBar placeholder={"Найти эпизод"} filter={false}/>
        <div className="slider">
            {seasons.map((val) => {
                return <p className={"grey-text uppercase active"} key={val}>сезон {val}</p>
            })}
        </div>
        <EpisodeCardsHolder />
        <BottomBar />
    </div>
}
