
export default class BattlefieldStorage {
    currentGameStorage = 'gameStorage';
    gameProcess = 'gameProcess';
    players = ['alsariph', 'omalen', 'hum', 'kreatura'];
    store(obj) {
        let bfStorage = [];
        const currentBfStorage = this.get();
        const isPlayer = this.players.includes(obj.type);
        obj.lp = 0;
        if (null === currentBfStorage) {
            obj.id = 1;
            bfStorage[0] = obj;
        } else {
            obj.id = parseInt(currentBfStorage.length+1);
            bfStorage = currentBfStorage;
            bfStorage[currentBfStorage.length] = obj;
        }
        const newBfStorage = this.reindexContent(bfStorage);
        const counterLpEnemys = this.getEnemyCounter(newBfStorage);
        if (!isPlayer) {
            obj.lp = counterLpEnemys;
        }
        obj.label = '---';
        this.saveAll(newBfStorage);
    };
    get() {
        const getStorageFB = JSON.parse(localStorage.getItem(this.currentGameStorage));

        return getStorageFB;
    };
    getST() {
        let st = 0;
        let content = this.get();
        for (let k in content) {
            if (!this.players.includes(content[k].type)) {
                st += content[k].statistics.xp;
            }
        }

        return st;
    };
    clearBFStorage() {
        this.saveAll(null);
    };
    clearLocalStorage() {
        localStorage.clear();
    };
    moveUp(element_id) {
        let new_content = [];
        if (1 === parseInt(element_id)) {
            const content = this.get();
            let new_first_element = this.getElementById(element_id, content);
            new_first_element.id = 0;
            new_content[0] = new_first_element;
            let i = 1;
            const reindex_content = this.reindexContent(content, 1);
            for(let k in reindex_content) {
                if (parseInt(new_first_element.id) === parseInt(reindex_content[k].id)) {
                    console.log('pomiń: ');
                    console.log(reindex_content[k]);
                } else {
                    new_content[i++] = reindex_content[k];
                }
            }
        } else if (1 < parseInt(element_id)) {
            const content = this.get();
            const target = this.getElementById(element_id, content);
            let i = 0;
            for(let k in content) {
                if (parseInt(target.id) === parseInt(content[k].id)) {
                    console.log('pomiń: ');
                    console.log(content[k]);
                } else {
                    if (parseInt(content[k].id) === parseInt(target.id-1)) {
                        new_content[i++] = target;
                    }
                    new_content[i++] = content[k];
                }
            }
        }
        if (0 < new_content.length) {
            this.clearBFStorage();
            let new_indexint_content = this.reindexContent(new_content);
            new_indexint_content.sort(this.sortById);
            this.saveAll(new_indexint_content);
        }
    };
    sortById (a, b) {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
        return 0;
    };
    sortByIni(a, b) {
        if ( a.statistics.initiative < b.statistics.initiative ){
          return 1;
        }
        if ( a.statistics.initiative > b.statistics.initiative ){
          return -1;
        }
        return 0;
    };
    saveAll(data) {
        localStorage.setItem(this.currentGameStorage, JSON.stringify(data));
    };
    deleteElement(id) {
        const content = this.get();
        this.clearBFStorage();
        let new_contetnt = [];
        let i = 0;
        for (let k in content) {
            if (parseInt(id) !== parseInt(content[k].id)) {
                new_contetnt[i++] = content[k];
            }
        }
        this.saveAll(this.reindexContent(new_contetnt));
    }
    reindexContent(objects, plus = 0) {
        let content = [];
        for (let k in objects) {
            objects[k].id = parseInt(k) + parseInt(plus);
            content[k] = objects[k];
        }
        return content;
    };
    getElementById(id, from) {
        const target = from.filter(obj => {
            return obj.id === id;
        });
        return target[0];
    };
    storeLabelElementValue(id, value) {
        let stored = false;
        let content = this.get();
        this.clearBFStorage();
        for (let k in content) {
            if (parseInt(id) === parseInt(content[k].id)) {
                content[k].label = value;
                stored = true;
            }
        }
        this.saveAll(this.reindexContent(content));

        return stored;
    };
    getEnemyCounter(data) {
        let counter = 0;
        for (let i in data) {
            if (!this.players.includes(data[i].type)) {
                counter++;
            }
        }
        return counter;
    };
    previewGameSet(key) {
        const savedSets = this.loadGameSet(key);
        console.log('savedSets', savedSets);

        let content = '';
        savedSets.forEach(elem => {
            console.log('elem', elem);
            content += `${elem.name}: ${elem.label}</br>`;
        });

        return content;
    };
    saveSettings(key) {
        const currentGameStorage = JSON.parse(localStorage.getItem(this.currentGameStorage));
        this.saveGameSet(key, currentGameStorage);

        return 'Zapisano set '+key;
    };
    loadSettings(key) {
        const savedSets = this.loadGameSet(key);
        this.saveAll(savedSets);
    };
    loadGameSet(key) {
        if (1 === key) {
            return JSON.parse(localStorage.getItem(this.firstGameSet));
        } else {
            return JSON.parse(localStorage.getItem(this.secondGameSet));
        }
    };
    saveGameSet(key, data) {
        if (1 === key) {
            this.saveGameSettingsInLocalStorage(this.firstGameSet, data);
        } else {
            this.saveGameSettingsInLocalStorage(this.secondGameSet, data);
        }
    };
    saveSecondGameSet(data) {
        this.saveGameSettings(this.secondGameSet, data);
    };
    saveGameSettingsInLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    /** function by client */
    sortByInitiative() {
        let bfContent = this.get();
        this.clearBFStorage();
        let newBfContent = bfContent.sort(this.sortByIni);
        this.saveAll(newBfContent);
    }
    getGameProcess() {
        return JSON.parse(localStorage.getItem(this.gameProcess));
    }
    setGameProcess(data) {
        localStorage.setItem(this.gameProcess, JSON.stringify(data));
    }
    getLastActiveID() {
        let maxID = 0;
        let bfContent = this.get();
        if (null === bfContent) {
            return null;
        }
        const newBfContent = bfContent.sort(this.sortById);
        newBfContent.forEach(e => {
            if (0 < e.statistics.hp) {
                if (e.id > maxID) {
                    maxID = e.id;
                }
            }
        });
        
        return maxID;
    }
    getFirstActiveID() {
        let minID = 0;
        let bfContent = this.get();
        if (null === bfContent) {
            return null;
        }
        const newBfContent = bfContent.sort(this.sortById);
        newBfContent.forEach(e => {
            if (0 < e.statistics.hp) {
                if (e.id < minID) {
                    minID = e.id;
                }
            }
        });
        
        return minID;
    }
}
