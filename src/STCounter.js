import React, { useEffect, useState } from "react";

function STCounter(props) {
    const { playersCount, enemyCounter, expSummary, enemyList } = props;
    const [ST, setST] = useState('poniżej poziomu');
    const [enemySpecular, setEnemySpecular] = useState(expSummary);

    useEffect(() => {
        if (2 > enemyCounter) {
            setEnemySpecular(expSummary);
        }
        if (2 === enemyCounter) {
            setEnemySpecular(expSummary * 1.5);
        }
        if (3 <= enemyCounter && 6 >= enemyCounter) {
            setEnemySpecular(expSummary * 2);
        }
        if (7 <= enemyCounter && 10 >= enemyCounter) {
            setEnemySpecular(expSummary * 2.5);
        }
        if (11 <= enemyCounter && 14 >= enemyCounter) {
            setEnemySpecular(expSummary * 3);
        }
        if (15 < enemyCounter) {
            setEnemySpecular(expSummary * 4);
        }
    }, [expSummary, enemyCounter]);

    useEffect(() => {
        let actualST = ST;
        const lvl = 5;
        let rangeEasy = 25;
        let rangeMedium = 50;
        let rangeHard = 75;
        let rangeDead = 100;
        switch (lvl) {
            case 4:
                rangeEasy = 125;
                rangeMedium = 250;
                rangeHard = 375;
                rangeDead = 500;
                break;

            case 5:
                rangeEasy = 250;
                rangeMedium = 500;
                rangeHard = 750;
                rangeDead = 1100;
                break;
        
            default:
                break;
        }
        if ((rangeEasy*playersCount) > enemySpecular) {
            actualST = 'poniżej poziomu';
        }
        if ((rangeEasy*playersCount) <= enemySpecular) {
            actualST = 'łatwe';
        }
        if ((rangeMedium*playersCount) <= enemySpecular) {
            actualST = 'przeciętne';
        }
        if ((rangeHard*playersCount) <= enemySpecular) {
            actualST = 'trudne';
        }
        if ((rangeDead*playersCount) <= enemySpecular) {
            actualST = 'zabójcze';
        }
        setST(actualST);
    }, [enemySpecular, playersCount, ST]);

    return (
        <div>
            <div className="btn second-font" onClick={props.refreshEnemList} style={{backgroundColor: 'var(--primary-color)'}}>
                {enemyList}
            </div>
            <div className="btn-left" style={{backgroundColor: 'var(--secondary-color)'}}>
                poziom wyzwania: <br/>
                {ST}
            </div>
            <div className="btn-right" style={{backgroundColor: 'var(--secondary-color)'}}>
                licznik: <br/>
                {expSummary}
            </div>
            <div style={{clear: 'both'}} ></div>
        </div>
    );
}

export default STCounter;