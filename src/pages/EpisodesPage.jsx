import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import EpisodeCardsHolder from '../components/EpisodeCardsHolder';
import BottomBar from '../components/BottomBar';
import '../styles/EpisodesPage.scss';
import { withRouter } from 'react-router-dom';

function EpisodesPage(props) {
    const seasons = ['1', '2', '3', '4', '5', '6', '7'];
    const [episodes, setEpisodes] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(()=>{
        fetchEpisodes(1,41);
    }, []);

    const fetchEpisodes = async (page, size) => {
        const data = await fetch(`http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=${page}&PageSize=${size}`);
        const episodes = await data.json();
        setEpisodes(episodes.data)
        setTotalRecords(episodes.totalRecords);
    }

    return (
        <>
            <div className={"page"}>
                <SearchBar placeholder={"Найти эпизод"} filter={false}/>
                <div className="slider">
                    {seasons.map((val) => {
                        return <p className={"grey-text uppercase active"} key={val}>сезон {val}</p>
                    })}
                </div>
                <EpisodeCardsHolder data={episodes}/>
            </div>
            <BottomBar />
        </>
    )
}
export default withRouter(EpisodesPage);
