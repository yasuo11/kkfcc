<%--
  Created by IntelliJ IDEA.
  User: 12148
  Date: 2019/3/6
  Time: 23:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>流行菜单 - 秀厨网</title>
    <link rel="stylesheet" type="text/css" href="../css/main.css"/>
    <link rel="stylesheet" type="text/css" href="../css/popular_menu.css"/>
</head>
<body>
<div class="header"><!--------------头部---------------->
    <div class="conwidth">
        <h1 class="fl"><a href="">秀<span>厨网</span></a></h1>
        <div class="search fl" id="search-box">
            <form action="#" method="get" target="_blank">
                <input type="text" placeholder="搜索菜谱、食材"
                       id="sreach-input" class="search-text fl"/>
                <input type="button" value="搜菜谱" class="search-btn fl"/>
            </form>
        </div>
        <div class="nav fr">
            <ul>
                <li><a href="index.html">首页</a></li>
                <li class="menu-class"><a href="menu_class.html">菜谱分类</a>
                    <div class="topbar-menu">
                        <ul class="plain">
                            <li class='topbar-menu-head'>常用主题</li>
                            <li><a href="menu_class.html">家常菜</a></li>
                            <li><a href="menu_class.html">快手菜</a></li>
                            <li><a href="menu_class.html">下饭菜</a></li>
                            <li><a href="menu_class.html">早餐</a></li>
                            <li><a href="menu_class.html">减肥</a></li>
                            <li><a href="menu_class.html">汤羹</a></li>
                            <li><a href="menu_class.html">烘焙</a></li>
                            <li><a href="menu_class.html">小吃</a></li>
                        </ul>
                        <ul class="plain">
                            <li class='topbar-menu-head'>常见食材</li>
                            <li><a href="menu_class.html">猪肉</a></li>
                            <li><a href="menu_class.html">鸡肉</a></li>
                            <li><a href="menu_class.html">牛肉</a></li>
                            <li><a href="menu_class.html">鱼</a></li>
                            <li><a href="menu_class.html">鸡蛋</a></li>
                            <li><a href="menu_class.html">土豆</a></li>
                            <li><a href="menu_class.html">茄子</a></li>
                            <li><a href="menu_class.html">豆腐</a></li>
                        </ul>
                        <ul class="plain">
                            <li class='topbar-menu-head'>时令食材</li>
                            <li><a href="menu_class.html">春笋</a></li>
                            <li><a href="menu_class.html">笋</a></li>
                            <li><a href="menu_class.html">豌豆</a></li>
                            <li><a href="menu_class.html">草莓</a></li>
                            <li><a href="menu_class.html">金桔</a></li>
                            <li><a href="menu_class.html">菠菜</a></li>
                            <li><a href="menu_class.html">冬笋</a></li>
                            <li><a href="menu_class.html">韭菜</a></li>
                        </ul>
                        <div class="span">
                            <span><a href="menu_class.html">查看全部分类</a></span>
                        </div>
                    </div>
                </li>
                <li><a href="popular_menu.html">菜单</a></li>
                <li><a href="">作品动态</a></li>
            </ul>
            <div class="dengluzhuce fr">
                <a href="login.html">登录</a>
                <a href="register .html">注册</a>
            </div>
        </div>
    </div>
    <div class="suggest" id="sreach-suggest"><!---搜索智能提示suggest-->
        <ul>
            <li>搜" "相关用户</li>
            <li>搜" "相关菜单</li>
        </ul>
    </div>
</div>
<div class="konghang"></div><!--因为头部固定而需要设置高度空行把内容撑下去-->

