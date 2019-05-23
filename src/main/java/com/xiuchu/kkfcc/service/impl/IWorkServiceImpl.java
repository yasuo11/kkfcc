package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.mapper.KkfccWorksMapper;
import com.xiuchu.kkfcc.pojo.KkfccWorks;
import com.xiuchu.kkfcc.service.IWorkService;
import com.xiuchu.kkfcc.vo.WorkVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
@Service("iWorkService")
public class IWorkServiceImpl implements IWorkService {
    @Autowired
    KkfccWorksMapper kkfccWorksMapper;
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
}
