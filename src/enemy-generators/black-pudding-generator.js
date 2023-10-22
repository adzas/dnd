import RandomHelper from "../helpers/random-helper";

export default class BlackPuddingGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(10)*10)+30;
        return {
            "type": "black-pudding",
            "name": "Czarny pudding",
            "actions": ["fake-nugget"],
            "statistics": {
                "xp": 1100,
                "kp": 7,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20),
                'pp': 8,
                "strength": 16,
                "dexterity": 5,
                "condition": 16,
                "intelligence": 1,
                "wisdom": 6,
                "charisma": 1,
                "speed": "20ft",
                "i": `+5 do trafienia: k6+3(obuch) + 4k8(kwas); -1 niemagiczny pancerz(10KP=zniszczony); 1k8(kwas) od dotknięcia lub ataku; niemagiczna broń koroduje
                broń niemagiczna, metalowa i drewniana koroduje, dostaje -1 do rzutów na obrażenia (-5=zniszczona); amunicja niemagiczna przepada po zadaniu obrażeń;
                reakcja: podział: może się podzielić po otrzymaniu obrażeń od elektryczności lub ciętych (minimum 10PW)`
            }
        }
    };
}