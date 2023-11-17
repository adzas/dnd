import React from "react";

function Logo () {
    
    return (
        <span>
            <img
                className="avatar"
                src="./DnDIcon2.png"
                alt={'App DnDHelper Icon'}
                style={{
                    width: '5em',
                    heigth: '5em'
                }}
            />
            <h3 className="avatarLabel">Dangeon & Dragons<br/>Master Helper</h3>
        </span>
    );
}

export default Logo;