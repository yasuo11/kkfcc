infoHtml = "<div class=\"user-info\">\n" +
    "                    <div class=\"avatar\">\n" +
    "                    <a href=\"#\" class=\"image-link\"><img src=\"\" alt=\"测试_001的厨房\" width=\"100\" height=\"60\" id='bphoto'></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"name\">\n" +
    "                    <a href=\"/user_pur\" id='userName'>/a>\n" +
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
    "                    <a href=\"#\" rel=\"nofollow\" target=\"_blank\">网上不良信息举报专区</a>\n" +
    "                    </div>\n" +
    "                    </div>";

userPart = "<div class=\"fr\">\n" +
    "                    <div class=\"afterlogin\">\n" +
    "                        <a href=\"/user_count\">\n" +
    "                            <img id=\"user_img\" src=\"\">\n" +
    "                        </a>\n" +
    "                        <ul class=\"afrloginlist\">\n" +
    "                            <li class=\"cao\"><a href=\"#\">我的厨房</a></li>\n" +
    "                            <li class=\"cao\"><a href=\"#\">账号设置</a></li>\n" +
    "                            <li class=\"cao\"><a href=\"#\">我的菜单</a></li>\n" +
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
    showOtherWorks();
});

//获取url上的参数
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}

function showOtherWorks() {
    var href=window.location.href;
    var index = href.lastIndexOf("/");
    var recipeId=href.substr(index+1,1);
    $.ajax({
            url: '/work/showOtherWorks?recipeId=' + recipeId,
            data:{
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            type: 'GET',
            success: function(result) {
                if(result.success) {
                    for (var i=0; i<4; i++)
                    {
                        $("#otherWork").after("<div class=\"likemenu\" id=\"likeWork\">\n" +
                            "                <a id=\"workUrl\">\n" +
                            "                    <img src=\"\">\n" +
                            "                    <p class=\"title\" id=\"worktitle\"></p>\n" +
                            "<p>&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"rand\"></span>浏览</p>" +
                            "                </a>\n" +
                            "            </div>");
                        if (!result.data[i]) {
                            $("#worktitle").text(result.data[i].workAuthor + "上传于" + result.data[i].workCreateTime.substring(0, 10));
                            $("#rand").text(Math.ceil(Math.random() * 10));
                            $("#workUrl").attr("href", "/work/details?workUserId=" + result.data[i].workUserId + "&recipeId=" + result.data[i].recipeId);
                        }else{
                            $("#worktitle").text(result.data[i-1].workAuthor + "上传于" + result.data[i-1].workCreateTime.substring(0, 10));
                            $("#rand").text(Math.ceil(Math.random() * 10));
                            $("#workUrl").attr("href", "/work/details?workUserId=" + result.data[i-1].workUserId + "&recipeId=" + result.data[i-1].recipeId);
                        }
                    }
                }
            },
            error: function () {
                alert("异常错误！")
            }
        }
    )

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
