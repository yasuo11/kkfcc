infoHtml = "<div class=\"user-info\">\n" +
    "                    <div class=\"avatar\">\n" +
    "                    <a class=\"image-link\"><img src=\"\" width=\"100\" height=\"60\" id='bphoto'></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"name\">\n" +
    "                    <a  id='userName'>/a>\n" +
    "                    </div>\n" +
    "                    <div class=\"stats\">\n" +
    "                    <span id='recipe_collects'>0</span> 菜谱收藏\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <span id='menu_collects'>0</span> 菜单收藏\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <span id='works'>0</span> 作品\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <span id='cates'>0</span> 菜谱\n" +
    "                    &nbsp;|&nbsp;\n" +
    "                    <div class=\"action\">\n" +
    "                    <a href=\"/create_recipe\" class=\"button\">创建菜谱</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"report-link\">\n" +
    "                    <a rel=\"nofollow\" target=\"_blank\">网上不良信息举报专区</a>\n" +
    "                    </div>\n" +
    "                    </div>";

userPart = "<div class=\"fr\">\n" +
    "                    <div class=\"afterlogin\">\n" +
    "                        <a href=\"/user_count\">\n" +
    "                            <img id=\"user_img\" src=\"\">\n" +
    "                        </a>\n" +
    "                        <ul class=\"afrloginlist\">\n" +
    "                            <li class=\"cao\"><a id=\"chuf1\" href=\"\">我的厨房</a></li>\n" +
    "                            <li class=\"cao\"><a id=\"chuf2\" href=\"\">账号设置</a></li>\n" +
    "                            <li class=\"cao\"><a id=\"chuf3\" href=\"\">我的菜单</a></li>\n" +
    "                            <li class=\"cao\"><a href=\"/user/logout\">退出</a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"afterlogin\" style=\"border-left:1px solid #00F;\">\n" +
    "                        <a href=\"/user_kitchen\">\n" +
    "                            <img src=\"../img/index/door.png\">\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>";

$(document).ready(function () {
    hasLogin();
});

//获取url上的参数
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}


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
                $("#login_change").html(userPart);
                var url =  result.data.image;
                $("#chuf1").attr("href","userkitchen/"+result.data.id);
                $("#chuf2").attr("href","userkitchen/"+result.data.id);
                $("#chuf3").attr("href","userkitchen/"+result.data.id);
                $("#bphoto").attr("src", url);
                $("#user_img").attr("src", url);
                $("#userName").text(result.data.userName + "用户");
                $("#works").text(result.data.works);
                $("#recipe_collects").text(result.data.recipe_collects);
                $("#menu_collects").text(result.data.menu_collects);
                $("#cates").text(result.data.recipes);
            }
        },
        error: function () {
            alert("异常错误！")
        }
    });
}
