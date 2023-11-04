import RandomHelper from "../helpers/random-helper";

export default class RusterGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*3)+20;
        return {
            "type": "ruster",
            "name": "Rdzewnik",
            "actions": [],
            "statistics": {
                "xp": 100,
                "kp": 11,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20),
                'pp': 10,
                "strength": 15,
                "dexterity": 11,
                "condition": 14,
                "intelligence": 10,
                "wisdom": 10,
                "charisma": 11,
                "speed": "30ft",
                "i": "2x atak mele; pack tactics;"
            }
        }
    };
}