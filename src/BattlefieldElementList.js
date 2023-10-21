import React from 'react';
import { useState } from "react";

function BattlefieldElementList(props) {
    const data = props.data;
    const myClass = props.elementClass;
    const [actionClass, setActionClass] = useState('d-none');
    const [myStyle, setMyStyle] = useState({backgroundColor: 'var(--secondary-color)', height: '25px'})
    const [myStyleAction, setMyStyleAction] = useState({opacity: 0});
    
    const showOrHiddenAction = () => {
        const style = {backgroundColor: 'var(--secondary-color)'};
        if ('d-none' === actionClass) {
            // show
            style.height = '120px';
            setMyStyle(style);
            setActionClass('block');
            setTimeout(() => {
                setMyStyleAction({opacity: 1});
            }, 100);
        } else {
            // hidden
            setMyStyleAction({opacity: 0});
            setTimeout(() => {
                style.height = '25px';
                setMyStyle(style);
                setActionClass('d-none');
            }, 100);
        }
    }

    return (
        <div 
            className={myClass}
            style={myStyle}
            onClick={showOrHiddenAction}
        >
            {data.lp}. - {data.name}
            <div className={actionClass+' transition-opacity'} style={myStyleAction}>
                {data.actions.map(action => (
                    <div key={action}>{action}</div>
                ))}
            </div>
        </div>
    );
}

export default BattlefieldElementList;