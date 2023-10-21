
import RandomHelper from "../helpers/random-helper";

export default class DieRoll extends RandomHelper {
    test(plus, attackMethod) {
        const t1 = this.k(20);
        const t2 = this.k(20);
        let value = t1;
        let html = 'test: ';
        if ('disadvantage' === attackMethod) {
            if (t1 > t2) {
                html += `${t1+plus}/<b>${t2+plus}</b>`;
                value = t2;
            } else {
                html += `<b>${t1+plus}</b>/${t2+plus}`;
                value = t1;
            }
        } else if ('advantage' === attackMethod) {
            if (t1 > t2) {
                html += `<b>${t1+plus}</b>/${t2+plus}`;
                value = t1;
            } else {
                html += `${t1+plus}/<b>${t2+plus}</b>`;
                value = t2;
            }
        } else {
            html += `${t1}+${plus} = <b>${t1+plus}</b>`;
            value = t1;
        }
        
        return {
            "html": html+'</br>',
            "value": value
        };
    }
}
