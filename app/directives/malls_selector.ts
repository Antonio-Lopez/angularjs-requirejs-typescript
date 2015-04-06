/// <reference path='../../typings/all.d.ts' />

import angular = require("angular");

export var malls: ng.IDirectiveFactory = ()=>{
        return {
            restrict: 'E',
            //transclude: true,
            scope: {
                'value': '=',
                'change': '&'
            },
            templateUrl: 'views/malls_selector.html',
            controller: 'MallsAdminCtrl'
        }
};