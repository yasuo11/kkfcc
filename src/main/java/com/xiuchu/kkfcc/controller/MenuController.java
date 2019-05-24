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
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.regex.Pattern;

@Controller
@EnableAutoConfiguration
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private IMenuService iMenuService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private IRecipeService iRecipeService;



    @RequestMapping("/deleteMenu/{menuId}")
    @ResponseBody
    public ServerResponse<String> deleteMenu(@PathVariable("menuId") Integer menuId, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();

        return iMenuService.deleteMenu(menuId);
    }

    @RequestMapping("/delete/{menuId}/{recipeId}")
    public String deleteRecipeFromMenu(@PathVariable("menuId") Integer menuId, @PathVariable("recipeId") Integer recipeId) {
        iMenuService.deleteRecipeFromMenu(menuId, recipeId);
        return "redirect:/menu/" + menuId;
    }
    @RequestMapping("/init.do")
    @ResponseBody
    public ServerResponse<KkfccMenu> init(Integer menuId, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();
        return iMenuService.menuInfo(menuId);
    }

    @RequestMapping("/update.do")
    @ResponseBody
    public ServerResponse<String> updateMenu(@RequestBody KkfccMenu menu, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();
        menu.setUserId(curUser.getId());
        return iMenuService.updateMenu(menu);
    }

    @RequestMapping("/createmenu.do")
    @ResponseBody
    public ServerResponse<String> createMenu(@RequestBody KkfccMenu menu, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByError();
        menu.setUserId(curUser.getId());
        return iMenuService.createMenu(menu);
    }


    @RequestMapping("/{id}")
    public String queryDetailMenu(@PathVariable("id") Integer id, Model model) {
        MenuVO menuVO = iMenuService.queryDetailMenu(id);
        menuVO.setMenuId(id);
        model.addAttribute("menuVO", menuVO);
        return "forward:/recipe_list";
    }

    @RequestMapping("/aa/{id}")
    @ResponseBody
    public ServerResponse<MenuVO> queryMenu(@PathVariable("id") Integer id) {
        MenuVO menuVO = iMenuService.queryDetailMenu(id);
        return ServerResponse.createBySuccess(menuVO);
    }

    @RequestMapping("/addRecipe.do")
    @ResponseBody
    public ServerResponse<String> addRecipeToMenu(String recipeUrl, Integer menuId, HttpServletRequest request) {
        KkfccUser curUser = iUserService.getCurUser(request);
        if(curUser == null)
            return ServerResponse.createByErrorMessage("请重新登录");
        String URL_RECIPE = "http://www\\.xiachufang\\.com/recipe/\\d*/";
        if(!recipeUrl.matches(URL_RECIPE))
            return ServerResponse.createByErrorMessage("链接不合法，请重新输入！");
        Pattern pattern = Pattern.compile("\\D+");
        String[] strings = pattern.split(recipeUrl);
        RecipeDetailVO recipeDetailVO = iRecipeService.queryRecipe(strings[1]);
        if(recipeDetailVO == null)
            return ServerResponse.createByErrorMessage("未找到该菜谱");
        KkfccCbook recipe = recipeDetailVO.getRecipe();
        return iMenuService.addRecipeToMenu(menuId, recipe);
    }

//    @RequestMapping("/collect")
//    @ResponseBody
//    public ServerResponse<String> collectMenu(HttpServletRequest request, HttpSession session) {
//
//    }
}
