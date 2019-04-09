package com.xiuchu.kkfcc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping("index")
    public String index() {
        return "index";
    }

    @RequestMapping("login")
    public String login() {
        return "login";
    }

    @RequestMapping("register")
    public String register() {
        return "register";
    }

    @RequestMapping("popular_menu")
    public String popularMenu() {
        return "popular_menu";
    }

    @RequestMapping("menu_book")
    public String menuBook(){return "menu_book";}

    @RequestMapping("menu_class")
    public String menuClass() {
        return "menu_class";
    }

    @RequestMapping("cate_list")
    public String cateList() {
        return "cate_list";
    }

    @RequestMapping("search_hint")
    public String searchHint() {
        return "search_hint";
    }

    @RequestMapping("user_kitchen")
    public String userKitchen() {
        return "user_kitchen";
    }

    @RequestMapping("cook_question")
    public String cookQuestion() {
        return "cook_question";
    }

    @RequestMapping("user_count")
    public String userCount() {
        return "user_count";
    }

    @RequestMapping("user_pur")
    public String userpur() {
        return "user_pur";
    }
}
