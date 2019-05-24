package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Service("iUserService")
public interface IUserService {


    KkfccUser findUser(KkfccUser user);

    int insertUser(KkfccUser user);

    int updateUserInfo(KkfccUser user);

    ServerResponse<String> userPhoto(HttpSession session, HttpServletRequest request);

    ServerResponse<UserVO> basic(HttpServletRequest request, KkfccUser user);

    KkfccUser getCurUser(HttpServletRequest request);

}
