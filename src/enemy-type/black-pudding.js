import Enemy from "../basic/enemy";

export default class BlackPudding extends Enemy {
    shortInfo() {
        return '+4: 2k6+2(nekr) -k4(STR)';
    };
    attackFakeNugget() {
        // k6+3(obuch) + 4k8(kwas); -1 niemagiczny pancerz(10KP=zniszczony);
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.roll(6, 1), 3, 'obuch');
        html += this.generateDmg(this.roll(8, 4), 0, 'kwas');
        html += '<br/>-1 KP niemagiczny pancerz (10KP = zniszczony)';

        return html;
    };
    renderInformation() {
        let html = '';
        const informations = this.i.split(';');
        for (let k in informations) {
            html += informations[k]+'</br></br>';
        }
        return html;
    }
}
