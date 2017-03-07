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

import {HomeComponent} from "./components/home.component";

app.component('eqHome', new HomeComponent());

module.exports = app;
