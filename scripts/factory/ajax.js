/**
 * Created by Administrator on 2017/2/5.
 */
define(['app'],function(app){
    app.factory('ajaxFactory', function($http,$q) {
        var ajax = {};
            ajax.post = function(url,data,defer){
                $.ajax({
                    url: url,
                    type: 'post',
                    data: data,
                    dataType: 'json',
                    success: function (data) {
                        defer.resolve(data);
                    }, error: function (data) {
                        common.mask.errorHit("服务器忙，请刷新")
                    }
                });
                return defer.promise;
            };
        return ajax;
    })
});