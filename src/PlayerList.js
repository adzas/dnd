import React, { useState } from 'react';

function PlayerList (props) {
    const { players } = props;
    const [customInitiative, setCustomInit] = useState(0);
    const addPlayerToBattlefield = (playerCode) => {
        props.add({type: playerCode}, customInitiative)
    }

    return (
        <div>
            <input className="btn" style={{width: '90%', fontSize: '1em'}}
                placeholder="inicjatywa gracza"
                type="number" min="0" max="100" step="0.1" 
                onKeyUp={(e) => {setCustomInit(e.target.value)}}
                onClick={(e) => {e.target.value = '';}}
            />
            <div style={{display: 'grid', gridTemplateColumns: 'auto auto', padding: '1em'}}>
                {players.map((player, k) => (
                    <div
                        key={k}
                        className="btn"
                        style={{backgroundColor: 'var(--secondary-color)'}}
                        data-type={player}
                        // type="button"
                        onClick={() => {addPlayerToBattlefield(player)}}
                    >
                        {player}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerList;
