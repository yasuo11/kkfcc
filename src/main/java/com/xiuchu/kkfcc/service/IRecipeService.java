package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.vo.RecipeVO;

import java.util.ArrayList;
import java.util.List;

public interface IRecipeService {

    ServerResponse<List<RecipeVO>> recipeRecommand();


    ServerResponse<List<RecipeVO>> newRecipe();


    ServerResponse<KkfccCbook> queryRecipe(String id);

}
