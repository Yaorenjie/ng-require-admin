/**
 * Created by Administrator on 2017/1/4.
 */
define(['app','companyListService'],function(app){
    app.controller('companyListController', ['$scope','$q', '$http','companyListService','commonService',function($scope,$q,$http,companyListService,commonService) {
        $scope.pageClass = 'page-about';
        $scope.value = "";
        $scope.id="";
        $scope.index="";
        $scope.sort_key="";
        $scope.sort_type="";
        //删除企业
        $scope.removeCompany = function(id,index){
            common.mask.dialogRem();
            $scope.id=id;
            $scope.index=index;
        };

        $("body").on("click","#mask-qd",function(){
            common.mask.loadingRem();
            companyListService.removeCompany( $scope.id,commonService.getValue().token).then(function(data) {  // 调用承诺API获取数据 .resolve
                common.mask.dialogAdd();
                common.mask.loadingAdd();
                if(data.code == 0){
                    $scope.list.splice($scope.index,1);
                    common.mask.sucessHint("删除成功");
                }else{
                    common.mask.errorHit("删除失败")
                }

            }, function(data) {  // 处理错误 .reject
                common.mask.dialogAdd();
                common.mask.loadingAdd();
                common.mask.errorHit("服务器忙，请刷新");
            });
        });

        //下载企业
        /*$scope.download = function(id){
            commonService.download('company','2',commonService.getValue().token).then(function(data) {  // 调用承诺API获取数据 .resolve

            }, function(data) {  // 处理错误 .reject
                common.mask.errorHit("服务器忙，请刷新")
            });
        };*/
        $scope.downUrl =  common.url.downloadExcel+"invoke=company&type=2&token="+commonService.getValue().token;
        //条件查询企业
        $scope.search = function(data){
            searchCompany();
        };

        var searchCompany = function(data){
            //获取公司列表
            common.mask.loadingRem();
            companyListService.getCompanyList($scope.value,0,common.paginator.visiblePages,commonService.getValue().token,$scope.sort_key,$scope.sort_type).then(function(data) {  // 调用承诺API获取数据 .resolve
                if(data == "" || data == null || data == "null"){
                    location.href="login.html";
                }
                common.mask.loadingAdd();
                $scope.list = data.data.data;
                $.jqPaginator( '#pagination',{
                    totalPages : Math.ceil(data.data.count/ common.paginator.visiblePages),
                    visiblePages : common.paginator.visiblePages,
                    currentPage : 1,
                    prev : '<li class="prev"><a href="javascript:;">上一页</a></li>',
                    next : '<li class="next"><a href="javascript:;">下一页</a></li>',
                    page : '<li class="page"><a href="javascript:;">{{page}}</a></li>',
                    onPageChange : function(num,type) {
                        if (type == "change") {
                            common.mask.loadingRem();
                            companyListService.getCompanyList($scope.value,(num-1)*common.paginator.visiblePages,common.paginator.visiblePages,commonService.getValue().token,$scope.sort_key,$scope.sort_type).then(function(data) {
                                if(data == ""){
                                    location.href="login.html";
                                }
                                common.mask.loadingAdd();
                                $scope.list = data.data.data;
                            }, function(data) {  // 处理错误 .reject
                                location.href="login.html";
                            });
                        }
                    }
                });
            }, function(data) {  // 处理错误 .reject
                location.href="login.html";
            });
        };
        //第一次进入
        searchCompany();
        commonService.init();
        //点击排序

        var sorting_orders = true;
        var sorting_createtime = true;
        $scope.sortingPx=function(type){
            switch (type) {
                case "orders":
                    $scope.sort_key = "orders";
                    if (sorting_orders) {
                        $scope.sort_type = "asc";
                        $("#orders").addClass("sorting_asc").removeClass("sorting_desc").siblings().removeClass("sorting_asc").removeClass("sorting_desc");
                    } else {
                        $scope.sort_type = "desc";
                        $("#orders").addClass("sorting_desc").removeClass("sorting_asc").siblings().removeClass("sorting_asc").removeClass("sorting_desc");
                    }
                    sorting_orders = !sorting_orders;
                    searchCompany();
                    break;
                case "createtime":
                    $scope.sort_key = "createtime";
                    if (sorting_createtime) {
                        $scope.sort_type = "asc";
                        $("#createtime").addClass("sorting_asc").removeClass("sorting_desc").siblings().removeClass("sorting_asc").removeClass("sorting_desc");
                    } else {
                        $scope.sort_type = "desc";
                        $("#createtime").addClass("sorting_desc").removeClass("sorting_asc").siblings().removeClass("sorting_asc").removeClass("sorting_desc");
                    }
                    sorting_createtime = !sorting_createtime;
                    searchCompany();
                    break;
            }
        }

    }]);
});