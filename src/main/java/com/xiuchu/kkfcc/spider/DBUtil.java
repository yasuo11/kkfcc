package com.xiuchu.kkfcc.spider;

import com.xiuchu.kkfcc.KkfccApplication;
import com.xiuchu.kkfcc.mapper.*;
import com.xiuchu.kkfcc.pojo.*;
import com.xiuchu.kkfcc.util.FTPUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.net.ftp.FTPClient;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Spider;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
public class DBUtil {


    private static KkfccUserMapper userMapper;
    private static KkfccCbookMapper cbookMapper;
    private static KkfccMaterialMapper materialMapper;
    private static KkfccMaterialCbookMapper materialCbookMapper;
    private static KkfccCbookStepMapper cbookStepMapper;
    private static ApplicationContext applicationContext;

    public static void story(ResultItems resultItems) {
        String authorName = resultItems.get("authorName");
        String authorImg = resultItems.get("authorImg");
        String recipeName = resultItems.get("recipeName");
        String recipeImg = resultItems.get("recipeImg");
        String description = resultItems.get("description");
        String tip = resultItems.get("tip");
        List<String> ingredients = resultItems.get("ingredient");
        List<String> units = resultItems.get("unit");
        List<String> stepIntroductions = resultItems.get("stepIntroduction");
        List<String> stepImage = resultItems.get("stepImage");
        List<String> urlList = new ArrayList<>();
        urlList.add(recipeImg); urlList.add(authorImg);
        urlList.addAll(stepImage);
        List<String> ImgUrl = DownLoadUtils.download(urlList);
        List<String> stepImgUrls = DownLoadUtils.download(stepImage);
        KkfccCbook cbook = new KkfccCbook();
        cbook.setIntroduction(description);
        cbook.setName(recipeName);
        cbook.setImage(ImgUrl.get(0));
        KkfccUser user = new KkfccUser();
        user.setNickName(authorName);
        KkfccUser findUser = userMapper.selectOne(user);
        if(findUser == null) {
            user.setLoginName(UUID.randomUUID().toString());
            user.setImage(ImgUrl.get(1));
            System.out.println(description);

            userMapper.insertUseGeneratedKeys(user);
        }else {
            user = findUser;
        }
        cbook.setUserId(user.getId());
        cbook.setStuff(tip);
        cbookMapper.insertUseGeneratedKeys(cbook);
        List<KkfccMaterial> materials = new ArrayList<>();
        for(String ingredient : ingredients) {
            KkfccMaterial material = new KkfccMaterial();
            material.setName(ingredient);
            KkfccMaterial findMaterial = materialMapper.selectOne(material);
            if(findMaterial == null)
                materialMapper.insertUseGeneratedKeys(material);
            else
                material = findMaterial;
            materials.add(material);
        }
        for(int i = 0; i < materials.size(); i++) {
            KkfccMaterialCbook materialCbook = new KkfccMaterialCbook();
            materialCbook.setCbookId(cbook.getId());
            materialCbook.setUsages(units.get(i));
            materialCbook.setMaterialId(materials.get(i).getId());
            materialCbookMapper.insertUseGeneratedKeys(materialCbook);
        }

        for(int j = 0; j < stepIntroductions.size(); j++) {
            KkfccCbookStep cbookStep = new KkfccCbookStep();
            cbookStep.setSindex(j);
            cbookStep.setCbookId(cbook.getId());
            cbookStep.setDetails(stepIntroductions.get(j));
            cbookStep.setImage(stepImgUrls.get(j));
            cbookStepMapper.insertUseGeneratedKeys(cbookStep);
        }

    }

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(KkfccApplication.class, args);
        SpringApplicationContextUtil.setApplicationContext(applicationContext);
        userMapper = applicationContext.getBean(KkfccUserMapper.class);
        cbookMapper = applicationContext.getBean(KkfccCbookMapper.class);
        materialMapper = applicationContext.getBean(KkfccMaterialMapper.class);
        cbookStepMapper = applicationContext.getBean(KkfccCbookStepMapper.class);
        materialCbookMapper = applicationContext.getBean(KkfccMaterialCbookMapper.class);
        XiuchuProcessor xiuchuSipder = new XiuchuProcessor();
        Spider.create(xiuchuSipder).addUrl("http://www.xiachufang.com/category/")
                .thread(5).run();

    }
}
