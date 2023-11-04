import React, { useState } from 'react';

function PlayerList (props) {
    const { players } = props;
    const [customInitiative, setCustomInit] = useState(0);
    const addPlayerToBattlefield = (playerCode) => {
        props.add({type: playerCode}, customInitiative)
    }

    return (
        <div>
            <input className="btn" style={{width: 'calc(100% - 70px)'}}
                placeholder="inicjatywa gracza"
                type="number" min="0" max="100" step="0.1" 
                onKeyUp={(e) => {setCustomInit(e.target.value)}}
                onClick={(e) => {e.target.value = '';}}
            />
                <br/>
            {players.map((player, k) => (
                <button
                    key={k}
                    className="btn"
                    style={{backgroundColor: 'var(--gray-color)'}}
                    data-type={player}
                    type="button"
                    onClick={() => {addPlayerToBattlefield(player)}}
                >
                    {player}
                </button>
            ))}
        </div>
    );
}

export default PlayerList;
