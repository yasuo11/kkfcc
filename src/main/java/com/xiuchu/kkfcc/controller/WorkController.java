package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.util.CookieUtil;
import com.xiuchu.kkfcc.util.JsonUtil;
import com.xiuchu.kkfcc.util.RedisPoolUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/work")
public class WorkController {
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


}
