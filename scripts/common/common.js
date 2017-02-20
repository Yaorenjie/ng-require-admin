/**
 * Created by Administrator on 2017/1/5.
 */
//var http= "http://120.24.171.173:70/mockjsdata/11/";
//var httpPre= "http://192.168.0.7:8080/admin/";
var httpPre= "/admin";
var http= httpPre+"/sys/web?";
var common = {
    url:{
        uploadFile:httpPre+"/file/fileUpload?",
        /*下载excel*/
        downloadExcel:httpPre+"/file/exportExcel?",

        login:httpPre+"/sys/login?invoke=sysUser&method=login",
        logout:httpPre+"/sys/login?invoke=sysUser&method=logout",
        /*企业用户管理*/
        company:{
            //获取企业用户列表
            get:http+"invoke=company&method=list&type=2",
            //删除企业用户
            delete:http+"invoke=company&method=delete&type=2",
        },
        /*企业管理*/
        business:{
            //获取企业列表
            get:http+"invoke=company&method=list&type=1",
            //删除企业
            delete:http+"invoke=company&method=delete&type=1",
        },
        /*会计师管理*/
        accountant:{
            //获取会计师列表
            get:http+"invoke=accountant&method=list",
            //通过审核
            adopt:http+"invoke=accountant&method=updateStatus",
            //删除企业用户
            delete:http+"invoke=accountant&method=delete",

        },
        /*财务管理*/
        finance:{
            //获取财务列表
            get:http+"invoke=withdrawdeposit&method=list",
            //提现操作
            extract:http+"invoke=withdrawdeposit&method=updateStatus",
        },
        /*订单管理*/
        order:{
            /*快递订单管理*/
            express:{
                //获取快递订单列表
                get:http+"invoke=order&method=list&type=2",
                //删除快递订单
                delete:http+"invoke=order&method=delete&type=2",
            },
            /*服务订单管理*/
            service:{
                //获取服务订单列表
                get:http+"invoke=order&method=list&type=1",
                //删除服务订单
                delete:http+"invoke=order&method=delete&type=1",
            }
        },
        statistics:{
            user:{
                //获取用户统计列表
                get:http+"invoke=operate&method=getUserStatisList",
            },
            share:{
                //获取分享统计列表
                get:http+"invoke=operate&method=list",
                //发放奖励
                releaseReward:http+"invoke=operate&method=releaseReward",
                //配置金额
                allocationAmount:http+"invoke=operate&method=allocationAmount",
                //删除分享统计
                delete:http+"invoke=operate&method=delete",
            }
        },
        feedback:{
            get:http+"invoke=feedback&method=list",
        },
        edition:{
            get:http+"invoke=sysVersion&method=list",
            delete:http+"invoke=sysVersion&method=delete",
            add:http+"invoke=sysVersion&method=add",
        }

    },
    paginator:{
        visiblePages:10  //分页的个数
    },
    init:function(){
        this.mask.init();
    },
    mask:{
        tt_mask : "<div class='tt-mask none' id='tt-mask'>"+
        "<img />"+
        "<p></p>"+
        "</div>",
        load_mask:"<div class='mask none' id='loading-mask'>" +
        "<div class='hint-mask ' >"+
        "<img src='imgs/loading.png' />"+
        "</div>"+
        "</div>",
        dialog_mask:"<div class='alert alert-block alert-error none dialog-mask' id='dialog-mask'>"+
            "<h4 class='alert-heading'><i class='icon-warning-sign'></i>确认</h4>"+
            "<div class='button-set'>"+
            "<button class='btn btn-danger btn-cons' type='button' id='mask-qd'>确定</button>"+
            "<button class='btn btn-white btn-cons' type='button' id='mask-qx'>取消</button>"+
            "</div>"+
            "</div>",
        init:function(){
            this.addBody();
        },
        addBody:function(){
            $("body").append(this.tt_mask).append(this.load_mask).append(this.dialog_mask);
        },
        sucessHint:function(content){//成功提示
            $("#tt-mask").removeClass("none");
            $("#tt-mask img").attr("src","./imgs/succees.png");
            $("#tt-mask p").html(content);
            setTimeout(function () {
                $("#tt-mask").addClass("none");
            }, 1500);
        },
        errorHit:function(content){//错误提示
            $("#tt-mask").removeClass("none");
            $("#tt-mask img").attr("src","./imgs/error.png");
            $("#tt-mask p").html(content);
            setTimeout(function () {
                $("#tt-mask").addClass("none");
            }, 1500);
        },
        loadingRem:function(){
            $("#loading-mask").removeClass("none");
        },
        loadingAdd:function(){
            $("#loading-mask").addClass("none");
        },
        dialogRem:function(){
            $("#dialog-mask").removeClass("none");
        },
        dialogAdd:function(){
            $("#dialog-mask").addClass("none");
        },
    }

    ,
    validate_apk:function(ele){
        //alert((ele.files[0].size/(1024*1024)).toFixed(2));
        var file = ele.value;

        if(!/.(apk|APK)$/.test(file)){
            common.mask.errorHit("请上传apk文件");
            return false;
        }
        return true;
    },
    validate_img:function(ele){
// 返回 KB，保留小数点后两位
        //alert((ele.files[0].size/(1024*1024)).toFixed(2));
        var file = ele.value;

        if(!/.(gif|jpg|jpeg|png|GIF|JPG)$/.test(file)){
            common.mask.errorHit("请上传图片");
            return false;
        }else{
            //alert((ele.files[0].size).toFixed(2));
            //返回Byte(B),保留小数点后两位
            if(((ele.files[0].size).toFixed(2))>=(2*1024*1024)){
                common.mask.errorHit("请上传小于2M的图片");
                return false;
            }
        }
        return true;
    }
};
common.init();