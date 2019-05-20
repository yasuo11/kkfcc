package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccMenu;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.vo.MenuVO;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public interface IMenuService {

    ServerResponse<String> deleteMenu(Integer menuId);

    ServerResponse<KkfccMenu> menuInfo(Integer menuId);

    ServerResponse<String> updateMenu(KkfccMenu menu);

    ServerResponse<String> createMenu(KkfccMenu menu);

    ServerResponse<String> addRecipeToMenu(KkfccMenu menu, KkfccCbook recipe);

    ServerResponse<MenuVO> queryMenu(String id, KkfccUser curUser, HttpSession session);

}
