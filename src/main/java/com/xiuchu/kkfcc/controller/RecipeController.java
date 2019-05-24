package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IFileService;
import com.xiuchu.kkfcc.service.IMaterialService;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.util.CookieUtil;
import com.xiuchu.kkfcc.util.JsonUtil;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import com.xiuchu.kkfcc.util.RedisPoolUtil;
import com.xiuchu.kkfcc.vo.MaterialVO;
import com.xiuchu.kkfcc.vo.RecipeDetailVO;
import com.xiuchu.kkfcc.vo.RecipeSimpleVO;
import com.xiuchu.kkfcc.vo.RecipeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@Controller
@EnableAutoConfiguration
@RequestMapping("/recipe")
public class RecipeController {

    @Autowired
    IRecipeService iRecipeService;

    @Autowired
    IMaterialService iMaterialService;

    @Autowired
    IFileService iFileService;

    @RequestMapping("/{id}")
    public String queryRecipe(@PathVariable("id") String id, Model model) {
        RecipeDetailVO recipeDetailVO = iRecipeService.queryRecipe(id);
        recipeDetailVO.setMaterials(iMaterialService.queryMaterialByRecipeId(id));
        model.addAttribute("recipeDetailVO", recipeDetailVO);
        return "forward:/menu_book";
    }



    @RequestMapping("/recommand.do")
    @ResponseBody
    public ServerResponse<List<RecipeVO>> recipeRecommand() {
        return iRecipeService.recipeRecommand();
    }


    @RequestMapping("/newrecipe.do")
    @ResponseBody
    public ServerResponse<List<RecipeVO>> newRecipe() {
        return iRecipeService.newRecipe();
    }


    @RequestMapping("/upload.do")
    @ResponseBody
    public ServerResponse<String> upload(@RequestParam(value = "files",required = false) MultipartFile file, HttpServletRequest request) {
        if(file == null)
            return ServerResponse.createBySuccess();
        String path = request.getSession().getServletContext().getRealPath("upload");
        String targetFileName = iFileService.upload(file, path);
        String imgUrl = PropertiesUtil.getProperty("ftp.server.http.prefix") + targetFileName;
        return ServerResponse.createBySuccess(imgUrl);
    }

    @RequestMapping("/createrecipe.do")
    @ResponseBody
    public ServerResponse<String> createRecipe(@RequestBody RecipeSimpleVO recipeSimpleVO, HttpServletRequest request) {
        String sessonId = CookieUtil.readLoginToken(request);
        if(sessonId == null)
            return ServerResponse.createByError();
        String userString = RedisPoolUtil.get(sessonId);
        KkfccUser user = JsonUtil.string2Obj(userString, KkfccUser.class);
        if(user == null)
            return ServerResponse.createByError();
        recipeSimpleVO.setUserId(user.getId());
        return iRecipeService.createRecipe(recipeSimpleVO);
    }

}
