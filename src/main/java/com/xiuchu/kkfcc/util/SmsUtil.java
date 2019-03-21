package com.xiuchu.kkfcc.util;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;

import java.util.Random;

public class SmsUtil {

    private static String generateRandom() {
        StringBuilder sb = new StringBuilder();
        Random ra = new Random();
        for(int i = 0; i <= 5; i++)
            sb.append(ra.nextInt(10));
        return sb.toString();
    }

    public static void sendSms(String phoneNumber) {
        DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", PropertiesUtil.getProperty("aliyun.accessKeyId"), PropertiesUtil.getProperty("aliyun.secret"));
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        String randomString = generateRandom();
        randomString = "{\"code\":"  + randomString + "}";
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        request.putQueryParameter("PhoneNumbers", phoneNumber);
        request.putQueryParameter("SignName", "秀厨网");
        request.putQueryParameter("TemplateCode", "SMS_161595272");
        request.putQueryParameter("TemplateParam", randomString);
        try {
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        sendSms("18379525422");
    }
}
