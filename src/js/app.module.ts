'use strict';


import * as angular from "angular";

require("css/styles.less");

export let app: any = angular.module('app', ['ngSanitize'
    , require('./impress/module').name
]);
