/**
 * Created by reyra on 7/11/2016.
 */

"use strict";

import * as angular from "angular";


var app = angular.module("app.impress", []);


/**
 * Include your controllers, services, and any additional angular module, into eq modules.
 *
 * @example
 *
 * ```js
 * require('./controllers/mymodulename.controller.js')(dataModule);
 * ```
 *
 * */

import {ImpressComponent} from "./impress.component";
import {OneComponent} from "./steps/one/one.component";
import {TwoComponent} from "./steps/two/two.component";
import {ThreeComponent} from "./steps/three/three.component";

app.component('impress', new ImpressComponent());
app.component('stepOne', new OneComponent());
app.component('stepTwo', new TwoComponent());
app.component('stepThree', new ThreeComponent());

module.exports = app;
