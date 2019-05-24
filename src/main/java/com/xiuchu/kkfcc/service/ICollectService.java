package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.pojo.KkfccCmenuCollect;

import java.util.List;

public interface ICollectService {
    List<KkfccCmenuCollect> getAllCollect(Integer UserId);
}
