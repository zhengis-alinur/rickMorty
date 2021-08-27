import React, {useState} from 'react';
import '../styles/BottomBar.scss';
import { observer } from 'mobx-react-lite';
import { bottomBarIcons } from '../utils';
import appStore from '../store/AppStore';

const BottomBar = observer(props => {
    return <div className={"bottombar-item"} onClick={() => {appStore.changePage(props.page)}}>
        <div className="bottombar-item">
            {bottomBarIcons[props.page]}
            <p className={appStore.page === props.page ? 'blue-text-thin' : 'grey-text'}>{props.name}</p>
        </div>
    </div>
})

export default BottomBar;
