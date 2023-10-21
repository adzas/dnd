import React from 'react';

function Rules(props) {

    return (
        <div className={'Rules' !== props.activeStep ? 'd-none' : ''}>
            <div>
                Zasady ...
            </div>
        </div>
    );
}

export default Rules;