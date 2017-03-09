/**
 * Created by ramor11 on 3/7/2017.
 */

export class ThreeComponent implements ng.IComponentOptions {
    // public controller: any;
    public template: string;
    
    constructor() {
        this.template = require('./three.html');
        // this.controller = HomeCtrl
    }
}
