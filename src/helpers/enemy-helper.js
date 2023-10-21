import AlsariphGenerator from "../enemy-generators/alsariph-generator";
import BanditCaptainGenerator from "../enemy-generators/bandit-captain-generator";
import BanditGenerator from "../enemy-generators/bandit-generator";
import HumGenerator from "../enemy-generators/hum-generator";
import KreaturaGenerator from "../enemy-generators/kreatura-generator";
import OmalenGenerator from "../enemy-generators/omalen-generator";
import Bandit from "../enemy-type/bandit";
import BanditCaptain from "../enemy-type/bandit-captain";
import Player from "../enemy-type/Player";
import DwarfGenerator from '../enemy-generators/dwarf-generator';
import Dwarf from '../enemy-type/dwarf';
import ScoutBanditGenerator from '../enemy-generators/scout-bandit-generator';
import ScoutBandit from '../enemy-type/scout-bandit';
import WoodGolemGenerator from '../enemy-generators/wood-golem-generator';
import WoodGolem from '../enemy-type/wood-golem';
import DogGenerator from '../enemy-generators/dog-generator';
import Dog from '../enemy-type/dog';
import GoblinGenerator from '../enemy-generators/goblin-generator';
import Goblin from '../enemy-type/goblin';
import HobgoblinGenerator from '../enemy-generators/hobgoblin-generator';
import Hobgoblin from '../enemy-type/hobgoblin';
import GnollGenerator from '../enemy-generators/gnoll-generator';
import Gnoll from '../enemy-type/gnoll';
import GnollPackLordGenerator from '../enemy-generators/gnoll-pack-lord-generator';
import GnollPackLord from '../enemy-type/gnoll-pack-lord';
import ShadowGenerator from '../enemy-generators/shadow-generator';
import Shadow from '../enemy-type/shadow';
import ThugGenerator from '../enemy-generators/thug-generator';
import Thug from '../enemy-type/thug';
import DwarfExtraGenerator from '../enemy-generators/dwarf-extra-generator';
import DwarfExtra from '../enemy-type/dwarf-extra';
import DarklingGenerator from '../enemy-generators/darkling-generator';
import Darkling from '../enemy-type/darkling';
import BarbarianGenerator from '../enemy-generators/barbarian-generator';
import Barbarian from '../enemy-type/barbarian';
import AnyoneGenerator from '../enemy-generators/anyone-generator';
import Anyone from '../enemy-type/anyone';
import DireWolfGenerator from '../enemy-generators/dire-wolf-generator';
import DireWolf from '../enemy-type/dire-wolf';
import HobgoblinCaptainGenerator from '../enemy-generators/hobgoblin-captain-generator';
import HobgoblinCaptain from '../enemy-type/hobgoblin-captain';
import RotMonsterGenerator from '../enemy-generators/rot-monster-generator';
import RotMonster from '../enemy-type/rot-monster';
import HillGiantGenerator from '../enemy-generators/hill-giant-generator';
import HillGiant from '../enemy-type/hill-giant';

export default class EnemyHelper {
    pathToConfigFile = './storage/config/enemies-config-2308291905.json';
    getRandomEnemyObjectByType(enemyType, customInitiative) {
        const enemyObject = this.getClassObjectKindByTypeEnemy(enemyType, 'getGenerator');

        return enemyObject.getRandomObject(customInitiative);
    };
    getEnemyObject(obj) {
        return this.getClassObjectKindByTypeEnemy(obj.type, 'getEnemyObjectClass', obj);
    };
    /**
     * Returns Enemy class object or Enemy-Generator class object for a entered type value.
     */
    getClassObjectKindByTypeEnemy(enemyType, requestKind = 'getGenerator', object = null) {
        let classObjectReturned = null;
        if ('getEnemyObjectClass' === requestKind) {
            if (typeof object === "undefined" || null === object) {
                console.log('"object" parameter is requered for this requestKind')
            }
        }
        switch (enemyType) {
            case 'bandit':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new BanditGenerator(this.appClass);
                } else {
                    classObjectReturned = new Bandit(object, this.appClass);
                }
                break;

            case 'bandit-captain':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new BanditCaptainGenerator(this.appClass);
                } else {
                    classObjectReturned = new BanditCaptain(object, this.appClass);
                }
                break;

