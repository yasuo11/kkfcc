package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccMenu;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.vo.MenuVO;


public interface IMenuService {

    ServerResponse<String> deleteMenu(Integer menuId);

    ServerResponse<KkfccMenu> menuInfo(Integer menuId);

    ServerResponse<String> updateMenu(KkfccMenu menu);

    ServerResponse<String> createMenu(KkfccMenu menu);

    ServerResponse<String> addRecipeToMenu(Integer menuId, KkfccCbook recipe);

    void deleteRecipeFromMenu(Integer menuId, Integer recipeId);

    MenuVO queryDetailMenu(Integer id);

    List<QMenuVO> selectMenu(int pageNum, int sortNum);

    List<KkfccMenu> getAllMenus(Integer UserId);

    KkfccMenu getOneMenu(Integer UseId);
}