<div class="conwidth content">
    <div class="leftcon">
        <ul class="allclass">
            <li><a href="menu_class.html">全部分类</a></li>
            <li><a href="popular_menu.html">本周最受欢迎</a></li>
            <li><a href="menu_class.html">新秀菜谱</a></li>
            <li><a href="">往期头条</a></li>
            <li><a href="">厨房101</a></li>
            <li><a href="">月度最佳</a></li>
            <li><a href="">最新创建</a></li>
            <li class="active">流行菜单</li>
        </ul>
        <ul class="popular-search">
            <li><a class="first-li">流行搜索</a></li>
            <li><a href="search_hint.html">烘焙</a></li>
            <li><a href="search_hint.html">素菜</a></li>
            <li><a href="search_hint.html">下饭菜</a></li>
            <li><a href="search_hint.html">快手菜</a></li>
            <li><a href="search_hint.html">蔬菜</a></li>
            <li><a href="search_hint.html">早餐</a></li>
            <li><a href="search_hint.html">蚕豆</a></li>
            <li><a href="search_hint.html">红烧肉</a></li>
            <li><a href="search_hint.html">鱼虾水产</a></li>
        </ul>
    </div>
    <div class="centercon">
        <h1>菜单</h1>
        <div class="menublock clearfix">
            <div class="cover">
                <img src="../img/angle.jpg" class="menuimg"/>
            </div>
            <div class="title">
                <a href="#">明明快手却看着高大上的食物</a><span>23菜谱</span>
                <p><a href="">心灵手不巧的咩咩</a><span>创建</span><span>924收藏</span></p>
            </div>
        </div>
        <div class="menublock clearfix">
            <div class="cover">
                <img src="../img/angle.jpg" class="menuimg"/>
            </div>
            <div class="title">
                <a href="#">明明快手却看着高大上的食物</a><span>23菜谱</span>
                <p><a href="">心灵手不巧的咩咩</a><span>创建</span><span>924收藏</span></p>
            </div>
        </div>        <div class="menublock clearfix">
        <div class="cover">
            <img src="../img/angle.jpg" class="menuimg"/>
        </div>
        <div class="title">
            <a href="#">明明快手却看着高大上的食物</a><span>23菜谱</span>
            <p><a href="">心灵手不巧的咩咩</a><span>创建</span><span>924收藏</span></p>
        </div>
    </div>        <div class="menublock clearfix">
        <div class="cover">
            <img src="../img/angle.jpg" class="menuimg"/>
        </div>
        <div class="title">
            <a href="#">明明快手却看着高大上的食物</a><span>23菜谱</span>
            <p><a href="">心灵手不巧的咩咩</a><span>创建</span><span>924收藏</span></p>
        </div>
    </div>        <div class="menublock clearfix">
        <div class="cover">
            <img src="../img/angle.jpg" class="menuimg"/>
        </div>
        <div class="title">
            <a href="#">明明快手却看着高大上的食物</a><span>23菜谱</span>
            <p><a href="">心灵手不巧的咩咩</a><span>创建</span><span>924收藏</span></p>
        </div>
    </div>
        <div class="pager">
            <span class="prev">上一页</span>
            <span class="now">1</span>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            ...
            <a href="">下一页</a>
        </div>


    </div>
    <div class="rightcon">
        <div class="liuxingcaidan">
            <div class="title"><h2 class="fubiaoti">流行菜单</h2><a href="#" class="quanbu">全部</a></div>
            <ul>
                <li><a href="#">1000个减肥餐</a></li>
                <li><a href="#">没有素菜我可能会死掉～</a></li>
                <li><a href="#">上学娃的快手营养早餐</a></li>
                <li><a href="#">丨･ω･｡)ﾉ手撕面包</a></li>
                <li><a href="#">一片吐司太单调。</a></li>
                <li><a href="#">高分土豆方子，可以吃到天荒地老</a></li>
                <li><a href="#">寒假回去要做的╰(￣▽￣)╮⑦入门西餐</a></li>
                <li><a href="#">烘焙♥酱酱系列</a></li>
                <li><a href="#">中点</a></li>
            </ul>
        </div>
    </div>
</div>


<div class="conwidth footer"><!----------------页脚---------------->
    <ul>
        <li><a href="#">美食生活杂志</a></li>
        <li><a href="#">厨房工作</a></li>
        <li><a href="#">社区指导原则</a></li>
        <li><a href="#">秀厨网出版的书</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">意见反馈</a></li>
        <li><a href="#">隐私声明</a></li>
    </ul>
    <br/>
    <p>Peng Xiaofen production, copy writenot "下厨房" ,for commercial use.</p>
</div>
<script src="../js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/main.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>
