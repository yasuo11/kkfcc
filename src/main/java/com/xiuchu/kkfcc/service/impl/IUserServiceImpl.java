package com.xiuchu.kkfcc.service.impl;


import com.xiuchu.kkfcc.common.Const;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.util.CookieUtil;
import com.xiuchu.kkfcc.util.JsonUtil;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import com.xiuchu.kkfcc.util.RedisPoolUtil;
import com.xiuchu.kkfcc.vo.UserVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Service("iUserServiceImpl")
public class IUserServiceImpl implements IUserService {


    @Autowired
    KkfccUserMapper userMapper;

    @Override
    public KkfccUser findUser(KkfccUser user) {
        KkfccUser curUser = userMapper.selectOne(user);
        return curUser;
    }

    @Override
    public int insertUser(KkfccUser user) {
        return userMapper.insert(user);
    }

    @Override
    public int updateUserInfo(KkfccUser user) {
        return userMapper.updateByPrimaryKeySelective(user);
    }

    @Override
    public ServerResponse<String> userPhoto(HttpSession session, HttpServletRequest request) {
        String sessonId = CookieUtil.readLoginToken(request);
        if(StringUtils.isEmpty(sessonId))
            return ServerResponse.createByError();
        String userString = RedisPoolUtil.get(sessonId);
        KkfccUser curUser = JsonUtil.string2Obj(userString, KkfccUser.class);
        if(curUser == null)
            return ServerResponse.createByError();
        return ServerResponse.createBySuccess(curUser.getImage());

    }


    @Override
    public ServerResponse<UserVO> basic(HttpServletRequest request, KkfccUser user) {
        UserVO userVO = new UserVO();
        userVO.setUserName(user.getLoginName());
        userVO.setImage(user.getImage());

        int recipe_collects = userMapper.selectRecipeCollects(user);
        int menu_collects = userMapper.selectMenuCollects(user);
        int recipes = userMapper.selectRecipes(user);
        int works = userMapper.selectWorks(user);

        userVO.setMenu_collects(recipe_collects);
        userVO.setRecipe_collects(menu_collects);
        userVO.setWorks(works);
        userVO.setRecipes(recipes);

        return ServerResponse.createBySuccess(userVO);

    }

}
