/**
 * Created by reyra on 1/24/2017.
 */


"use strict";

declare let impress: any;

// var Myo = require('myo');

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

    static $inject = ['$element', 'Impress'];


    constructor(private $element, private Impress) {
        $element.attr('id', 'impress')
        Impress.Init();
    }

    // $onInit() {
    //
    //     let api = new ImpressService();
    //     api.Init();
    //
    // }


}


export class ImpressComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./impress.component.html');
        this.controller = ImpressComponentCtrl
    }
}
