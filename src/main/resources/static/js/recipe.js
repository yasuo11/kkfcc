
$(document).ready(function () {
    // queryRecipe();
});

function queryRecipe() {
    $.ajax({
        url: '/recipe/queryrecipe.do',
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function (result) {
            if(result.success) {
                data = result.data;
                $("#recipeName").text(data.recipe.name);
                $("#recipeImg").attr("src", data.recipe.image);
                $("#cooknum").text(data.recipe.collectSum);
                $("#desc").html(data.recipe.introduction);
                $("#titleName").text(data.recipe.name);
                $("#userImg").attr("src", data.userImage);
                $("#userName").text(data.userName);
            }
        },
        error: function () {
            alert("异常错误！")
        }
    })
}