import React from 'react';
import '../styles/BottomBar.scss';
import BottomBarItem from '../components/BottomBarItem';
import { Link } from 'react-router-dom';


const BottomBar = (props => {
    const navStyle = {textDecoration: "none"};
    return <div className={"bottombar"}>
        <Link to={"/characters"} style={navStyle} >
            <BottomBarItem name={"Персонажи"} page={'characters'}/>
        </Link>
        <Link to={"/locations"} style={navStyle} >
            <BottomBarItem name={"Локации"} page={'locations'}/>
        </Link>
        <Link to={"/episodes"} style={navStyle} >
            <BottomBarItem name={"Эпизоды"} page={'episodes'}/>
        </Link>
        <Link to={"/settings"} style={navStyle} >
            <BottomBarItem name={"Настройки"} page={'settings'}/>
        </Link>
    </div>
});
export default BottomBar;
