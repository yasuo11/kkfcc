package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.vo.RecipeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/recipe")
public class RecipeController {

    @Autowired
    IRecipeService iRecipeService;

    @RequestMapping("/{id}")
    @ResponseBody
    public ServerResponse<KkfccCbook> queryRecipe(@PathVariable("id") String id) {
        return iRecipeService.queryRecipe(id);
    }

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
