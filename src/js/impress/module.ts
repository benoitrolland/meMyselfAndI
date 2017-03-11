/**
 * Created by reyra on 7/11/2016.
 */

"use strict";

import * as angular from "angular";


var app = angular.module("app.impress", ["cfp.hotkeys"]);


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

import {ImpressComponent, ImpressService} from "./impress.component";
import {ListComponent} from "./steps/list/list.component";
import {ReyComponent} from "./steps/rey/rey.component";
import {PRComponent} from "./steps/pr/pr.component";
import {WebComponent} from "./steps/web/web.component";

app.component('impress', new ImpressComponent());
app.component('stepList', new ListComponent());

app.service('Impress', ImpressService);

app.component('stepRey', new ReyComponent());
app.component('stepPr', new PRComponent());
app.component('stepWeb', new WebComponent());

module.exports = app;
