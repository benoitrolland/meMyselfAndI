/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class WebComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope', 'hotkeys', 'Impress'];
    constructor(private $scope, private hotkeys, private impress) {
    }

    $onInit() {



    }
}


export class WebComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./web.html');
        this.controller = WebComponentCtrl
    }
}
