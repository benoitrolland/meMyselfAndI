/**
 * Created by reyra on 1/24/2017.
 */


"use strict";

declare let impress:any;

var Myo = require('myo');


class HomeCtrl {
    
    static $inject = ['$scope'];
    
    
    private Myo;
    
    constructor(private $scope) {
        
        // this.Myo = new Myo();
    }
    
    $onInit(){
        if ("ontouchstart" in document.documentElement) {
            document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
        }
        
        impress().init();
    
        
        
    }
    
    
}

require('./styles.less');


export class HomeComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    
    constructor() {
        this.template = require('./home.component.html');
        this.controller = HomeCtrl
    }
}
