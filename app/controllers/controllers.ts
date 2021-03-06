/// <reference path='../../typings/all.d.ts' />
import angular = require("angular");
import mainController = require("./main");
import userController = require("./user");
import sidebarController = require("./sidebar");
import mallsAdminController = require("./malls_admin");
export var controllers = angular.module('controllers', ['ngResource', 'infinite-scroll', 'ngRoute'])
    .controller('controllers.main', mainController.MainController)
    .controller('controllers.user', userController.UserController)
    .controller('controllers.malls-admin', mallsAdminController.MallsController)
    .controller('controllers.sidebar', sidebarController.SidebarController);