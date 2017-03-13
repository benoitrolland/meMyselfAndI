/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class HobbiesComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope'];

    constructor(private $scope) {
    }

    $onInit() {


    }
}


export class HobbiesComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./hobbies.html');
        this.controller = HobbiesComponentCtrl
    }
}
