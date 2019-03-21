package com.xiuchu.kkfcc.Controller;

import com.google.common.collect.Maps;
import com.xiuchu.kkfcc.common.ResponseCode;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IFileService;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.util.MD5Util;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class userController {

    @Autowired
    IUserService iUserService;

    @Autowired
    IFileService iFileService;

    @ResponseBody
    @RequestMapping("/login.do")
    public ServerResponse<String> login(KkfccUser user, HttpSession session) {
        KkfccUser curUser = iUserService.findUser(user);
        session.setAttribute("curUser", curUser);
        if(curUser != null)
            return ServerResponse.createBySuccessMessage("登录成功！！");
        return ServerResponse.createBySuccessMessage("未查找到该用户");
    }

    @ResponseBody
    @RequestMapping("/register.do")
    public ServerResponse<String> register(KkfccUser user) {
        String logName = user.getLoginName();
        KkfccUser curUser = iUserService.findUser(user);
        if(curUser != null)
            return ServerResponse.createBySuccessMessage("已存在重复的用户名！");
        String newPasswd = MD5Util.MD5EncodeUtf8(user.getPassword());
        user.setNickName(logName);
        user.setPassword(newPasswd);
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


}
