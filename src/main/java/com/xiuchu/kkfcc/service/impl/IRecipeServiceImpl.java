package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccCbookMapper;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import com.xiuchu.kkfcc.vo.RecipeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("iRecipeService")
public class IRecipeServiceImpl implements IRecipeService {
    @Autowired
    private KkfccCbookMapper cbookMapper;

    // 得到推荐菜谱，因为数据少暂时先不筛选，后续需要改进
    // TODO
    public ServerResponse<List<RecipeVO>> recipeRecommand() {
        List<KkfccCbook> list = cbookMapper.selectAll();
        List<RecipeVO> res = new ArrayList<>();
        for(int i = 0; i < 5 && i < list.size(); i++) {
            RecipeVO recipeVo = new RecipeVO();
            recipeVo.setId(list.get(i).getId());
            String suffix = list.get(i).getImage();
            recipeVo.setImageUrl(PropertiesUtil.getProperty("local.server.http.prefix") + suffix);
            res.add(recipeVo);
        }


        return ServerResponse.createBySuccess(res);

    }

    // 得到新秀菜谱，因为数据少暂时先不筛选，后续需要改进
    // TODO

    public ServerResponse<List<RecipeVO>> newRecipe() {
        List<KkfccCbook> list = cbookMapper.selectAll();
        List<RecipeVO> res = new ArrayList<>();

        for(int i = 0; i < 5 && i < list.size(); i++) {
            RecipeVO recipeVo = new RecipeVO();
            recipeVo.setId(list.get(i).getId());
            String suffix = list.get(i).getImage();
            recipeVo.setImageUrl(PropertiesUtil.getProperty("ftp.server.http.prefix") + suffix);
            res.add(recipeVo);
        }

        return ServerResponse.createBySuccess(res);

    }

    // 根据id查询具体菜谱

    public ServerResponse<KkfccCbook> queryRecipe(String id) {
        Integer curId = Integer.parseInt(id);
        KkfccCbook cbook = new KkfccCbook();
        cbook.setId(curId);
        cbook = cbookMapper.selectOne(cbook);
        String suffix = cbook.getImage();
        cbook.setImage(PropertiesUtil.getProperty("ftp.server.http.prefix") + suffix);
        return ServerResponse.createBySuccess(cbook);
    }



}
