/**
 * Created by reyra on 1/24/2017.
 */


"use strict";

declare let impress: any;
export class ImpressService {
    static instance: ImpressService;
    private api;

    constructor() {
    }

    Init() {
        this.api = impress();
        this.api.init();
    }

    getApi() {
        return this.api;
    }
}


class ImpressComponentCtrl {


    static $inject: Array<string> = ['$element', '$scope', 'hotkeys', 'Impress'];

    constructor(private $element, private $scope, private hotkeys, private Impress) {
        $element.attr('id', 'impress');
        Impress.Init();
    }


    $onInit() {
        let impress = this.Impress.getApi();

        this.hotkeys.bindTo(this.$scope)
            .add({
                combo      : '1',
                description: 'Route To 1',
                callback   : () => {
                    impress.goto(0)
                }
            })
            .add({
                combo      : '2',
                description: 'Route To 2',
                callback   : () => {
                    impress.goto(2)
                }
            })
            .add({
                combo      : '3',
                description: 'Route To 3',
                callback   : () => {
                    impress.goto(3)
                }
            })
            .add({
                combo      : '4',
                description: 'Route To 4',
                callback   : () => {
                    impress.goto(4)
                }
            })
            .add({
                combo      : '5',
                description: 'Route To 5',
                callback   : () => {
                    impress.goto(5)
                }
            })
            .add({
                combo      : '6',
                description: 'Route To 6',
                callback   : () => {
                    impress.goto(6)
                }
            })
            .add({
                combo      : '7',
                description: 'Route To 7',
                callback   : () => {
                    impress.goto(7)
                }
            })
            .add({
                combo      : '8',
                description: 'Route To 8',
                callback   : () => {
                    impress.goto(8)
                }
            })
            .add({
                combo      : '9',
                description: 'Route To 9',
                callback   : () => {
                    impress.goto(9)
                }
            })
            .add({
                combo      : '0',
                description: 'Route To Overview',
                callback   : () => {
                    impress.goto("overview")
                }
            })

    }


}


export class ImpressComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./impress.component.html');
        this.controller = ImpressComponentCtrl
    }
}
