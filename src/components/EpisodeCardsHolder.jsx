import React from 'react';
import EpisodeCard from './EpisodeCard'

const months = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Октября',
    10: 'Ноября',
    11: 'Декабря'
}

export default function EpisodeCardsHolder(props) {
    return <div className={`cards-holder ${props.view}`}>
        {
            props.data.map((val) => {
                const date = new Date(val.premiere);
                return <EpisodeCard img={val.imageName} number={val.series} name={val.name} date={`${date.getDate()} ${months.[date.getMonth()]} ${date.getFullYear()}`} key={val.id}/>
            })
        }
    </div>
}
