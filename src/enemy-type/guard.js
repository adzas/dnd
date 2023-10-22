import Enemy from "../basic/enemy";

export default class Guard extends Enemy {
    shortInfo() {
        return `włócznia +3: k6+1(kłute) 
            ma tarczę`;
    };
    attackSpear() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 1, 'Obrażenia kłute');

        return html;
    };
}
