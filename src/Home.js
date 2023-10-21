import React from 'react';
import { useEffect, useState } from 'react';

function Home(props) {
    // const [myStyle, setMyStyle] = useState({marginRight: '-500px'})
    const [myClass, setMyClass] = useState('');
    useEffect(() => {
       if ('Home' === props.activeStep) {
            // setTimeout(() => {
                // setMyStyle({marginRight: '0px'});
            // }, 1000);
            setMyClass('');
       } else {
            // setMyStyle({marginRight: '-500px'});
            // setTimeout(() => {
                setMyClass('d-none');
            // }, 1000);
       }
    }, [props.activeStep]);

    return (
        <div className={' '+myClass} // negative-margin-right
            // style={myStyle}
        >
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