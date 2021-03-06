define(function(require) {
    var $ = require("jquery");
    // 交换类
    $.fn.extend({
        replaceClass: function(cls1, cls2) {
            this.removeClass(cls1);
            this.addClass(cls2);
        }
    });

    // Get cookie
    function getCookie(cookieName) {
        var re = new RegExp(cookieName + '=(.+?)(?:;|$)');
        value = re.exec(document.cookie)
        if (value){
            return value[1];
        }
        return "";
    }

    // 重新计算并在catalogry处显示未完成时间数
    // classType: top-class second-class
    // classid: 对应的classid
    // num: 正数为增加，父数位减少
    function modifyTodoCount(classType, classid, num) {
        function recount($item) {
            var count = $item.text().slice(1, -1);
            var newCount = parseInt(count) + num;
            $item.text("("+newCount+")")
        }
        if (classType == "top-class") {
            var $top = $(".top-class[pk="+classid+"]").find(".todo-count");
            recount($top);
        }
        else if (classType == "second-class") {
            var $secondItem = $(".second-class[pk="+classid+"]");
            var $second = $secondItem.find(".todo-count");
            var $top = $secondItem.parent().prev().find(".todo-count");
            recount($top);
            recount($second);
        }
        // 任务列表
        var $total = $(".header .todo-count");
        recount($total);
    }

    // Jquery html 转义
    function htmlEncode(value) {  
      return $('<div/>').text(value).html();  
    } 

    function htmlDecode(value) {  
      return $('<div/>').html(value).text();  
    }

    // 去除字符串中的html标签
    function removeHtmlTag(value) {
        return value.replace(/<\/?.+?>/g,"");
    }

    return {
        getCookie: getCookie,
        modifyTodoCount: modifyTodoCount,
        removeHtmlTag: removeHtmlTag
    };
});