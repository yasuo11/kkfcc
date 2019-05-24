package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/userkitchen")
public class Userkitchen {
    @Autowired
    IUserService iUserService;

    @RequestMapping("/{id}")
    public String showKitchen(@PathVariable("id") String id, Model model){
        KkfccUser user=new KkfccUser();
        user.setId(id);
        user = iUserService.findUser(user);
        model.addAttribute("user", user);
        return "forward:/user_kitchen";
    }
}
