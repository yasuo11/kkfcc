package com.xiuchu.kkfcc.util;

import lombok.extern.slf4j.Slf4j;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.selector.PlainText;


import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Slf4j
public class DownLoadUtils {

    /**
     * 下载图片工具
     *
     * @param urlString
     *            图片链接地址
     * @param filename
     *            图片的文件名字
     * @param savePath
     *            图片保存的路径
     * @throws Exception
     */
    private static ExecutorService executorService = Executors.newFixedThreadPool(5);
    private static void download(String urlString, String savePath) throws Exception {
        // 构造URL
        URL url = new URL(urlString);
        // 打开连接
        URLConnection con = url.openConnection();
        // 设置请求头
        con.addRequestProperty("User-Agent", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)");
        // 设置请求超时为5s
        con.setConnectTimeout(5 * 1000);
        // 输入流
        InputStream is = con.getInputStream();
        String filename = generateRandonFileName(".jpg");
        // 1K的数据缓冲
        byte[] bs = new byte[1024];
        // 读取到的数据长度
        int len;
        // 输出的文件流
        File sf = new File(savePath);
        if (!sf.exists()) {
            sf.mkdirs();
        }
        OutputStream os = new FileOutputStream(sf.getPath() + "/" + filename);
        // 开始读取
        while ((len = is.read(bs)) != -1) {
            os.write(bs, 0, len);
        }
        // 完毕，关闭所有链接
        os.close();
        is.close();
    }



    /**
     * 获得随机UUID文件名
     *
     * @param fileName
     * @return
     */
    public static String generateRandonFileName(String fileName) {
        // 获得扩展名
        String ext = fileName.substring(fileName.lastIndexOf("."));
        return UUID.randomUUID().toString().replace("-", "") + ext;
    }


    public static void download(ResultItems resultItems) {
        String authorUrl = resultItems.get("authorImg").toString();
        String recipeUrl = resultItems.get("recipeImg").toString();
        List<String> stepUrls = resultItems.get("stepImage");

        executorService.submit(() -> {
            try {
                download(authorUrl, "/Users/apple/img/author");
            } catch (Exception e) {
                log.warn(authorUrl + "的图片下载出现错误！" );
                e.printStackTrace();
            }

            log.info(authorUrl + "下载成功, 路径为:" + "/Users/apple/img/step/" + authorUrl);

        });

        executorService.submit(() -> {
            try {
                download(recipeUrl, "/Users/apple/img/recipe");
            } catch (Exception e) {
                log.warn(recipeUrl + "的图片下载出现错误！" );
                e.printStackTrace();
            }

            log.info(recipeUrl + "下载成功, 保存路径为:" + "/Users/apple/img/step/" + recipeUrl);

        });

        for(String stepUrl : stepUrls) {
            executorService.submit(() -> {
                try {
                    download(stepUrl, "/Users/apple/img/step");
                } catch (Exception e) {
                    log.warn(stepUrl + "的图片下载出现错误！" );
                    e.printStackTrace();
                }

                log.info(stepUrl + "下载成功,保存 路径为:" + "/Users/apple/img/step/" + stepUrl);

            });
        }

    }



}
