package com.xiuchu.kkfcc.service.impl;


import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


}
