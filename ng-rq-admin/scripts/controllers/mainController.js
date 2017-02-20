/**
 * Created by Feng on 2016/11/16.
 */
define(['app'],function(app){
    app.controller('mainController', ['$scope','$location','commonService',function($scope,$location,commonService) {//方法2定义全局变量

       if(getQueryString("token") != null){
           commonService.setValue(getQueryString("token"),getQueryString("username"));
       }
        location.href="#/";
        if(commonService.getValue().token == "" || commonService.getValue().token == null || commonService.getValue().token == "null"){
            location.href="login.html";
        }
        function getQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            if(window.location.hash.split("?").length == 1 ){
                return null;
            }
            var r = window.location.hash.split("?")[1].match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        };


    }]);
});