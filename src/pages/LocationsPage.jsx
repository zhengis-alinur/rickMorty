import React from 'react';
import SearchBar from '../components/SearchBar';
import LocationCardsHolder from '../components/LocationCardsHolder'
import BottomBar from '../components/BottomBar';

export default function LocationsPage(props) {
    return <div className={"page"}>
        <SearchBar placeholder={"Найти локацию"}/>
        <div className="caption">
            <p className={"grey-caption"}>{"Всего локаций: 200"}</p>
        </div>
        <LocationCardsHolder />
        <BottomBar />
    </div>
}
