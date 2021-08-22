import React from 'react';
import '../styles/SearchBar.scss';
import CharacterCard from '../components/CharacterCard'

export default function CardsHolder(props) {
    return <div className={"cards-holder"}>
        <CharacterCard img="./assets/rick.jpg" status={true} name={"Рик Санчез"} caption={"Человек, Мужской"}/>
        <CharacterCard img="./assets/rick.jpg" status={true} name={"Ник Санчез"} caption={"Человек, Мужской"}/>
        <CharacterCard img="./assets/rick.jpg" status={true} name={"Фик Санчез"} caption={"Человек, Мужской"}/>
        <CharacterCard img="./assets/rick.jpg" status={false} name={"Чик Санчез"} caption={"Человек, Мужской"}/>
    </div>
}
