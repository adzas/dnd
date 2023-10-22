import RandomHelper from "../helpers/random-helper";

export default class GuardGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*2)+2;
        return {
            "type": "guard",
            "name": "Strażnik",
            "actions": ["spear"],
            "statistics": {
                "xp": 25,
                "kp": 16,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20)+1,
                'pp': 12,
                "strength": 13,
                "dexterity": 12,
                "condition": 12,
                "intelligence": 10,
                "wisdom": 11,
                "charisma": 10,
                "speed": "30ft",
                "i": "może użyć dwuch rąk aby zaatakować włócznią"
            }
        }
    };
}