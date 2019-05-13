
$(document).ready(function () {
    user_photo();
});

function user_photo() {
    $.ajax({
        url: '/user/userPhoto.do',
        data:{
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function(result) {
            if(result.success) {
                $("#photo").attr("src", result.data);
            }else {
                alert("请先登录！");
                window.location.href = "/login";
            }
        },
        error: function () {

            alert("异常错误！")

        }
    })
}

