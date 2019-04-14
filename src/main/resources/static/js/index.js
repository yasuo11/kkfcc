infoHtml = "<div class=\"user-info\">\n" +
    "                    <div class=\"avatar\">\n" +
    "                    <a href=\"/user_kitchen\" class=\"image-link\"><img src=\"\" alt=\"测试_001的厨房\" width=\"100\" height=\"60\" id='bphoto'></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"name\">\n" +
    "                    <a href=\"#\" id='userName'>用户名</a>\n" +
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
    "                    <a href=\"/recipe\" class=\"button\">创建菜谱</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"report-link\">\n" +
    "                    <a href=\"#\" rel=\"nofollow\" target=\"_blank\">网上不良信息举报专区</a>\n" +
    "                    </div>\n" +
    "                    </div>";

userPart = "<div class=\"fr\">\n" +
    "                    <div class=\"afterlogin\">\n" +
    "                        <a href=\"/user_kitchen\">\n" +
    "                            <img id=\"user_img\" src=\"\">\n" +
    "                        </a>\n" +
    "                        <ul class=\"afrloginlist\">\n" +
    "                            <li class=\"cao\"><a  href=\"/user_kitchen\">我的厨房</a></li>\n" +
    "                            <li class=\"cao\"><a href=\"/user_count\">账号设置</a></li>\n" +
    "                            <li class=\"cao\"><a href=\"/user_kitchen\">我的菜单</a></li>\n" +
    "                            <li class=\"cao\"><a href=\"/user/logout\">退出</a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"afterlogin\" style=\"border-left:1px solid #00F;\">\n" +
    "                        <a href=\"/user_kitchen\">\n" +
    "                            <img src=\"http://image.xiuchu.com:8888/door.png\">\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>";

$(document).ready(function () {
    hasLogin();
    recommand();    //轮播图
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
                $("#login_change").html(userPart);
                var url = 'http://img.shengtongcf.com/' + result.data.image;
                $("#bphoto").attr("src", url);
                $("#user_img").attr("src", url);
                $("#userName").val(result.data.loginName);
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
                var data = result.data;
                for(var i = 0; i < data.length; i++) {
                    var href = "/recipe/" + data[i].id;
                    var url = data[i].imageUrl;
                    //$("#ul01").append("<li id=li" + i + ">" + "<a href=" + href + ">" + "<img id=img" + i + "></a>" + "</li>");
                    $("#img" + i).attr("width", '490');
                    $("#img" + i).attr("height", '260');
                    $("#img" + i).attr("src", url);
                    $("#a" + i).attr("href", href);
                }
            }
        },
        error: function () {
            alert("异常错误！")
        }
    })
}

function newRecipe() {

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

function newMenu() {

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

function popularRecipe() {

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

