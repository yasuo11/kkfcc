package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.common.Const;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccMenu;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IMenuService;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.vo.MenuVO;
import com.xiuchu.kkfcc.vo.RecipeDetailVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.regex.Pattern;

@Controller
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private IMenuService iMenuService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private IRecipeService iRecipeService;

    @RequestMapping("/delete")
    @ResponseBody
    public ServerResponse<String> deleteMenu(@RequestParam("Id") Integer menuId, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();

        return iMenuService.deleteMenu(menuId);
    }

    @RequestMapping("/update")
    @ResponseBody
    public ServerResponse<String> updateMenu(KkfccMenu menu, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();

        return iMenuService.updateMenu(menu);
    }

    @RequestMapping("/create")
    @ResponseBody
    public ServerResponse<String> createMenu(KkfccMenu menu, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();

        return iMenuService.createMenu(menu);
    }


    @RequestMapping("/{id}")
    @ResponseBody
    public ServerResponse<MenuVO> queryMenu(@PathVariable("id") String id, HttpSession session, HttpServletRequest request) {
        if(id == null || id.equals(""))
            return ServerResponse.createByError();
        KkfccUser curUser = iUserService.getCurUser(request);
        return iMenuService.queryMenu(id, curUser, session);
    }


    @RequestMapping("/add")
    @ResponseBody
    public ServerResponse<String> addRecipeToMenu(String recipeUrl, HttpServletRequest request, HttpSession session) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();
        String URL_RECIPE = "http://www\\.xiachufang\\.com/recipe/\\d*/";
        if(!recipeUrl.matches(URL_RECIPE))
            return ServerResponse.createBySuccess("链接不合法，请重新输入！");
        Pattern pattern = Pattern.compile("\\D+");
        String[] strings = pattern.split(recipeUrl);
        RecipeDetailVO recipeDetailVO = iRecipeService.queryRecipe(strings[1]);
        if(recipeDetailVO == null)
            return ServerResponse.createBySuccess("未找到该菜谱");
        KkfccCbook recipe = recipeDetailVO.getRecipe();
        KkfccMenu menu = (KkfccMenu)session.getAttribute(Const.CURRENT_MENU);
        iMenuService.addRecipeToMenu(menu, recipe);
        return ServerResponse.createBySuccess("添加成功");
    }

//    @RequestMapping("/collect")
//    @ResponseBody
//    public ServerResponse<String> collectMenu(HttpServletRequest request, HttpSession session) {
//
//    }
}
