package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.mapper.KkfccCmenuCollectMapper;
import com.xiuchu.kkfcc.pojo.KkfccCmenuCollect;
import com.xiuchu.kkfcc.service.ICollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("iCollectService")
public class ICollectServiceImpl implements ICollectService {
    @Autowired
    KkfccCmenuCollectMapper kkfccCmenuCollectMapper;
    @Override
    public List<KkfccCmenuCollect> getAllCollect(Integer UserId) {
        KkfccCmenuCollect temp = new KkfccCmenuCollect();
        temp.setUserId(UserId);
        return kkfccCmenuCollectMapper.select(temp);
    }
}
