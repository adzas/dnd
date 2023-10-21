import RandomHelper from "../helpers/random-helper";

export default class BanditGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(6))+8;
        return {
            "type": "bandit",
            "name": "Bandyta",
            "actions": ["light-crossbow","sword"],
            "statistics": {
                "xp": 25,
                "kp": 12,
                "currentHp": hp,
                "hp": hp, // 11
                "initiative": this.k(20),
                'pp': 10,
                "strength": 11,
                "dexterity": 12,
                "condition": 12,
                "intelligence": 10,
                "wisdom": 10,
                "charisma": 10,
                "speed": "30ft",
                "i": ""
            }
        }
    };
}