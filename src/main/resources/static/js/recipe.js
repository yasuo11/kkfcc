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
function rpDepict() {
    $("#rpDepict_t").attr("class","input text ng-pristine ng-valid visible");
    $("#rpDepict_t").focus();
    $("#rpDepict_s").attr("class","text hint ng-binding ng-hide");
}
function rpDepict_lose() {
    $("#rpDepict_t").attr("class","input text ng-pristine ng-valid invisible");
    $("#rpDepict_s").attr("class","text hint ng-binding");
    if ($("#rpDepict_t").val() ==""){
        $("#rpDepict_s").text("添加菜谱名称");
    } else{
        $("#rpDepict_s").text($("#rpDepict_t").val());
    }
}
/*以下是添加用料*/

/*以下是添加菜谱步骤*/


function eventget() {
   var a= $("#tb td div").children().length;    //针对div操作       有两个div每个div是2个儿子 所以是4个
   alert(a);
}

//我悟了，这些个都是一个div下有两个子元素，那我直接根据给div控制不通过id来控制事件即可：
//div被点击触发儿子的操作，儿子不被点在来一个。