            case 'hum':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HumGenerator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'omalen':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new OmalenGenerator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'kreatura':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new KreaturaGenerator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'alsariph':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new AlsariphGenerator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'dwarf':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DwarfGenerator(this.appClass);
                } else {
                    classObjectReturned = new Dwarf(object, this.appClass);
                }
                break;

            case 'scout-bandit':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new ScoutBanditGenerator(this.appClass);
                } else {
                    classObjectReturned = new ScoutBandit(object, this.appClass);
                }
                break;

            case 'wood-golem':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new WoodGolemGenerator(this.appClass);
                } else {
                    classObjectReturned = new WoodGolem(object, this.appClass);
                }
                break;

            case 'dog':
                if ('getGenerator' === requestKind) {

                    classObjectReturned = new DogGenerator(this.appClass);
                } else {
                    classObjectReturned = new Dog(object, this.appClass);
                }
                break;

            case 'goblin':
                if ('getGenerator' === requestKind) {

                    classObjectReturned = new GoblinGenerator(this.appClass);
                } else {
                    classObjectReturned = new Goblin(object, this.appClass);
                }
                break;
        
            case 'hobgoblin':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HobgoblinGenerator(this.appClass);
                } else {
                    classObjectReturned = new Hobgoblin(object, this.appClass);
                }
                break;

            case 'gnoll':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new GnollGenerator(this.appClass);
                } else {
                    classObjectReturned = new Gnoll(object, this.appClass);
                }
                break;

            case 'gnoll-pack-lord':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new GnollPackLordGenerator(this.appClass);
                } else {
                    classObjectReturned = new GnollPackLord(object, this.appClass);
                }
                break;

            case 'shadow':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new ShadowGenerator(this.appClass);
                } else {
                    classObjectReturned = new Shadow(object, this.appClass);
                }
                break;

            case 'thug':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new ThugGenerator(this.appClass);
                } else {
                    classObjectReturned = new Thug(object, this.appClass);
                }
                break;

            case 'dwarf-extra':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DwarfExtraGenerator(this.appClass);
                } else {
                    classObjectReturned = new DwarfExtra(object, this.appClass);
                }
                break;

            case 'darkling':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DarklingGenerator(this.appClass);
                } else {
                    classObjectReturned = new Darkling(object, this.appClass);
                }
                break;

            case 'barbarian':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new BarbarianGenerator(this.appClass);
                } else {
                    classObjectReturned = new Barbarian(object, this.appClass);
                }
                break;

            case 'anyone':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new AnyoneGenerator(this.appClass);
                } else {
                    classObjectReturned = new Anyone(object, this.appClass);
                }
                break;

            case 'dire-wolf':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DireWolfGenerator(this.appClass);
                } else {
                    classObjectReturned = new DireWolf(object, this.appClass);
                }
                break;

            case 'hobgoblin-captain':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HobgoblinCaptainGenerator(this.appClass);
                } else {
                    classObjectReturned = new HobgoblinCaptain(object, this.appClass);
                }
                break;

            case 'rot-monster':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new RotMonsterGenerator(this.appClass);
                } else {
                    classObjectReturned = new RotMonster(object, this.appClass);
                }
                break;
            case 'hill-giant':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HillGiantGenerator(this.appClass);
                } else {
                    classObjectReturned = new HillGiant(object, this.appClass);
                }
                break;

            default:
                alert('Undefined enemy type: ' + enemyType);
                break;
        }

        return classObjectReturned;
    }
    getAttackName(type) {
        const result = this.getAttackDataFromConfigFile(type);

        return result.name;
    };
    getAttackFunction(type) {
        const result = this.getAttackDataFromConfigFile(type);

        return result.function;
    };
    async getAttackDataFromConfigFile(type) {
        try {
          const response = await fetch(this.pathToConfigFile);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          
          const result = await response.json();
          
          let attackName = 'undefined';
          let attackFunction = 'undefined';
      
          result.attackType.forEach(attack => {
            if (type === attack.type) {
              attackName = attack.name;
              attackFunction = attack.function;
            }
          });
      
          return { name: attackName, function: attackFunction };
        } catch (error) {
          console.error('Error fetching data:', error);
          return { name: 'undefined', function: 'undefined' };
        }
    };
    setObjArrayFromTarget(collapseTarget) {
        const target = document.getElementById(collapseTarget.getAttribute('data-parent-id'));
      
        if (!target) {
          console.error('Target element not found.');
          return null;
        }
      
        const statistics = {
          xp: target.getAttribute('data-xp'),
          kp: target.getAttribute('data-kp'),
          hp: target.getAttribute('data-hp'),
          initiative: target.getAttribute('data-initiative'),
          pp: target.getAttribute('data-pp'),
          strength: target.getAttribute('data-strength'),
          dexterity: target.getAttribute('data-dexterity'),
          condition: target.getAttribute('data-condition'),
          intelligence: target.getAttribute('data-intelligence'),
          wisdom: target.getAttribute('data-wisdom'),
          charisma: target.getAttribute('data-charisma'),
          speed: target.getAttribute('data-speed'),
          i: target.getAttribute('data-i')
        };
      
        return {
          type: target.getAttribute('data-type'),
          name: target.getAttribute('data-name'),
          actions: target.getAttribute('data-actions'),
          statistics
        };
    };
}
