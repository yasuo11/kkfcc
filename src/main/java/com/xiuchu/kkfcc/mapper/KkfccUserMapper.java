package com.xiuchu.kkfcc.mapper;

import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.util.MyMapper;
import org.apache.ibatis.annotations.Param;

public interface KkfccUserMapper extends MyMapper<KkfccUser> {

    int updateByPrimaryKeySelective(KkfccUser user);
}