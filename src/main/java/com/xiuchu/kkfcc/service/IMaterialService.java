package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.vo.MaterialVO;

import java.util.List;

public interface IMaterialService {

     List<MaterialVO> queryMaterialByRecipeId(String recipeId);
}
