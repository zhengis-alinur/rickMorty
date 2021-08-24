import React from 'react';
import '../styles/EpisodePage.scss'
import CaptionItem from '../components/CaptionItem';
import CharacterCardsHolder from '../components/CharacterCardsHolder';
export default function EpisodePage(props) {
    return (
        <div className={"episode-page"}>
            <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 11L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="bg-avatar" style={{backgroundImage: `url(./assets/episode.png)`}}>
            </div>
            <div className="about-wrapper">
                <div className="about">
                    <svg className={"play-btn"} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path d="M129.5 76C129.5 103.34 107.34 125.5 80 125.5C52.6595 125.5 30.5 103.34 30.5 76C30.5 48.6595 52.6595 26.5 80 26.5C107.34 26.5 129.5 48.6595 129.5 76Z" fill="#22A2BD"/>
                            <path d="M74.1762 59.8188L95.5272 72.4468C98.2277 74.0418 98.2277 77.9523 95.5272 79.5473L74.1762 92.1753C71.4262 93.8033 67.9502 91.8178 67.9502 88.6223V63.3718C67.9502 60.1763 71.4262 58.1908 74.1762 59.8188Z" fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="-16" y="-16" width="192" height="192" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                    <p className="big-title">М. Найт Шьямал-Инопланетяне!</p>
                    <p className="blue-text">серия 1</p>
                    <div className="caption">
                        <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.</p>
                        <CaptionItem title={"Премьера"} text={"2 декабря 2013"} />
                    </div>
                    <p className="section-title">Персонажи</p>
                    <CharacterCardsHolder view={'list'} />
                </div>
            </div>
        </div>
    )
}