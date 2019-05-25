package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.vo.RecipeDetailVO;
import com.xiuchu.kkfcc.vo.RecipeSimpleVO;
import com.xiuchu.kkfcc.vo.RecipeVO;

import java.util.ArrayList;
import java.util.List;

public interface IRecipeService {

    ServerResponse<List<RecipeVO>> recipeRecommand();


    ServerResponse<List<RecipeVO>> newRecipe();


    RecipeDetailVO queryRecipe(String id);

    ServerResponse<String> createRecipe(RecipeSimpleVO recipeSimpleVO);

    KkfccCbook selectRecipe(Integer id);

}
