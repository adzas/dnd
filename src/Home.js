import React from 'react';
import { useEffect, useState } from 'react';
import Logo from './Logo';

function Home(props) {
    const [myClass, setMyClass] = useState('');
    useEffect(() => {
       if ('Home' === props.activeStep) {
            setMyClass('');
       } else {
            setMyClass('d-none');
       }
    }, [props.activeStep]);

    return (
        <div className={myClass} >
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
        </div>
    );
}

export default Home;