$.fn.drag = function(options) {
    var x, drag = this, isMove = false, defaults = {
    };
    var options = $.extend(defaults, options);
    var handler = drag.find('.handler');
    var drag_bg = drag.find('.drag_bg');
    var text = drag.find('.drag_text');
    var maxWidth = drag.width() - handler.width();  //能滑动的最大间距

    //鼠标按下时候的x轴的位置
    handler.mousedown(function(e) {
        isMove = true;
        x = e.pageX - parseInt(handler.css('left'), 10);
    });

    //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
    $(document).mousemove(function(e) {
        var _x = e.pageX - x;// _x = e.pageX - (e.pageX - parseInt(handler.css('left'), 10)) = x
        if (isMove) {
            if (_x > 0 && _x <= maxWidth) {
                handler.css({'left': _x});
                drag_bg.css({'width': _x});
            } else if (_x > maxWidth) {  //鼠标指针移动距离达到最大时清空事件
                dragOk();
            }
        }
    }).mouseup(function(e) {
        isMove = false;
        var _x = e.pageX - x;
        if (_x < maxWidth) { //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
            handler.css({'left': 0});
            drag_bg.css({'width': 0});
        }
    });

    //清空事件
    function dragOk() {
        handler.removeClass('handler_bg').addClass('handler_ok_bg');
        text.removeClass('slidetounlock').text('验证通过').css({'color':'#fff'});       //modify

        handler.css({'left': maxWidth});                   // add
        drag_bg.css({'width': maxWidth});                  // add

        handler.unbind('mousedown');
        $(document).unbind('mousemove');
        $(document).unbind('mouseup');
        $('#send_ms').removeAttr('disabled');
    }
};

function ff(event, phoneNumber) {
    event.preventDefault();
    sendSms(phoneNumber);
    time($('#send_ms'));
}

//获取短信验证码
var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttr('disabled');
        o.val("获取动态码");
        wait = 60;
    } else {
        o.attr("disabled", "disabled");
        o.val("重新发送(" + wait + ")");
        wait--;
        setTimeout(function() { time(o) }, 1000)
    }
}

function sendSms(phoneNumber) {
    $.ajax({
        url: '/user/sendsms.do',
        data:{
            phoneNumber: phoneNumber
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function(str) {
            alert(str.msg)
        },
        error: function () {
            alert("异常错误！")
        }
    })
}

function login() {
    $.ajax({
        url: '/user/login.do',
        data:{
            phoneNumber: $(".bb").val(),
            sms: $(".dd").val()
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function(result) {
            if(!result.success)
                alert(result.msg);
            else {
                alert("登录成功！！");
                window.location.href = "/index";
            }
        },
        error: function () {
            alert("异常错误！")
        }
    })
}

function register() {
    $.ajax({
        url: '/user/register.do',
        data:{
            phoneNumber: $("#phone").val(),
            sms: $(".ff").val()
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'GET',
        success: function(result) {
            if(!result.success)
                alert(result.msg);
            else {
                alert("注册成功！！");
                window.location.href = "/index";
            }
        },
        error: function () {
            alert("异常错误！")
        }
    })
}

