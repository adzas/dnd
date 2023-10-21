import { useState } from "react";
import BattlefieldStorage from "./basic/battlefield-storage";
import EnemyList from "./EnemyList";
import EnemyHelper from "./helpers/enemy-helper";
import STCounter from "./STCounter";

function PreparingToBattle(props) {

    // eslint-disable-next-line
    const battlefield = new BattlefieldStorage();
    const playersList = ['Alsariph', 'Omalen', 'Kreatura', 'Hum'];
    const [counter, setCounter] = useState(battlefield.getST());
    const [selectedEnemies, setSelectedEnemies] = useState('Lista przeciwników');
    const [enemyCount, setEnemyCount] = useState(null !== battlefield.get() ? battlefield.get().length : 0);

    const addEnemy = (enemy) => {
        setCounter(prevCounter => prevCounter + enemy.EXP);
        setEnemyCount(c => c + 1);

        const enemyHelper = new EnemyHelper();
        const newEnemy = enemyHelper.getRandomEnemyObjectByType(enemy.type, null);
        battlefield.store(newEnemy);
        setSelectedEnemyList();
    };

    const setSelectedEnemyList = () => {
        const selectedEnemy = battlefield.get();
        setSelectedEnemies(selectedEnemy.length + ': ');
        selectedEnemy.map((currentSelected) => {
            setSelectedEnemies(selectedEnemies => selectedEnemies + ' | ' + currentSelected.name);
            return true;
        });
    }

    const startBattle = () => {
        const battleList = battlefield.get();
        props.setBattlefield(battleList);
        props.changeVisible('Battle');
    };

    const clear = () => {
        battlefield.clearBFStorage();
        setCounter(0);
        setEnemyCount(0);
        setSelectedEnemies('Lista przeciwników');
    };

    return (
        <div className={'PreparingToBattle' !== props.activeStep ? 'd-none' : ''}>
            <STCounter
                playersCount={playersList.length}
                enemyCounter={enemyCount}
                expSummary={counter}
                enemyList={selectedEnemies}
                refreshEnemList={setSelectedEnemyList}
            />
            <EnemyList add={addEnemy} />
            <div
                className="btn" style={{backgroundColor: 'var(--primary-color)'}} 
                onClick={startBattle}
            >
                Start
            </div>
            <div className="btn" style={{backgroundColor: 'var(--secondary-color)'}} onClick={clear}>Wyzeruj</div>
        </div>
    );
}

export default PreparingToBattle;