
$(document).ready(function () {
    recommand();    //轮播图
    //newRecipe();    //新秀菜谱
    //newMenu();      //新秀菜单
    //popularRecipe();  //最近流行
    var proposals = ['百度1', '百度2', '百度3', '百度4','ab1','a2','a3','a4','b1','b2','b3','b4'];
    $('#search-form').autocomplete({
        hints: proposals,
        width: 300,
        height: 30,
        onSubmit: function(text){

        }
    });
});




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

