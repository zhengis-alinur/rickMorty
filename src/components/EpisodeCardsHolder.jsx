import React from 'react';
import EpisodeCard from './EpisodeCard'

export default function EpisodeCardsHolder(props) {
    return <div className={`cards-holder ${props.view}`}>
        <EpisodeCard img="./assets/rick.jpg" number={1} name={"Рик Санчез"} date={"2 декабря 2013"}/>
        <EpisodeCard img="./assets/rick.jpg" number={1} name={"Рик Санчез"} date={"2 декабря 2013"}/>
        <EpisodeCard img="./assets/rick.jpg" number={1} name={"Рик Санчез"} date={"2 декабря 2013"}/>
        <EpisodeCard img="./assets/rick.jpg" number={1} name={"Рик Санчез"} date={"2 декабря 2013"}/>
        <EpisodeCard img="./assets/rick.jpg" number={1} name={"Рик Санчез"} date={"2 декабря 2013"}/>
    </div>
}
