/**
 * Created by reyra on 1/24/2017.
 */


"use strict";

declare let impress: any;

var Myo = require('myo');


class ImpressComponentCtrl {

    static $inject = ['$element'];


    private Myo;

    constructor(private $element) {

        // this.Myo = new Myo();
        $element.attr('id', 'impress')
    }

    $onInit() {
        impress().init();
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
