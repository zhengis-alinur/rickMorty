import React from 'react';
import '../styles/SearchBar.scss';
import LocationCard from './LocationCard'

export default function LocationCardsHolder(props) {
    return <div className={"cards-holder"}>
        {props.data.map(val => {
            return <LocationCard img={val.imageName} name={val.name} caption={`${val.type}${val.measurements !== "" ? ` • ${val.measurements}`: ""}`} key={val.id}/>
        })}
    </div>
}
