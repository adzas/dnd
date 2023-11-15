import React from 'react';
import BackToHome from './BackToHome';

function Settings (props) {

    return (
        <div className={'Settings' !== props.activeStep ? 'panel left-1' : 'panel'}>
            <BackToHome changeVisible={props.changeVisible} />
            <div className='btn' style={{backgroundColor: 'var(--primary-color)'}}>
                Ustawienia
            </div>
        </div>
    );
}

export default Settings;
