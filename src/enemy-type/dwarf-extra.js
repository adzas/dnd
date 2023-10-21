import Enemy from "../basic/enemy";

export default class DwarfExtra extends Enemy
{   
    // "actions": ["battleaxe","heavy-crossbow"],
    attackBattleaxe() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 3, 'Obrażenia cięte');
        html += this.generateDmg(this.k(10), 3, '(lub dwiema rękami) Obrażenia cięte');

        return html;
    };
    attackHeavyCrossbow() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(10), 1, 'Obrażenia kłute');
        html += '<br/>100/400ft (20[ ]/80[ ])';

        return html;
    }
}
