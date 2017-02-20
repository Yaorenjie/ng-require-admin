/**
 * 建立angular.module
 */
define([
    'angular',
], function (angular) {
    var app = angular.module('pinganApp', ['ngRoute','ngResource']);
    return app;
});
