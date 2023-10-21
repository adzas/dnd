import RandomHelper from "../helpers/random-helper";

export default class HumGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        const hp = 25;
        return {
            "type": "hum",
            "name": "Hum",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 14,
                "hp": hp,
                "currentHp": hp,
                "initiative": initiative,
                'pp': 9,
                "strength": 8,
                "dexterity": 17,
                "condition": 14,
                "intelligence": 15,
                "wisdom": 8,
                "charisma": 12,
                "speed": "30ft",
                "i": "16kg; 62cm wzrostu; 16 lat; zasięg widzenia: 18m 60ft 12[ ]; widzenie w ciemności: ; intuicja pasywna: 9"
            }
        }
    };
}