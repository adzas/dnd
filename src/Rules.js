import React, { useEffect, useState } from 'react';
import BackToHome from './BackToHome';
import ConstHelper from './helpers/constHelper';

function Rules(props) {
    const [myStyle, setMyStyle] = useState({width: ConstHelper.getWidthApp()});

    useEffect(() => {
        if ('Rules' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp()});
        } else {
            setMyStyle({width: ConstHelper.getWidthApp(), left: ConstHelper.getWidthApp()});
        }
    }, [props.activeStep]);

    return (
        <div className="panel" style={myStyle}>
            <BackToHome changeVisible={props.changeVisible} />
            <div className='btn' style={{backgroundColor: 'var(--secondary-color)'}}>
                Zasady ...
            </div>
        </div>
    );
}

export default Rules;