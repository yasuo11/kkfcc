package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.pojo.KkfccWorks;
import com.xiuchu.kkfcc.service.IFileService;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.service.IWorkService;
import com.xiuchu.kkfcc.util.CookieUtil;
import com.xiuchu.kkfcc.util.JsonUtil;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import com.xiuchu.kkfcc.util.RedisPoolUtil;
import com.xiuchu.kkfcc.vo.ActivityVO;
import com.xiuchu.kkfcc.vo.FormVO;
import com.xiuchu.kkfcc.vo.WorkVO;
import com.xiuchu.kkfcc.vo.otherWorkVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/work")
public class WorkController {

    @Autowired
    IUserService iUserService;

    @Autowired
    IFileService iFileService;

    @Autowired
    IWorkService iWorkService;

    /**
     * @Author wangxu
     * @Description 
     * @Date 15:33 2019/5/22
     * @Param [recipeId, recipeName, model]
     * @return java.lang.String
     **/
    @RequestMapping("/jump")
    public String uploadWork(Integer recipeId, String recipeName, Model model){
        model.addAttribute("recipeId", recipeId);
        model.addAttribute("recipeName", recipeName);
        return "forward:/create_dish";
    }


    //
    @RequestMapping("/up")
    @ResponseBody
    public String uploadWork(@RequestBody FormVO formVO, HttpServletRequest request){
        String sessonId = CookieUtil.readLoginToken(request);
        String userString = RedisPoolUtil.get(sessonId);
        KkfccUser user = JsonUtil.string2Obj(userString, KkfccUser.class);
        WorkVO vo=new WorkVO();
        Date date=new Date();
        Timestamp timestamp = new Timestamp(date.getTime());    //获取创建时间
        vo.setCreateTime(timestamp);
        vo.setImageUrl(formVO.getImgUrl());
        vo.setRecipeId(formVO.getRecipeId());
        vo.setRecipeInfo(formVO.getWorkInfo());
        vo.setUserId(user.getId());
        iWorkService.workUpload(vo);
        return "forward:/activity";
    }

    //单张图片上传
    @ResponseBody
    @RequestMapping("/upphoto")
    public ServerResponse<String> uploadImg(HttpServletRequest request, @RequestParam(value = "file",required = true)MultipartFile file){
        if(file == null)
            return ServerResponse.createBySuccess();
        String path = request.getSession().getServletContext().getRealPath("upload");
        String targetFileName = iFileService.upload(file, path);
        String imgUrl = PropertiesUtil.getProperty("ftp.server.http.prefix") + targetFileName;
        return ServerResponse.createBySuccess(imgUrl);
    }

    //作品动态
    @RequestMapping("/activity")
    public ServerResponse showActivity(HttpServletRequest request){
        List<ActivityVO> activities = iWorkService.getActivityDetails();

        String sessonId = CookieUtil.readLoginToken(request);
        if(sessonId == null)
            return ServerResponse.createByError();
        String userString = RedisPoolUtil.get(sessonId);
        KkfccUser user = JsonUtil.string2Obj(userString, KkfccUser.class);
        if(user == null)
            return ServerResponse.createByError();
        for (int i=0; i<activities.size(); i++) {
            activities.get(i).setUserId(user.getId());
            activities.get(i).setUserName(user.getNickName());
        }
        return ServerResponse.createBySuccess(activities);
    }
    //作品详细
    @RequestMapping("/details")
    public String showWork(Integer workUserId, Integer recipeId, Model model){
        KkfccWorks work = iWorkService.getUserWorkDetail(workUserId, recipeId);
        KkfccUser user=new KkfccUser();
        user.setId(workUserId); //通过用户id获取用户名
        model.addAttribute("userName",iUserService.findUser(user).getNickName());
        model.addAttribute("work",work );
        return "forward:/work_show";
    }
    //菜谱界面其他用户的作品展示
    @RequestMapping("/showOtherWorks")
    @ResponseBody
    public ServerResponse<List<otherWorkVO>> showOtherWorks(Integer recipeId){
        List<otherWorkVO> works = iWorkService.getOthersWork(recipeId);
        return ServerResponse.createBySuccess(works);
    }

}
