import Enemy from "../basic/enemy";

export default class BanditCaptain extends Enemy {
    // "actions": ["scimitar","dagger"],
    attackScimitar() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 3, 'Obrażenia cięte');

        return html;
    };
    attackDagger() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(4), 3, 'Obrażenia kłute');
        html += '<br>20/60ft'

        return html;
    };
    attackReaction() {
        return `
            Parowanie: <br>
            jeśli dzierży broń i widzi przeciwnika może dodać 2 do swojej klasy pancerza
        `;
    }
}
