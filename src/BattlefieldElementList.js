import React, { useEffect } from 'react';
import { useState } from "react";
import EnemyHelper from './helpers/enemy-helper';

function BattlefieldElementList(props) {
    const data = props.data;
    const enemyHelper = new EnemyHelper();
    const enemyObiect = enemyHelper.getClassObjectKindByTypeEnemy(data.type, 'class', data);
    const [actionClass, setActionClass] = useState('d-none');
    const [myStyle, setMyStyle] = useState({})
    const [myStyleAction, setMyStyleAction] = useState({opacity: 0});
    const [eClass, setEClass] = useState('');

    useEffect(() => {
        if (data.id === props.orderId) {
            setEClass('btn');
            setMyStyle({backgroundColor: 'var(--secondary-color)', height: '50px'});
        } else {
            setEClass('d-none');
            setMyStyle({});
        }
    }, [props.orderId, data.id]);
    
    const showOrHiddenAction = () => {
        // TODO: obliczać wysokość elementu
        const style = {backgroundColor: 'var(--secondary-color)', height: 'auto'};
        if ('d-none' === actionClass) {
            // show
            // style.height = '130px';
            setMyStyle(style);
            setActionClass('block');
            setTimeout(() => {
                setMyStyleAction({opacity: 1});
            }, 100);
        } else {
            // hidden
            setMyStyleAction({opacity: 0});
            setTimeout(() => {
                // style.height = '50px';
                setMyStyle(style);
                setActionClass('d-none');
            }, 100);
        }
    }

    return (
        <div className={eClass} style={myStyle}>

            {data.lp}. - {data.name} - {data.statistics.initiative}

            <div className='btn' onClick={showOrHiddenAction}>
                {enemyObiect.shortInfo()}
            </div>

            <div className={actionClass+' transition-opacity'} style={myStyleAction}>
                {data.actions.map(action => (
                    <div key={action}>{action}</div>
                ))}
                {enemyObiect.renderInformation()}
            </div>

            <div
                className='btn' 
                style={{backgroundColor: 'var(--gray-color)'}}
                onClick={() => {props.nextElement(data.id+1)}}
            >
                next
            </div>
        </div>
    );
}

export default BattlefieldElementList;