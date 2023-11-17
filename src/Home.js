import React from 'react';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import ConstHelper from './helpers/constHelper';

function Home(props) {
    const [myStyle, setMyStyle] = useState({width: ConstHelper.getWidthApp()});
    useEffect(() => {
       if ('Home' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp()});
       } else {
            setMyStyle({width: ConstHelper.getWidthApp(), left: ConstHelper.getWidthApp()});
       }
    }, [props.activeStep]);

    return (
        <div className='panel' style={myStyle}>
            <Logo />
            <div className="btn"
                style={{backgroundColor: 'var(--primary-color)'}}
                onClick={() => {props.changeVisible('PreparingToBattle')}}
            >
                Przygotowania do bitwy
            </div>
            <div className="btn"
                style={{backgroundColor: 'var(--secondary-color)'}}
                onClick={() => {props.changeVisible('Rules')}}
            >
                Podręcznik
            </div>
            <div className="btn"
                style={{backgroundColor: 'var(--second-gray-color)'}}
                onClick={() => {props.changeVisible('Settings')}}
            >
                Ustawienia
            </div>
        </div>
    );
}

export default Home;