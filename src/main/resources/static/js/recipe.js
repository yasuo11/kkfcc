

$(document).ready(function () {
});

/*页面上的输入框尽入囊肿*/
function rp_get(obj){

    $(obj).children(":first").attr("class","input text ng-pristine ng-valid visible");
    $(obj).children(":first").focus();
    $(obj).children(":first").next().attr("class","text hint ng-binding ng-hide");
}

function rp_lose(obj) {
    $(obj).attr("class","input text ng-pristine ng-valid invisible");
    $(obj).next().attr("class","text hint ng-binding");
    if ($(obj).val() ==""){
        $(obj).next().text("添加菜谱名称");
    } else{
        $(obj).next().text($(obj).val());
    }
}
//增加用料
function add_liao() {
    $("#yongliao").after("                       <tr class=\"ng-scope\" id=\"yongliao\">\n" +
        "                            <td class=\"name has-border\">\n" +
        "                                <div class=\"placeholder ng-isolate-scope ng-pristine ng-valid\" type=\"text\" onclick=\"rp_get(this)\"\n" +
        "                                ><input class=\"input text ng-pristine ng-valid invisible\"\n" +
        "                                        style=\"overflow: hidden; overflow-wrap: break-word; resize: none; height: 50px;\" onblur=\"rp_lose(this)\"\n" +
        "                                        type=\"text\"><span\n" +
        "                                        class=\"text hint ng-binding\">食材：如鸡蛋</span></div>\n" +
        "                            </td>\n" +
        "                            <td class=\"unit has-border\">\n" +
        "                                <div class=\"placeholder ng-isolate-scope ng-pristine ng-valid\" type=\"text\" onclick=\"rp_get(this)\"\n" +
        "                                ><input\n" +
        "                                        class=\"input text ng-pristine ng-valid invisible\"\n" +
        "                                        style=\"overflow: hidden; overflow-wrap: break-word; resize: none; height: 50px;\" onblur=\"rp_lose(this)\"\n" +
        "                                        type=\"text\"><span\n" +
        "                                        class=\"text hint ng-binding\">用量：如1只</span></div>\n" +
        "                            </td>\n" +
        "                            <td class=\"remove\" title=\"删除用料\">\n" +
        "                                <img src=\"https://s.chuimg.com/pic/close.png\" onclick=\"del_liao(this)\">\n" +
        "                            </td>\n" +
        "                        </tr>");
}
//删除用料
function del_liao(obj) {
    if ($(obj).parent().parent().parent().find("tr").length == 1 ){
        alert("删了就啥都没了");
    }else {
    $(obj).parent().parent().remove();}
}

//增加步骤
function add_bz() {
    $("#buzhou").after("                        <li class=\"step container ng-scope\" id=\"buzhou\">\n" +
        "                            <div class=\"text ml0\">\n" +
        "                                <div class=\"placeholder ng-isolate-scope ng-pristine ng-valid\" type=\"textarea\" onclick=\"rp_get(this)\"><textarea\n" +
        "                                        ng-model=\"input\" onblur=\"rp_lose(this)\"\n" +
        "                                        class=\"input text ng-pristine ng-valid invisible\"\n" +
        "                                        style=\"overflow: hidden; overflow-wrap: break-word; resize: none; height: 240px;\"></textarea><span\n" +
        "                                        class=\"text hint ng-binding\">点击添加菜谱步骤</span></div>\n" +
        "                            </div>\n" +
        "                            <div class=\"remove float-right\" title=\"删除步骤\">\n" +
        "                                <img src=\"https://s.chuimg.com/pic/close.png\" onclick=\"del_bz(this)\">\n" +
        "                            </div>\n" +
        "                            <div class=\"upload-box\">\n" +
        "                                <div class=\"upload-widget\" data-upload-url=\"/action/upload_pic/\" data-kind=\"1011\"\n" +
        "                                     data-width=\"200\" data-xf=\"bPtb0\" data-default-image=\"\">\n" +
        "                                    <div class=\"upload\">\n" +
        "                              <span class=\"upload-text\">\n" +
        "                                <span class=\"main-title\">+ 上传步骤图</span><br>\n" +
        "                                <span class=\"sub-title\">最佳尺寸：1280 × 1024</span>\n" +
        "                              </span>\n" +
        "                                    </div>\n" +
        "                                    <input class=\"hidden ng-pristine ng-valid\" name=\"ident\">\n" +
        "                                    <input name=\"picurl\" class=\"hidden ng-pristine ng-valid\">\n" +
        "                                    <div class=\"upload-widget-autogen\">\n" +
        "                                        <input name=\"file\" class=\"upload-widget-file\" tabindex=\"-1\" type=\"file\">\n" +
        "\n" +
        "                                        <div class=\"upload-widget-progress\">\n" +
        "                                            <div class=\"upload-widget-stop\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"upload-widget-progress-text\">\n" +
        "                                                <span>上传中•••</span>\n" +
        "                                            </div>\n" +
        "                                            <img src=\"\" class=\"upload-widget-preview\">\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </li>");
}
//删除步骤
function del_bz(obj) {
    if ($(obj).parent().parent().parent().find("li").length == 1 ){
        alert("删了就啥都没了");
    }else {
        $(obj).parent().parent().remove();
    }

}