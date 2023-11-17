import React, { useEffect, useState } from 'react';
import BattlefieldStorage from './basic/battlefield-storage';
import BattlefieldElementList from "./BattlefieldElementList";
import ConstHelper from './helpers/constHelper';

function Battle(props) {
    const [orderId, setOrderId] = useState(props.currElID);
    const [myStyle, setMyStyle] = useState({width: ConstHelper.getWidthApp()})
    useEffect(() => {
        if ('Battle' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp()});
        } else {
            setMyStyle({width: ConstHelper.getWidthApp(), left: ConstHelper.getWidthApp()});
        }
    }, [props.activeStep]);

    // eslint-disable-next-line
    const battlefield = new BattlefieldStorage();

    useEffect(() => {
        if (battlefield.getLastActiveID() < orderId) {
            setOrderId(battlefield.getFirstActiveID());
        }
    }, [orderId, battlefield]);

    return (
        <div className='panel' style={myStyle}>
            <div className='btn' style={{backgroundColor: 'var(--second-gray-color)'}}
                onClick={() => {props.changeVisible('PreparingToBattle')}}
            >
                Powrót
            </div>
            { null !== props.content ? props.content.map(item => (

                <BattlefieldElementList key={item.id} data={item} orderId={orderId} 
                    nextElement={setOrderId}/>
                
            )) : <div style={{color: 'black'}}>Pole bitwy jest puste <br/> ... </div> }
        </div>
    );
}

export default Battle;