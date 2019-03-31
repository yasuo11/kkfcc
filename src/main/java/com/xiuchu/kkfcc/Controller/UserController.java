package com.xiuchu.kkfcc.Controller;

import com.google.common.collect.Maps;
import com.xiuchu.kkfcc.common.RedisPool;
import com.xiuchu.kkfcc.common.ResponseCode;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IFileService;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.util.MD5Util;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import com.xiuchu.kkfcc.util.RedisPoolUtil;
import com.xiuchu.kkfcc.util.SmsUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import redis.clients.jedis.Jedis;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
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
        if(curUser != null)
            return ServerResponse.createByErrorMessage("该手机号已被注册！！");
        String curSms = RedisPoolUtil.get(phoneNumber);
        if(curSms == null || !curSms.equals(sms))
            return ServerResponse.createByErrorMessage("验证码错误！！");
        if(iUserService.insertUser(user) > 0)
            return ServerResponse.createBySuccessMessage("注册成功！");

        return ServerResponse.createByErrorMessage("注册失败！");
    }


    // 展示个人信息
    @ResponseBody
    @RequestMapping("/basic.do")
    public ServerResponse<KkfccUser> basic(HttpSession session) {
        KkfccUser curUser = (KkfccUser)session.getAttribute("curUser");
        if(curUser == null)
            return ServerResponse.createByErrorMessage("账号异常，请重新登录");

        return ServerResponse.createBySuccess(curUser);
    }

    // 更新个人信息
    @ResponseBody
    @RequestMapping("/update.do")
    public ServerResponse<String> update(KkfccUser user, HttpSession session) {
        KkfccUser curUser = (KkfccUser)session.getAttribute("curUser");
        curUser.setNickName(user.getNickName());
        curUser.setSelfIntroduction(user.getSelfIntroduction());
        curUser.setSex(user.getSex());
        if(iUserService.updateUserInfo(curUser) > 0)
            return ServerResponse.createBySuccessMessage("更新成功！");
        return ServerResponse.createBySuccessMessage("更新失败！");
    }

    // 上传图片到FTP服务器，并返回图片的url地址
    @RequestMapping("upload.do")
    @ResponseBody
    public ServerResponse upload(HttpSession session, @RequestParam(value = "upload_file",required = false) MultipartFile file, HttpServletRequest request){
        KkfccUser user = (KkfccUser)session.getAttribute("curUser");
        String path = request.getSession().getServletContext().getRealPath("upload");
        String targetFileName = iFileService.upload(file,path);
        String url = PropertiesUtil.getProperty("ftp.server.http.prefix")+targetFileName;

        Map fileMap = Maps.newHashMap();
        fileMap.put("uri",targetFileName);
        fileMap.put("url",url);
        return ServerResponse.createBySuccess(fileMap);
    }

    @RequestMapping("sendsms.do")
    @ResponseBody
    public ServerResponse sendSms(String phoneNumber) {
        String random = SmsUtil.generateRandom();
        RedisPoolUtil.setEx(phoneNumber, random, 600); //设600S有效期
        SmsUtil.sendSms(phoneNumber, random);
        return ServerResponse.createBySuccessMessage("发送成功！");
    }

    @RequestMapping("login.do")
    @ResponseBody
    public ServerResponse<String> login(String phoneNumber, String sms, HttpSession session) {
        String curSms = RedisPoolUtil.get(phoneNumber);
        if(curSms == null || !curSms.equals(sms))
            return ServerResponse.createByErrorMessage("验证码错误！！");
        KkfccUser user = new KkfccUser();
        user.setLoginName(phoneNumber);
        user = iUserService.findUser(user);
        session.setAttribute("curUser", user);
        return ServerResponse.createBySuccessMessage("登录成功！！");
    }


    public static void main(String[] args) {

    }

}
