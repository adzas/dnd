import React from 'react';
import BackToHome from './BackToHome';

function Rules(props) {

    return (
        <div className={'Rules' !== props.activeStep ? 'panel left-1' : 'panel'}>
            <BackToHome changeVisible={props.changeVisible} />
            <div className='btn' style={{backgroundColor: 'var(--secondary-color)'}}>
                Zasady ...
            </div>
        </div>
    );
}

export default Rules;