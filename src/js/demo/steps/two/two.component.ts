/**
 * Created by ramor11 on 3/7/2017.
 */

export class TwoComponent implements ng.IComponentOptions {
    // public controller: any;
    public template: string;
    
    constructor() {
        this.template = require('./two.html');
        // this.controller = HomeCtrl
    }
}
