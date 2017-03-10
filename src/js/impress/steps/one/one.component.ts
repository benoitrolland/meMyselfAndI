/**
 * Created by ramor11 on 3/7/2017.
 */

require('./style.less');

export class OneComponent implements ng.IComponentOptions {
    // public controller: any;
    public template: string;

    constructor() {
        this.template = require('./one.html');
        // this.controller = HomeCtrl
    }
}
