import React, { useEffect, useState } from 'react';
import BackToHome from './BackToHome';
import ConstHelper from './helpers/constHelper';

function Settings (props) {
    const [myStyle, setMyStyle] = useState({width: ConstHelper.getWidthApp()});

    useEffect(() => {
        if ('Settings' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp()});
        } else {
            setMyStyle({width: ConstHelper.getWidthApp(), left: ConstHelper.getWidthApp()});
        }
    }, [props.activeStep]);

    return (
        <div className='panel' style={myStyle}>
            <BackToHome changeVisible={props.changeVisible} />
            <div className='btn' style={{backgroundColor: 'var(--primary-color)'}}>
                Ustawienia
            </div>
        </div>
    );
}

export default Settings;
