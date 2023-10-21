import RandomHelper from "../helpers/random-helper";

export default class HobgoblinGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8))+10;
        return {
            "type": "hobgoblin",
            "name": "Hobgoblin",
            "actions": ["sword","long-bow"],
            "statistics": {
                "xp": 100,
                "kp": 18,
                "currentHp": hp, // 11
                "hp": hp,
                "initiative": this.k(20),
                'pp': 10,
                "strength": 13,
                "dexterity": 12,
                "condition": 12,
                "intelligence": 10,
                "wisdom": 10,
                "charisma": 9,
                "speed": "30ft",
                "i": "dodatkowe 2k6 obrażeń w istotę obok hobgoblina, którą atakował w tej turze i znajduje się przy sojuszniku;"
            }
        }
    };
}