package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.util.JsonUtil;
import com.xiuchu.kkfcc.vo.RecipeDetailVO;
import com.xiuchu.kkfcc.vo.RecipeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/recipe")
public class RecipeController {

    @Autowired
    IRecipeService iRecipeService;

    @RequestMapping("/{id}")
    public String queryRecipe(@PathVariable("id") String id, Model model) {
        RecipeDetailVO recipeDetailVO = iRecipeService.queryRecipe(id);
        model.addAttribute("recipeDetailVO", recipeDetailVO);
        model.addAttribute("name", "darling");
        return "forward:/menu_book";
    }

//    @RequestMapping("/queryrecipe.do")
//    @ResponseBody
//    public ServerResponse<RecipeDetailVO> queryRecipe(HttpSession session) {
//        String recipeId = (String)session.getAttribute("recipeId");
//        ServerResponse<RecipeDetailVO> serverResponse = iRecipeService.queryRecipe(recipeId);
//        session.removeAttribute("recipeId");
//
//        return serverResponse;
//    }

    @RequestMapping("/recommand.do")
    @ResponseBody
    public ServerResponse<List<RecipeVO>> recipeRecommand() {
        return iRecipeService.recipeRecommand();
    }


    @RequestMapping("/newrecipe.do")
    @ResponseBody
    public ServerResponse<List<RecipeVO>> newRecipe() {
        return iRecipeService.newRecipe();
    }






}
