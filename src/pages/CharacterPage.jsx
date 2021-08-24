import React, { useState } from 'react';
import '../styles/CharacterPage.scss';
import CharacterCaptionItem from '../components/CharacterCaptionItem';
import EpisodeCardsHolder from '../components/EpisodeCardsHolder'

export default function CharacterPage(props) {
    const [alive, setAlive] = useState(props.status);
    return <div className={"character-page"}>
        <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 11L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="bg-avatar" style={{backgroundImage: `url(./assets/rick.jpg)`}}>
            <div className="blur"></div>
            <div className={"character-avatar"} style={{backgroundImage: `url(./assets/rick.jpg)`}}></div>

        </div>
        <div className="character-title">
            <div className="title">Рик Санчез</div>
            <p className="green-text">Живой</p>
        </div>
        <div className="caption">
            <div className="about">
                <p>Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
                    и социопатия заставляют беспокоиться семью его дочери.
                </p>
            </div>
            <div className="horizontal">
                <CharacterCaptionItem title={"Пол"} text={"Мужской"} minWidth={163}/>
                <CharacterCaptionItem title={"Расса"} text={"Человек"} minWidth={163}/>
            </div>
            <CharacterCaptionItem title={"Место рождения"} text={"Земля C-137"} minWidth={343}/>
            <CharacterCaptionItem title={"Местоположение"} text={"Земля (Измерение подменны)"} minWidth={343}/>
        </div>
        <div className="episodes">
            <div className="section-title">
                <p className="title">Эпизоды</p>
                <p className="grey-text">Все эпизоды</p>
            </div>
            <EpisodeCardsHolder />
        </div>
    </div>
}
