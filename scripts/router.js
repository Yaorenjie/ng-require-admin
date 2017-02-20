/**
 * 路由
 */
define(['app'], function(app){

    return app.config(['$routeProvider',function($routeProvider) {
        $routeProvider

        // home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
            // about page
            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })

            // contact page
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            })

            // 企业用户列表页面
            .when('/companyList', {
                templateUrl: 'pages/companyList.html',
                controller: 'companyListController'
            })
            // 会计师用户列表页面
            .when('/businessList', {
                templateUrl: 'pages/businessList.html',
                controller: 'businessListController'
            })

            // 会计师用户列表页面
            .when('/accountantList', {
                templateUrl: 'pages/accountantList.html',
                controller: 'accountantListController'
            })
            // 财务列表页面
            .when('/financeList', {
                templateUrl: 'pages/financeList.html',
                controller: 'financeListController'
            })
            // 快递订单列表页面
            .when('/expressList', {
                templateUrl: 'pages/expressList.html',
                controller: 'expressListController'
            })
            // 服务订单列表页面
            .when('/serviceList', {
                templateUrl: 'pages/serviceList.html',
                controller: 'serviceListController'
            })

            // 用户统计列表页面
            .when('/userStatisticsList', {
                templateUrl: 'pages/userStatisticsList.html',
                controller: 'userStatisticsListController'
            })
            // 分享统计列表页面
            .when('/shareStatisticsList', {
                templateUrl: 'pages/shareStatisticsList.html',
                controller: 'shareStatisticsListController'
            })
            // 配置金额页面
            .when('/allocationAmount', {
                templateUrl: 'pages/allocationAmount.html',
                controller: 'allocationAmountController'
            })
            // 意见反馈列表页面
            .when('/feedbackList', {
                templateUrl: 'pages/feedbackList.html',
                controller: 'feedbackListController'
            })
            // 版本列表页面
            .when('/editionList', {
                templateUrl: 'pages/editionList.html',
                controller: 'editionListController'
            })
            // 添加版本页面
            .when('/editionAdd', {
                templateUrl: 'pages/editionAdd.html',
                controller: 'editionAddController'
            })

            .otherwise({redirectTo:'/'});

        //$locationProvider.html5Mode(true).hashPrefix('!');

    }])


})