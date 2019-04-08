infoHtml = "<div class=\"user-info\">\n" +
    "                    <div class=\"avatar\">\n" +
    "                    <a href=\"#\" class=\"image-link\"><img src=\"http://freefuck-no5.oss-cn-shanghai.aliyuncs.com/DoubleHappy.jpg?Expires=1554194853&OSSAccessKeyId=TMP.AQFA3eY9FoZiH_T_n3igBt-bXf-TexxlaP8j3LiDCXUfsZ7A9RuigKVZPX9VADAtAhUAuptvBTEfGNBHF15fr936qgCB5SYCFBUXaTq8piXBEoQAxEWqCfsxyZPg&Signature=W5E17J%2B0wukjm2LLOZietT2eMaA%3D\" alt=\"测试_001的厨房\" width=\"80\" height=\"80\"></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"name\">\n" +
    "                    <a href=\"#\">用户名</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"stats\">\n" +
    "                    <span id='collects'>0</span> 收藏\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <span id='works'>0</span> 作品\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <span id='cates'>0</span> 菜谱\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <a href=\"#\">草稿箱</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"action\">\n" +
    "                    <a href=\"#\" class=\"button\">创建菜谱</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"report-link\">\n" +
    "                    <a href=\"#\" rel=\"nofollow\" target=\"_blank\">网上不良信息举报专区</a>\n" +
    "                    </div>\n" +
    "                    </div>";


$(document).ready(function () {
    hasLogin();
    //recommand();    //轮播图
    //newRecipe();    //新秀菜谱
    //newMenu();      //新秀菜单
    //popularRecipe();  //最近流行
});

function hasLogin() {

    $.ajax({
        url: '/user/basic.do',
        data:{
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function(result) {
            if(result.success) {
                $("#login-info").html(infoHtml);
            }
        },
        error: function () {
            alert("异常错误！")
        }
    })
}

function recommand() {

    $.ajax({
        url: '/recipe/recommand.do',
        data:{

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function (result) {
            if(result.success) {

            }
        },
        error: function () {
            alert("异常错误！")
        }
    })
}