package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service("iUserService")
public interface IUserService {


    KkfccUser findUser(KkfccUser user);

    int insertUser(KkfccUser user);

    int updateUserInfo(KkfccUser user);


}
