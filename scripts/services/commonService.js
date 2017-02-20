define(['app'],function(app){
    app.service('commonService', function($http,$q,ajaxFactory) {
        this.download=function(invoke,type,token,params){
            //下载excle
            var defer = $q.defer();
            var data = "invoke="+invoke
                +"&params="+params
                +"&type="+type
                +"&token="+token;
            return ajaxFactory.post(common.url.downloadExcel,data,defer);
        };
        //上传文件
        this.upload = function(token,type){
            var defer = $q.defer();
            $('#fileUploader').attr("action",common.url.uploadFile+"token="+token+"&type="+type);
            $("#fileUploader").ajaxSubmit({
                success:function(data){
                    defer.resolve(data);
                },
                error:function(data){
                    common.mask.errorHit("服务器忙，请刷新")
                }
            });
            return defer.promise;
        }
        //登录
        this.login = function(username,password){
            var defer = $q.defer();
            var data = "username="+username+"&password="+password;
            return ajaxFactory.post(common.url.login,data,defer);
        };

        // 获取本地token和userName
        var _value = {
            token:"",
            username:"",

        };
        this.getValue = function(){
            _value.token = localStorage.getItem("klwebtoken");
            _value.username = localStorage.getItem("klwebusername");
            return _value;
        };
        this.setValue = function(token,username){
            _value.token = token;
            _value.username = username;
            localStorage.setItem("klwebtoken", token);
            localStorage.setItem("klwebusername", username);
        };

        this.init = function(){

        };
        this.sorting_asc = function(id){
            id.addClass("sorting_asc").removeClass("sorting_desc").siblings().removeClass("sorting_asc").removeClass("sorting_desc");
        };
        this.sorting_desc = function(id){
           id.addClass("sorting_desc").removeClass("sorting_asc").siblings().removeClass("sorting_asc").removeClass("sorting_desc");
        };
    })
});