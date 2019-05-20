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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
        if(menuMapper.deleteByPrimaryKey(menu) > 0)
            return ServerResponse.createBySuccess();
        return ServerResponse.createByError();
    }

    @Override
    public ServerResponse<KkfccMenu> menuInfo(Integer menuId) {
        KkfccMenu menu = new KkfccMenu();
        menu.setId(menuId);
        KkfccMenu curMenu = menuMapper.selectByPrimaryKey(menu);
        if(curMenu == null)
            return ServerResponse.createByError();
        return ServerResponse.createBySuccess(curMenu);
    }

    @Override
    public ServerResponse<String> updateMenu(KkfccMenu menu) {
        if(menuMapper.updateByPrimaryKey(menu) > 0)
            return ServerResponse.createBySuccess();
        return ServerResponse.createByError();
    }

    @Override
    public ServerResponse<String> createMenu(KkfccMenu menu) {
        if(menuMapper.insertUseGeneratedKeys(menu) > 0)
            return ServerResponse.createBySuccess();
        return ServerResponse.createByError();
    }

    @Override
    public ServerResponse<String> addRecipeToMenu(KkfccMenu menu, KkfccCbook recipe) {
        KkfccMenuCbook menuCbook = new KkfccMenuCbook();
        menuCbook.setCbookId(recipe.getId());
        menuCbook.setMenuId(menu.getId());
        if(menuCbookMapper.insertUseGeneratedKeys(menuCbook) > 0)
            return ServerResponse.createBySuccess();
        return ServerResponse.createByError();
    }

    @Override
    public ServerResponse<MenuVO> queryMenu(String id, KkfccUser curUser, HttpSession session) {
        KkfccMenu menu = new KkfccMenu();
        menu.setId(Integer.parseInt(id));
        menu = menuMapper.selectByPrimaryKey(menu);
        if(menu == null)
            return ServerResponse.createByError();
        MenuVO menuVO = new MenuVO();
        Integer menuId = menu.getId();
        KkfccMenuCbook menuCbook = new KkfccMenuCbook();
        menuCbook.setMenuId(menuId);
        List<KkfccMenuCbook> menuCbookList = menuCbookMapper.select(menuCbook);
        List<RecipeVO> recipeVOList = new ArrayList<>();
        for(KkfccMenuCbook menuCbook1 : menuCbookList) {
            KkfccCbook recipe = new KkfccCbook();
            recipe.setId(menuCbook1.getCbookId());
            recipe = cbookMapper.selectByPrimaryKey(recipe);
            RecipeVO recipeVO = new RecipeVO();
            recipeVO.setId(recipe.getId());
            recipeVO.setImageUrl(recipe.getImage());
            KkfccUser user = new KkfccUser();
            user.setId(recipe.getUserId());
            user = userMapper.selectByPrimaryKey(user);
            recipeVO.setAuthorName(user.getNickName());
            recipeVO.setRecipeName(recipe.getName());
            recipeVO.setCollectSum(recipe.getCollectionSum());
            recipeVOList.add(recipeVO);
        }
        menuVO.setRecipeVOList(recipeVOList);
        menuVO.setAuthorName(curUser.getNickName());
        menuVO.setCollectSum(menu.getCollectSum());
        menuVO.setDesc(menu.getIntroduction());
        menuVO.setUserImg(curUser.getImage());
        menuVO.setTitle(menu.getTitle());
        session.setAttribute(Const.CURRENT_MENU, menuVO);
        return ServerResponse.createBySuccess(menuVO);
    }


}
