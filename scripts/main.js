
require.config({
    //定义基础路径，其他的path等路径是基于基础路径进行引入的。如果不配置，默认为引入requireJS页面所在的位置

    paths:{

        //定义组件名称，以及组件js所在的路径
        "jquery": "lib/jquery203",
        "angular" : "http://cdn.bootcss.com/angular.js/1.5.5/angular.min",
        "angular-route" : "lib/angular-route.min",
        "angular-sanitize" : "lib/angular-sanitize.min",
        "angular-resource":"lib/angular-resource.min",
        "app":"app",
        "router":"router",

        "mainController":"controllers/mainController",
        "contactController":"controllers/contactController",
        "companyListController":"controllers/companyListController",
        "accountantListController":"controllers/accountantListController",
        "businessListController":"controllers/businessListController",
        "financeListController":"controllers/financeListController",
        "expressListController":"controllers/expressListController",
        "serviceListController":"controllers/serviceListController",
        "userStatisticsListController":"controllers/userStatisticsListController",
        "shareStatisticsListController":"controllers/shareStatisticsListController",
        "feedbackListController":"controllers/feedbackListController",
        "editionListController":"controllers/editionListController",
        "editionAddController":"controllers/editionAddController",


        "companyListService":"services/companyListService",
        "accountantListService":"services/accountantListService",
        "businessListService":"services/businessListService",
        "financeListService":"services/financeListService",
        "expressListService":"services/expressListService",
        "serviceListService":"services/serviceListService",
        "userStatisticsListService":"services/userStatisticsListService",
        "shareStatisticsListService":"services/shareStatisticsListService",
        "feedbackListService":"services/feedbackListService",
        "editionListService":"services/editionListService",
        "editionAddService":"services/editionAddService",
        "commonService":"services/commonService",

        "ajaxFactory":"factory/ajax"

    },
    //
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route':{
            deps: ["angular"],
            exports: 'angular-route'
        },
        'angular-sanitize':{
            deps: ["angular"],
            exports: 'angular-sanitize'
        },
        'angular-resource':{
            deps: ["angular"],
            exports: 'angular-resource'
        },

    }
});
require([

    'jquery',
    'angular',
    'angular-route',
    'angular-resource',
    'angular-sanitize',
    'app',
    'router',

    'mainController',
    "contactController",
    "companyListController",
    "accountantListController",
    "businessListController",
    "financeListController",
    "expressListController",
    "serviceListController",
    "userStatisticsListController",
    "shareStatisticsListController",
    "feedbackListController",
    "editionListController",
    "editionAddController",


    "commonService",
    "companyListService",
    "accountantListService",
    "businessListService",
    "financeListService",
    "expressListService",
    "serviceListService",
    "userStatisticsListService",
    "shareStatisticsListService",
    "feedbackListService",
    "editionListService",
    "editionAddService",

    "ajaxFactory"

],function($,angular){
        angular.bootstrap(document,["pinganApp"]);
});

