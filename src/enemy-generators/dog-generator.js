import RandomHelper from "../helpers/random-helper";

export default class DogGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(6))+8;
        return {
            "type": "dog",
            "name": "Pies",
            "actions": ["bite"],
            "statistics": {
                "xp": 35,
                "kp": 10,
                "currentHp": hp, // 10
                "hp": hp,
                "initiative": this.k(20)+2,
                'pp': 13,
                "strength": 10,
                "dexterity": 15,
                "condition": 12,
                "intelligence": 3,
                "wisdom": 12,
                "charisma": 6,
                "speed": "40ft",
                "i": "advantage w testach ataku z sojusznikiem obok; advantage w testach węchu i słuchu; percepcja +3; skradanie się +4"
            }
        }
    };
}