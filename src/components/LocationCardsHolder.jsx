import React from 'react';
import '../styles/SearchBar.scss';
import LocationCard from './LocationCard'

export default function LocationCardsHolder(props) {
    return <div className={"cards-holder"}>
        <LocationCard img="./assets/earth.jpg" name={"Земля C-137"} caption={"Мир • Измерение С-137"}/>
        <LocationCard img="./assets/earth.jpg" name={"Земля C-137"} caption={"Мир • Измерение С-137"}/>
        <LocationCard img="./assets/earth.jpg" name={"Земля C-137"} caption={"Мир • Измерение С-137"}/>
        <LocationCard img="./assets/earth.jpg" name={"Земля C-137"} caption={"Мир • Измерение С-137"}/>
    </div>
}
