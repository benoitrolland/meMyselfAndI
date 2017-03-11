/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class ThreeComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope', 'hotkeys'];

    constructor(private $scope, private hotkeys) {

    }

    $onInit() {

        this.hotkeys.bindTo(this.$scope)
            .add({
                combo      : 's',
                description: 'strikethrough rey',
                callback   : () => {
                    let rey = $('.rey .name');
                    rey.addClass('strikethrough')
                }
            })
    }
}


export class ThreeComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./three.html');
        this.controller = ThreeComponentCtrl
    }
}
