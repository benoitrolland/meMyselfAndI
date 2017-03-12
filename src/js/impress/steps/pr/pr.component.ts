/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');


class PrComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope', 'hotkeys', 'Impress'];
    constructor(private $scope, private hotkeys, private impress) {
    }

    $onInit() {



    }
}
export class PRComponent implements ng.IComponentOptions {
    public template: string;
    public controller: any;

    constructor() {

        this.template = require('./pr.html');
        this.controller = PrComponentCtrl;
    }
}
