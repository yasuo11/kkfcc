package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.common.Const;
import com.xiuchu.kkfcc.common.ServerResponse;
import com.xiuchu.kkfcc.mapper.KkfccCbookMapper;
import com.xiuchu.kkfcc.mapper.KkfccCbookStepMapper;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccCbookStep;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import com.xiuchu.kkfcc.vo.RecipeDetailVO;
import com.xiuchu.kkfcc.vo.RecipeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Service("iRecipeService")
public class IRecipeServiceImpl implements IRecipeService {
    @Autowired
    private KkfccCbookMapper cbookMapper;
    @Autowired
    private KkfccCbookStepMapper stepMapper;
    @Autowired
    private KkfccUserMapper userMapper;

    // 得到推荐菜谱，因为数据少暂时先不筛选，后续需要改进
    // TODO
    public ServerResponse<List<RecipeVO>> recipeRecommand() {
        List<KkfccCbook> list = cbookMapper.selectAll();
        List<RecipeVO> res = new ArrayList<>();
        for(int i = 0; i < 5 && i < list.size(); i++) {
            RecipeVO recipeVo = new RecipeVO();
            recipeVo.setId(list.get(i).getId());
            recipeVo.setImageUrl(list.get(i).getImage());
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
            recipeVo.setImageUrl(list.get(i).getImage());
            res.add(recipeVo);
        }

        return ServerResponse.createBySuccess(res);

    }

    // 根据id查询具体菜谱

    public RecipeDetailVO queryRecipe(String id) {
        Integer curId = Integer.parseInt(id);
        KkfccCbook cbook = new KkfccCbook();
        cbook.setId(curId);
        cbook = cbookMapper.selectOne(cbook);
        KkfccUser user = new KkfccUser();
        user.setId(cbook.getUserId());
        KkfccUser curUser = userMapper.selectOne(user);
        cbook.setImage(cbook.getImage());

        RecipeDetailVO recipeDetailVO = new RecipeDetailVO();
        recipeDetailVO.setRecipe(cbook);
        if(curUser.getNickName() == null)
            recipeDetailVO.setUserName(curUser.getLoginName());
        else
            recipeDetailVO.setUserName(curUser.getNickName());
        recipeDetailVO.setUserImage(curUser.getImage());

        KkfccCbookStep step = new KkfccCbookStep();
        step.setCbookId(cbook.getId());

        List<KkfccCbookStep> steps = stepMapper.select(step);
        recipeDetailVO.setSteps(steps);
        for(KkfccCbookStep cur : steps)
            cur.setImage(cur.getImage());

        return recipeDetailVO;
    }



}
