package com.xiuchu.kkfcc.common;

public class Const {

    public static final String CURRENT_USER = "currentUser";

    public interface RedisCacheExtime {
        int REDIS_SESSION_EXTIME = 60 * 30;  //30分钟
        int REDIS_SMS_EXTIME = 60 * 5;       //300S
    }
}
