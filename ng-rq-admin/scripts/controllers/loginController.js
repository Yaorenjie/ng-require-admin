define(['app'],function(app){
    app.controller('loginController', ['$scope','$q', '$http','commonService',function($scope,$q,$http,commonService, $state) {
        $scope.userName = "";
        $scope.password = "";
        $(document).ready(function () {
            $("img").unveil();
        });
        $scope.myKeyup = function(e){
            //IE 编码包含在window.event.keyCode中，Firefox或Safari 包含在event.which中
            var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
                login()
            }
        };
        //登录
        $("#loginBtn").on("click",function(){
            //location.href="index.html#/home?token=1111&userName=11";
            login()
        });

        function login(){
            common.mask.loadingRem();
            commonService.login($scope.userName,$scope.password).then(function(data) {  // 调用承诺API获取数据 .resolve
                common.mask.loadingAdd();
                if(data.code == "0"){
                    location.href="index.html#/home?token="+data.data.token+"&username="+data.data.username;
                }
                else if(data.code == "8")
                    common.mask.errorHit("账户或者密码错误")
                else
                    common.mask.errorHit("登录失败")
            }, function(data) {  // 处理错误 .reject
                common.mask.loadingAdd();
                common.mask.errorHit("服务器忙，请刷新")
            });
        };
       /* $scope.loginBtn = function(){
            console.log($scope.username+$scope.password);
            commonService.login($scope.userName,$scope.password).then(function(data) {  // 调用承诺API获取数据 .resolve
                location.href="index.html#/";
            }, function(data) {  // 处理错误 .reject
                common.mask.errorHit("服务器忙，请刷新")
            });
        };*/
    }]);
});