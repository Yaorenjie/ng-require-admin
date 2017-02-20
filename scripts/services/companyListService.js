/**
 * Created by Administrator on 2017/1/4.
 */
define(['app'],function(app){
        app.service('companyListService', function ($http,$q,ajaxFactory) {
                this.getCompanyList = function(params,begin,size,token,sort_key,sort_type){
                    var defer = $q.defer();
                    //获取公司列表的ajax
                    var data = "begin="+begin
                        +"&params="+params
                        +"&size="+size
                        +"&token="+token
                        +"&sort_key="+sort_key
                        +"&sort_type="+sort_type;
                    return ajaxFactory.post(common.url.company.get,data,defer);
                };
            this.removeCompany = function(id,token){
                    var defer = $q.defer();
                    //删除企业的ajax
                var data = "id="+id
                    +"&token="+token;
                return ajaxFactory.post(common.url.company.delete,data,defer);
                }


        })
});