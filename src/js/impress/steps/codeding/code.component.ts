/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class CodeComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope', 'hotkeys', 'Impress'];
    constructor(private $scope, private hotkeys, private impress) {
    }

    $onInit() {

        this.hotkeys.bindTo(this.$scope)
            .add({
                combo      : '4',
                description: 'Route To Code',
                callback   : () => {
                    let impress = this.impress.getApi();
                    impress.goto(4)
                }
            });

    }
}


export class CodeComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./code.html');
        this.controller = CodeComponentCtrl
    }
}
