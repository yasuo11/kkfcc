package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.pojo.*;
import com.xiuchu.kkfcc.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/userkitchen")
public class UserkitchenController {
    @Autowired
    IUserService iUserService;
    @Autowired
    IWorkService iWorkService;
    @Autowired
    IRecipeService iRecipeService;
    @Autowired
    IMenuService iMenuService;
    @Autowired
    ICollectService iCollectService;

    @RequestMapping("/{id}")
    public String showKitchen(@PathVariable("id") Integer id, Model model){
        //用户信息
        KkfccUser user=new KkfccUser();
        user.setId(id);
        user = iUserService.findUser(user);
        model.addAttribute("user", user);
        //用户菜谱信息
//        KkfccCbook recipe = new KkfccCbook();
//        recipe.setUserId(id);
        List<KkfccCbook> recipes = iRecipeService.getAllRecipes(id);
        model.addAttribute("recipes", recipes);
        //用户作品信息
//        KkfccWorks work = new KkfccWorks();
//        work.setUserId(id);
        List<KkfccWorks> works = iWorkService.getAllWorks(id);
        model.addAttribute("works", works);
        //用户菜单信息
//        KkfccMenu menu = new KkfccMenu();
//        menu.setUserId(id);
        List<KkfccMenu> menus = iMenuService.getAllMenus(id);
        model.addAttribute("menus", menus);
        //用户收藏的菜单信息
//        KkfccCmenuCollect mCollect = new KkfccCmenuCollect();
//        mCollect.setUserId(id);
        List<KkfccCmenuCollect> mCollect = iCollectService.getAllCollect(id);
        List<KkfccMenu> mCollects = new ArrayList<>();
        for (int i=0; i<mCollect.size(); i++){
            mCollects.add(iMenuService.getOneMenu(mCollect.get(i).getUserId()));
        }
        model.addAttribute("mCollects", mCollects);     //其实这里面是菜单对象
        return "forward:/user_kitchen";
    }
}
