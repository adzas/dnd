import RandomHelper from "../helpers/random-helper";

export default class GnollGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*2)+12;
        return {
            "type": "gnoll",
            "name": "Gnoll",
            "actions": ["bite","spear", "long-bow"],
            "statistics": {
                "xp": 100,
                "kp": 15,
                "currentHp": hp, // 22
                "hp": hp,
                "initiative": this.k(20)+2,
                'pp': 10,
                "strength": 14,
                "dexterity": 12,
                "condition": 11,
                "intelligence": 6,
                "wisdom": 10,
                "charisma": 7,
                "speed": "30ft",
                "i": "szał: Jeśli gnoll zmniejszy hp przeciwnika do 0hp atakiem z bliska otrzymuje dodatkową akcją z połową szybkości i może wykonać atak ugryzienia; widzenie w ciemności 60ft 12[ ]"
            }
        }
    };
}