package com.xiuchu.kkfcc.service.impl;


import com.xiuchu.kkfcc.common.Const;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return userMapper.updateByPrimaryKey(user);
    }

    @Override
    public ServerResponse<String> userPhoto(HttpSession session) {
        KkfccUser user = (KkfccUser) session.getAttribute(Const.CURRENT_USER);
        if(user == null)
            return ServerResponse.createByError();
        String suffix = "user" + "/" + user.getImage();
        String imageUrl = PropertiesUtil.getProperty("ftp.server.http.prefix") + suffix;
        return ServerResponse.createBySuccess(imageUrl);

    }



}
