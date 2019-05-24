package com.xiuchu.kkfcc.controller;

import com.google.common.collect.Maps;
import com.xiuchu.kkfcc.common.Const;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IFileService;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.util.*;
import com.xiuchu.kkfcc.vo.UserVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
@EnableAutoConfiguration
@RequestMapping("/user")
public class UserController {

    @Autowired
    IUserService iUserService;

    @Autowired
    IFileService iFileService;



    @ResponseBody
    @RequestMapping("/register.do")
    public ServerResponse<String> register(String phoneNumber, String sms) {
        KkfccUser user = new KkfccUser();
        user.setLoginName(phoneNumber);
        KkfccUser curUser = iUserService.findUser(user);
        if (curUser != null)
            return ServerResponse.createByErrorMessage("该手机号已被注册！！");
        String curSms = RedisPoolUtil.get(phoneNumber);
        if (curSms == null || !curSms.equals(sms))
            return ServerResponse.createByErrorMessage("验证码错误！！");
        if (iUserService.insertUser(user) > 0)
            return ServerResponse.createBySuccessMessage("注册成功！");

        return ServerResponse.createByErrorMessage("注册失败！");
    }


    // 展示个人信息
    @ResponseBody
    @RequestMapping("/basic.do")
    public ServerResponse<UserVO> basic(HttpServletRequest request) {
        String sessonId = CookieUtil.readLoginToken(request);
        if(StringUtils.isEmpty(sessonId))
            return ServerResponse.createByErrorMessage("账号异常，请重新登录");
        String userString = RedisPoolUtil.get(sessonId);
        KkfccUser curUser = JsonUtil.string2Obj(userString, KkfccUser.class);
        if (curUser == null)
            return ServerResponse.createByErrorMessage("账号异常，请重新登录");

        return iUserService.basic(request, curUser);
    }

    // 更新个人信息
    @ResponseBody
    @RequestMapping("/update.do")
    public ServerResponse<String> update(KkfccUser user, HttpSession session) {
        KkfccUser curUser = (KkfccUser) session.getAttribute("curUser");
        curUser.setNickName(user.getNickName());
        curUser.setSelfIntroduction(user.getSelfIntroduction());
        curUser.setSex(user.getSex());
        if (iUserService.updateUserInfo(curUser) > 0)
            return ServerResponse.createBySuccessMessage("更新成功！");
        return ServerResponse.createBySuccessMessage("更新失败！");
    }

    // 更新个人头像
    @RequestMapping("updatePhoto.do")
    public String upload(HttpSession session, @RequestParam(value = "upload_file",required = false) MultipartFile file, HttpServletRequest request){
        String sessonId = CookieUtil.readLoginToken(request);
        String userString = RedisPoolUtil.get(sessonId);
        KkfccUser user = JsonUtil.string2Obj(userString, KkfccUser.class);
        String path = request.getSession().getServletContext().getRealPath("upload");
        String targetFileName = iFileService.upload(file, path);
        user.setImage(PropertiesUtil.getProperty("ftp.server.http.prefix") + targetFileName);
        iUserService.updateUserInfo(user);
        session.setAttribute(Const.CURRENT_USER, user);
        RedisPoolUtil.setEx(session.getId(), JsonUtil.obj2String(user), Const.RedisCacheExtime.REDIS_SESSION_EXTIME);
        return "redirect:/index";
    }

    @RequestMapping("sendsms.do")
    @ResponseBody
    public ServerResponse sendSms(String phoneNumber) {
        String random = SmsUtil.generateRandom();
        RedisPoolUtil.setEx(phoneNumber, random, Const.RedisCacheExtime.REDIS_SMS_EXTIME); //设300S有效期
        SmsUtil.sendSms(phoneNumber, random);
        return ServerResponse.createBySuccessMessage("发送成功！");
    }

    @RequestMapping("login.do")
    @ResponseBody
    public ServerResponse<String> login(String phoneNumber, String sms, HttpServletResponse response, HttpSession session) {
        String curSms = RedisPoolUtil.get(phoneNumber);
        if (curSms == null || !curSms.equals(sms))
            return ServerResponse.createByErrorMessage("验证码错误！！");
        KkfccUser user = new KkfccUser();
        user.setLoginName(phoneNumber);

        user = iUserService.findUser(user);
        String jsonString = JsonUtil.obj2String(user);      //将对象转为json
        RedisPoolUtil.setEx(session.getId(), jsonString, Const.RedisCacheExtime.REDIS_SESSION_EXTIME);

        CookieUtil.writeLoginToken(response, session.getId());
        session.setAttribute(Const.CURRENT_USER, user);
        return ServerResponse.createBySuccessMessage("登录成功！！");
    }


    @RequestMapping("userPhoto.do")
    @ResponseBody
    public ServerResponse<String> userPhoto(HttpSession session, HttpServletRequest request) {
        return iUserService.userPhoto(session, request);
    }

    @RequestMapping("logout")
    public String logout(HttpSession session, HttpServletRequest request,
                         HttpServletResponse response) {
        session.removeAttribute(Const.CURRENT_USER);

        CookieUtil.delLoginToken(request, response);
        return "redirect:/index";
    }






}
