package com.xiuchu.kkfcc.mapper;

import com.xiuchu.kkfcc.pojo.KkfccMenu;
import com.xiuchu.kkfcc.util.MyMapper;

public interface KkfccMenuMapper extends MyMapper<KkfccMenu> {
    int updateByPrimaryKeySelective(KkfccMenu menu);
}