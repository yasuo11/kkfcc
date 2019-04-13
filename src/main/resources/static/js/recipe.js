/*以下是添加菜谱名称*/
function rpName(){
    $("#rp_1").attr("class","input text ng-pristine ng-valid visible");
    $("#rp_1").focus();
    $("#rpn_1").attr("class","text hint ng-binding ng-hide");
}

function rpName_lose() {
    $("#rp_1").attr("class","input text ng-pristine ng-valid invisible");
    $("#rpn_1").attr("class","text hint ng-binding");
    if ($("#rp_1").val() ==""){
        $("#rpn_1").text("添加菜谱名称");
    } else{
        $("#rpn_1").text($("#rp_1").val());
    }
}
/*以下是添加菜谱描述*/
/*以下是添加用料*/
/*以下是添加菜谱步骤*/

