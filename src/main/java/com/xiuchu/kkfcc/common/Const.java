package com.xiuchu.kkfcc.common;

public class Const {

    public static final String CURRENT_USER = "currentUser";

    public interface RedisCacheExtime {
        int REDIS_SESSION_EXTIME = 60 * 60 * 24;  //24小时
        int REDIS_SMS_EXTIME = 60 * 10;       //600S
    }
}
