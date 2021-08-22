import React from 'react';
import '../styles/BottomBar.scss';

export default function BottomBar(props) {
    return <div className={"bottombar-item"}>
        <div className="bottombar-item">
            {props.icon}
            <p className="grey-text">Персонажи</p>
        </div>
    </div>
}
