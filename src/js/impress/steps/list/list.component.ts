/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class ListComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$scope', 'hotkeys'];

    constructor(private $scope, private hotkeys) {

    }

    $onInit() {

        this.hotkeys.bindTo(this.$scope)
        //REY
            .add({
                combo      : 'a',
                description: 'Enter rey',
                callback   : () => {
                    let rey = $('.rey .name');
                    rey.addClass('enter')
                }
            })
            .add({
                combo      : 'j',
                description: 'Done rey',
                callback   : () => {
                    let rey = $('.rey .name');
                    rey.addClass('strikethrough')
                }
            })
            //JOB
            .add({
                combo      : 's',
                description: 'Enter rey',
                callback   : () => {
                    let rey = $('.rey .job');
                    rey.addClass('enter')
                }
            })
            .add({
                combo      : 'k',
                description: 'Done job',
                callback   : () => {
                    let rey = $('.rey .job');
                    rey.addClass('strikethrough')
                }
            })
            //GITHUB
            .add({
                combo      : 'd',
                description: 'Enter Github',
                callback   : () => {
                    let rey = $('.rey .github');
                    rey.addClass('enter')
                }
            })
            .add({
                combo      : 'l',
                description: 'Done github',
                callback   : () => {
                    let rey = $('.rey .github');
                    rey.addClass('strikethrough')
                }
            })

            //CARS
            .add({
                combo      : 'f',
                description: 'Enter Cars',
                callback   : () => {
                    let rey = $('.rey .cars');
                    rey.addClass('enter')
                }
            })
            .add({
                combo      : ';',
                description: 'Done Cars',
                callback   : () => {
                    let rey = $('.rey .cars');
                    rey.addClass('strikethrough')
                }
            })

            //DOGS
            .add({
                combo      : 'g',
                description: 'Enter pets',
                callback   : () => {
                    let rey = $('.rey .pets');
                    rey.addClass('enter')
                }
            })
            .add({
                combo      : '\'',
                description: 'Done pets',
                callback   : () => {
                    let rey = $('.rey .pets');
                    rey.addClass('strikethrough')
                }
            })

    }
}


export class ListComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./list.html');
        this.controller = ListComponentCtrl
    }
}
