package com.xiuchu.kkfcc.spider;

import com.xiuchu.kkfcc.util.FTPUtil;
import com.xiuchu.kkfcc.util.PropertiesUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.net.ftp.FTPClient;
import sun.net.ftp.FtpClient;


import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
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
    private static File download(String urlString, String savePath) throws Exception {
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
        File sf = new File(savePath, filename);
        if (!sf.exists()) {
            sf.createNewFile();
        }
        OutputStream os = new FileOutputStream(sf.getPath());
        // 开始读取
        while ((len = is.read(bs)) != -1) {
            os.write(bs, 0, len);
        }
        // 完毕，关闭所有链接
        os.close();
        is.close();
        return sf;
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


    public static List<String> download(List<String> urlList) {
        List<File> fileList = new ArrayList<>();
        List<String> imgUrl = new ArrayList<>();
        for(int i = 0; i < urlList.size(); i++) {
            if(urlList.get(i) == null || urlList.equals("")) {
                imgUrl.add("");
                continue;
            }
            String url = urlList.get(i);
            File file;
            try {
                file = download(url, "/Users/apple/img/");
            } catch (Exception e) {
                log.warn(url + "的图片下载出现错误！" );
                e.printStackTrace();
                return null;
            }
            log.info(url + "下载成功, 路径为:" + file.getAbsolutePath());
            fileList.add(file);
        }
        try {
            if(!FTPUtil.uploadFile(fileList))
                log.error("上传ftp失败");
        } catch (IOException e) {
            log.error("上传ftp失败");
            e.printStackTrace();
            return null;
        }
        for(File file : fileList) {
            String ftpUrl = PropertiesUtil.getProperty("ftp.server.http.prefix") + file.getName();
            imgUrl.add(ftpUrl);
            log.info("上传ftp成功，路径为：" + ftpUrl);
            if(file.delete())
                log.info("成功删除本地文件");
            else
                log.info("删除本地文件失败");
        }

        return imgUrl;
    }



}
