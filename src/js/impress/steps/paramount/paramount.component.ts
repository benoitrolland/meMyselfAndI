/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class ParamountComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope'];
    constructor(private $scope) {
    }

    $onInit() {



    }
}


export class ParamountComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./paramount.html');
        this.controller = ParamountComponentCtrl
    }
}
export class GreetingsComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./greetings.html');
        this.controller = ParamountComponentCtrl
    }
}
