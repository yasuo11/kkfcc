package com.xiuchu.kkfcc.mapper;

import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.util.MyMapper;

public interface KkfccCbookMapper extends MyMapper<KkfccCbook> {

    int insertRecipeReturnId(KkfccCbook recipe);

}