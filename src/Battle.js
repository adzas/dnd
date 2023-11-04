import React, { useEffect, useState } from 'react';
import BattlefieldStorage from './basic/battlefield-storage';
import BattlefieldElementList from "./BattlefieldElementList";

function Battle(props) {
    const [orderId, setOrderId] = useState(props.currElID);
    const sectionClass = 'Battle' === props.activeStep ? 'battleContent' : 'd-none';
    // eslint-disable-next-line
    const battlefield = new BattlefieldStorage();

    useEffect(() => {
        if (battlefield.getLastActiveID() < orderId) {
            setOrderId(battlefield.getFirstActiveID());
        }
    }, [orderId, battlefield]);

    return (
        <div className={sectionClass}>
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