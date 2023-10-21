import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

function EnemyList(props) {
    const [jsonData, setJsonData] = useState(null);
    const [enemiesGroups, setEnemiesGroups] = useState(null);
    const pathToConfigFile = process.env.REACT_APP_CONFIG_PATH;
  
    useEffect(() => {
      // Pobieramy dane z pliku JSON z użyciem axios
      axios.get(pathToConfigFile)
        .then((response) => {
          setJsonData(response.data); // Ustawiamy dane w stanie komponentu
        })
        .catch((error) => {
          console.error('Błąd podczas pobierania danych JSON:', error);
        });
    }, [pathToConfigFile]);

    useEffect(() => {
        if (null !== jsonData) {
            const enemiesContentGroup = jsonData.group.map((group, index) => (
                <details key={index} className="details">
                    <summary className="btn" style={{backgroundColor: 'var(--gray-color)'}}>
                        {group.name}
                    </summary>
                    <p className="details__p">
                    {group.content.map((enemyElement, k2) => (
                        <button
                        key={k2}
                        className={`btn ${enemyElement.btnClass} btn-sm js-enemy`}
                        style={{backgroundColor: 'var(--second-gray-color)'}}
                        data-type={enemyElement.type}
                        type="button"
                        onClick={() => {props.add(enemyElement)}}
                        >
                        {`${enemyElement.name} - ${enemyElement.EXP}`}
                        </button>
                    ))}
                    </p>
                </details>
            ));
            setEnemiesGroups(enemiesContentGroup);
        }
    }, [jsonData, props]);

    return (
      <>
        {jsonData ? (
          enemiesGroups
        ) : (
          <p>Ładowanie danych...</p>
        )}
      </>
    );

    /**
     * 
    return (
      <div className="battlefieldList">
        {
          jsonData.map((item, index) => (
            <BattlefieldElementList key={index} data={item} />
          ))
        }
      </div>
    );
     */
}

export default EnemyList;