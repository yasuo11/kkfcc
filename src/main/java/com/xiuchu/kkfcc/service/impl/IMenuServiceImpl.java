package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.common.Const;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccCbookMapper;
import com.xiuchu.kkfcc.mapper.KkfccMenuCbookMapper;
import com.xiuchu.kkfcc.mapper.KkfccMenuMapper;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccMenu;
import com.xiuchu.kkfcc.pojo.KkfccMenuCbook;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IMenuService;
import com.xiuchu.kkfcc.vo.MenuVO;
import com.xiuchu.kkfcc.vo.RecipeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service("iMenuService")
public class IMenuServiceImpl implements IMenuService {

    @Autowired
    private KkfccMenuMapper menuMapper;
    @Autowired
    private KkfccMenuCbookMapper menuCbookMapper;
    @Autowired
    private KkfccCbookMapper cbookMapper;
    @Autowired
    private KkfccUserMapper userMapper;

    @Override
    public ServerResponse<String> deleteMenu(Integer menuId) {
        KkfccMenu menu = new KkfccMenu();
        menu.setId(menuId);
        if(menuMapper.delete(menu) > 0)
            return ServerResponse.createBySuccess();
        return ServerResponse.createByError();
    }

    @Override
    public ServerResponse<KkfccMenu> menuInfo(Integer menuId) {
        KkfccMenu menu = new KkfccMenu();
        menu.setId(menuId);
        KkfccMenu curMenu = menuMapper.selectOne(menu);
        if(curMenu == null)
            return ServerResponse.createByError();
        return ServerResponse.createBySuccess(curMenu);
    }

    @Override
    public ServerResponse<String> updateMenu(KkfccMenu menu) {
        if(menuMapper.updateByPrimaryKeySelective(menu) > 0)
            return ServerResponse.createBySuccessMessage("成功更新菜单");
        return ServerResponse.createBySuccessMessage("更新菜单失败");
    }

    @Override
    public ServerResponse<String> createMenu(KkfccMenu menu) {
        if(menuMapper.insertUseGeneratedKeys(menu) > 0)
            return ServerResponse.createBySuccess();
        return ServerResponse.createByError();
    }

    @Override
    public ServerResponse<String> addRecipeToMenu(Integer menuId, KkfccCbook recipe) {
        KkfccMenuCbook menuCbook = new KkfccMenuCbook();
        menuCbook.setCbookId(recipe.getId());
        menuCbook.setMenuId(menuId);
        if(menuCbookMapper.selectOne(menuCbook) != null)
            return ServerResponse.createByErrorMessage("该菜单中已有该菜谱，请不要重复添加");
        if(menuCbookMapper.insertUseGeneratedKeys(menuCbook) > 0)
            return ServerResponse.createBySuccessMessage("添加菜谱成功");
        return ServerResponse.createByErrorMessage("添加菜谱失败！");
    }

    @Override
    public MenuVO queryDetailMenu(Integer id) {
        KkfccMenu menu = new KkfccMenu();
        menu.setId(id);
        menu = menuMapper.selectOne(menu);
        if(menu == null)
            return null;
        MenuVO menuVO = new MenuVO();
        Integer menuId = menu.getId();
        KkfccMenuCbook menuCbook = new KkfccMenuCbook();
        menuCbook.setMenuId(menuId);
        List<KkfccMenuCbook> menuCbookList = menuCbookMapper.select(menuCbook);
        List<RecipeVO> recipeVOList = new ArrayList<>();
        for(KkfccMenuCbook menuCbook1 : menuCbookList) {
            KkfccCbook recipe = new KkfccCbook();
            recipe.setId(menuCbook1.getCbookId());
            recipe = cbookMapper.selectOne(recipe);
            RecipeVO recipeVO = new RecipeVO();
            recipeVO.setId(recipe.getId());
            recipeVO.setImageUrl(recipe.getImage());
            KkfccUser user = new KkfccUser();
            user.setId(recipe.getUserId());
            user = userMapper.selectOne(user);
            recipeVO.setAuthorName(user.getNickName());
            recipeVO.setRecipeName(recipe.getName());
            recipeVO.setCollectSum(recipe.getCollectionSum());
            recipeVOList.add(recipeVO);
        }
        KkfccUser curUser = new KkfccUser();
        curUser.setId(menu.getUserId());
        curUser = userMapper.selectOne(curUser);
        menuVO.setRecipeVOList(recipeVOList);
        menuVO.setAuthorName(curUser.getNickName());
        menuVO.setCollectSum(menu.getCollectSum());
        menuVO.setDesc(menu.getIntroduction());
        menuVO.setUserImg(curUser.getImage());
        menuVO.setTitle(menu.getTitle());
        return menuVO;
    }

    public void deleteRecipeFromMenu(Integer menuId, Integer recipeId) {
        KkfccMenuCbook menuCbook = new KkfccMenuCbook();
        menuCbook.setMenuId(menuId);
        menuCbook.setCbookId(recipeId);
        menuCbookMapper.delete(menuCbook);
    }

}
