package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.mapper.KkfccCommentMapper;
import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import com.xiuchu.kkfcc.mapper.KkfccWorksMapper;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.pojo.KkfccWorks;
import com.xiuchu.kkfcc.service.IWorkService;
import com.xiuchu.kkfcc.vo.WorkVO;
import com.xiuchu.kkfcc.vo.otherWorkVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("iWorkService")
public class IWorkServiceImpl implements IWorkService {
    @Autowired
    KkfccWorksMapper kkfccWorksMapper;
    @Autowired
    KkfccCommentMapper kkfccCommentMapper;
    @Autowired
    KkfccUserMapper kkfccUserMapper;

    @Override
    public void workUpload(WorkVO vo) {
        KkfccWorks works=new KkfccWorks();
        works.setCbookId(vo.getRecipeId());
        works.setCreateTime(vo.getCreateTime());
        works.setWorkInfo(vo.getRecipeInfo());
        works.setImage(vo.getImageUrl());
        works.setUserId(vo.getUserId());
        kkfccWorksMapper.insert(works);
    }

    @Override
    public List<otherWorkVO> getOthersWork(Integer recipeId) {
        KkfccWorks temp=new KkfccWorks();
        temp.setCbookId(recipeId);
        List<KkfccWorks> works = kkfccWorksMapper.select(temp);
        List<otherWorkVO> otherWorkVOS = new ArrayList<>();
        for (KkfccWorks work : works) {
            otherWorkVO owv = new otherWorkVO();
            owv.setWorkCreateTime(work.getCreateTime());
            KkfccUser user = new KkfccUser();
            user.setId(work.getUserId());
            owv.setWorkUserId(work.getUserId());
            String Author=kkfccUserMapper.selectOne(user).getNickName(); //用户名字
            owv.setWorkAuthor(Author);
            owv.setRecipeId(recipeId);
            otherWorkVOS.add(owv);
        }
        return otherWorkVOS;
    }

    @Override
    public KkfccWorks getUserWorkDetail(Integer userId, Integer recipeId) {
        KkfccWorks work = new KkfccWorks();
        work.setUserId(userId);         //作品创作者的id
        work.setCbookId(recipeId);      //作品关联的菜谱id
        return kkfccWorksMapper.selectOne(work);
    }
}
