/**
 * Created by ramor11 on 3/7/2017.
 */

require('./style.less');

export class ReyComponent implements ng.IComponentOptions {
    public template: string;

    constructor() {
        this.template = require('./two.html');
    }
}
