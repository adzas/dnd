import React, { useEffect, useState } from 'react';
import BackToHome from './BackToHome';
import BattlefieldStorage from "./basic/battlefield-storage";
import EnemyList from "./EnemyList";
import ConstHelper from './helpers/constHelper';
import EnemyHelper from "./helpers/enemy-helper";
import PlayerList from './PlayerList';
import STCounter from "./STCounter";

function PreparingToBattle(props) {

    // eslint-disable-next-line
    const battlefield = new BattlefieldStorage();
    // default players list
    const playerList = ['alsariph', 'omalen', 'kreatura', 'hum'];
    // total DC / EXP of selected enemies
    const [EXPcounter, setEXPCounter] = useState(battlefield.getST());
    // list of participant battle (only a names)
    const [selectedEnemies, setSelectedEnemies] = useState('Lista przeciwników');
    // counter generated enemies to the battlefield
    const [enemyCount, setEnemyCount] = useState(null !== battlefield.get() ? battlefield.get().length : 0);
    const [myStyle, setMyStyle] = useState({width: ConstHelper.getWidthApp()});

    useEffect(() => {
        if ('PreparingToBattle' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp()})
        } else if ('Battle' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp(), left: -ConstHelper.getWidthApp()})
        } else {
            setMyStyle({width: ConstHelper.getWidthApp(), left: ConstHelper.getWidthApp()})
        }
    }, [props.activeStep])

    // add enemy to the storage and prepare settings around.
    const addEnemy = (enemy, initiative = null) => {
        if (!playerList.includes(enemy.type)) {
            setEXPCounter(prevCounter => prevCounter + enemy.EXP);
            setEnemyCount(c => c + 1);
        }
        const enemyHelper = new EnemyHelper();
        const newEnemy = enemyHelper.getRandomEnemyObjectByType(enemy.type, initiative);
        battlefield.store(newEnemy);
        setSelectedEnemyList();
    };

    const setSelectedEnemyList = () => {
        const selectedEnemy = battlefield.get();
        if (null !== selectedEnemy) {
            setSelectedEnemies(selectedEnemy.length + ': ');
            selectedEnemy.map((currentSelected) => {
                // TODO: zrobić usuwanie elementu po kliknięciu.
                setSelectedEnemies(selectedEnemies => selectedEnemies + ' | ' + currentSelected.name);
                return true;
            });
        }
    }

    const startBattle = () => {
        let battleList = null;
        let currElemID = null;
        if (null !== battlefield.get()) {
            battlefield.sortByInitiative();
            currElemID = battlefield.getGameProcess();
            if (null === currElemID) {
                battlefield.setGameProcess({currentElementID: 0});
            }
            if (currElemID > battlefield.getLastActiveID()) {
                currElemID = 0;
            }
            battleList = battlefield.get();
        }
        props.setBattlefield(battleList, currElemID);
        props.changeVisible('Battle');
    };

    const clear = () => {
        battlefield.clearBFStorage();
        setEXPCounter(0);
        setEnemyCount(0);
        setSelectedEnemies('Lista przeciwników');
    };

    return (
        <div className='panel' style={myStyle}>
        <BackToHome changeVisible={props.changeVisible} activeStep={props.activeStep} />
            <STCounter
                playersCount={playerList.length}
                enemyCounter={enemyCount}
                expSummary={EXPcounter}
                enemyList={selectedEnemies}
                refreshEnemList={setSelectedEnemyList}
            />
            <div
                className="btn" style={{backgroundColor: 'var(--primary-color)'}} 
                onClick={startBattle}
            >
                Start
            </div>
            <div className="btn" style={{backgroundColor: 'var(--gray-color)'}} onClick={clear}>Wyzeruj</div>
            <PlayerList players={playerList} add={addEnemy} />
            <EnemyList add={addEnemy} />
        </div>
    );
}

export default PreparingToBattle;