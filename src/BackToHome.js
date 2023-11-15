import React from 'react';

function BackToHome(props) {
    return (
        <div className='btn' style={{backgroundColor: 'var(--second-gray-color)'}}
            onClick={() => {props.changeVisible('Home')}}
        >
            Powrót
        </div>
    )
}

export default BackToHome;