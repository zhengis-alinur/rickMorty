import React from 'react';
import CharacterCard from './CharacterCard'

export default function CharacterCardsHolder(props) {
    return <div className={`cards-holder ${props.view}`}>
        <CharacterCard img="./assets/rick.jpg" status={true} name={"Рик Санчез"} caption={"Человек, Мужской"}/>
        <CharacterCard img="./assets/rick.jpg" status={true} name={"Ник Санчез"} caption={"Человек, Мужской"}/>
        <CharacterCard img="./assets/rick.jpg" status={true} name={"Фик Санчез"} caption={"Человек, Мужской"}/>
        <CharacterCard img="./assets/rick.jpg" status={false} name={"Чик Санчез"} caption={"Человек, Мужской"}/>
    </div>
}
