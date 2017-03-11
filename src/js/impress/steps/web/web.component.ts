/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class WebComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope', 'hotkeys', 'Impress'];
    constructor(private $scope, private hotkeys, private impress) {
    }

    $onInit() {

        this.hotkeys.bindTo(this.$scope)
            .add({
                combo      : '3',
                description: 'Route To Web',
                callback   : () => {
                    let impress = this.impress.getApi();
                    impress.goto(3)
                }
            });

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
