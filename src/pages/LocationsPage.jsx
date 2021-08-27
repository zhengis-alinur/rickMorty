import React, { useState, useEffect }from 'react';
import SearchBar from '../components/SearchBar';
import LocationCardsHolder from '../components/LocationCardsHolder'
import BottomBar from '../components/BottomBar';
import { withRouter } from 'react-router-dom';

function LocationsPage(props) {

    useEffect(()=>{
        fetchLocations(1,10);
    }, []);

    const [locations, setLocations] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);

    const fetchLocations = async (page, size) => {
        const data = await fetch(`http://173.249.20.184:7001/api/Locations/GetAll?PageNumber=${page}&PageSize=${size}`);
        const locations = await data.json();
        setLocations(locations.data)
        setTotalRecords(locations.totalRecords);
    }

    return (
        <>
            <div className={"page"}>
                <SearchBar placeholder={"Найти локацию"}/>
                <div className="caption">
                    <p className={"grey-caption"}>{`Всего локаций: ${totalRecords}`}</p>
                </div>
                <LocationCardsHolder data={locations}/>
            </div>
            <BottomBar />
        </>
    )
}
export default withRouter(LocationsPage);
