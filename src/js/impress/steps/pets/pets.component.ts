/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class PetsComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope'];

    constructor(private $scope) {
    }

    $onInit() {


    }
}


export class PetsComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./pets.html');
        this.controller = PetsComponentCtrl
    }
}
