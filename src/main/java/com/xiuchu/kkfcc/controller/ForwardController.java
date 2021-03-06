package com.xiuchu.kkfcc.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@EnableAutoConfiguration
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

    @RequestMapping("popular_menu1")
    public String popularMenu1() {
        return "popular_menu1";
    }

    @RequestMapping("popular_menu2")
    public String popularMenu2() {
        return "popular_menu2";
    }

    @RequestMapping("popular_menu3")
    public String popularMenu3() {
        return "popular_menu3";
    }

    @RequestMapping("popular_menu4")
    public String popularMenu4() {
        return "popular_menu4";
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

    @RequestMapping("user_photo")
    public String userpur() {
        return "user_photo";
    }

    @RequestMapping("recipe_list")
    public String userRecipelist() {return "recipe_list";}

    @RequestMapping("create_recipe")
    public String createRecipe() {return "create_recipe";}

    @RequestMapping("create_dish")
    public String createdish() {return "create_dish";}

    @RequestMapping("create_menu")
    public String createMenu(){return "create_menu";}

    @RequestMapping("edit_menu")
    public String editMenu(){return "edit_menu";}

    @RequestMapping("activity")
    public  String useractivity() {return "activity";}

    @RequestMapping("work_show")
    public String workshow(){return "work_show";}

    @RequestMapping("search_recipe")
    public String searchRecipe(){return "search_recipe";}

}
