package com.xiuchu.kkfcc.util;

import com.xiuchu.kkfcc.mapper.KkfccUserMapper;
import org.apache.commons.net.ftp.FTPClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;



public class FTPUtil {

    private static final Logger logger = LoggerFactory.getLogger(FTPUtil.class);

    private static String ftpIp = PropertiesUtil.getProperty("ftp.server.ip");
    private static String ftpUser = PropertiesUtil.getProperty("ftp.user");
    private static String ftpPass = PropertiesUtil.getProperty("ftp.pass");
    public FTPUtil(String ip, int port, String user, String pwd) {
        this.ip = ip;
        this.port = port;
        this.user = user;
        this.pwd = pwd;
    }

    private static FTPClient getFtpClient() {
        FTPClient ftpClient = new FTPClient();
        boolean isSuccess = true;
        try {
            ftpClient.connect(ftpIp);
            isSuccess = ftpClient.login(ftpUser, ftpPass);
        } catch (IOException e) {
            logger.error("连接FTP服务器异常", e);
        }
        if(!isSuccess)
            return null;
        return ftpClient;
    }

    public static boolean uploadFtpFile(List<File> List) throws IOException {
        FTPClient client = getFtpClient();
        boolean uploaded = true;
        FileInputStream fis = null;
        //连接FTP服务器
        try {
            ftpClient.changeWorkingDirectory("/img");
            ftpClient.setBufferSize(1024);
            ftpClient.setControlEncoding("UTF-8");
            ftpClient.setFileType(FTPClient.BINARY_FILE_TYPE);
            ftpClient.enterLocalPassiveMode();      //以被动模式连接
            for (File fileItem : List) {
                logger.info("正在上传文件名为：" + fileItem.getName() + "的文件");
                fis = new FileInputStream(fileItem);
                ftpClient.storeFile(fileItem.getName(), fis);
                logger.info("文件名为：" + fileItem.getName() + "的文件上传成功");
            }

        } catch (IOException e) {
            logger.error("上传文件异常", e);
            uploaded = false;
            e.printStackTrace();
        } finally {
            fis.close();
            ftpClient.disconnect();
        }
        return uploaded;
    }

    public static boolean uploadFile(List<File> fileList) throws IOException {
        FTPUtil ftpUtil = new FTPUtil(ftpIp, 21, ftpUser, ftpPass);
        logger.info("开始连接ftp服务器");
        boolean result = ftpUtil.uploadFile("/img", fileList);
        logger.info("开始连接ftp服务器,结束上传,上传结果:{}", result);
        return result;
    }


    private boolean uploadFile(String remotePath, List<File> fileList) throws IOException {
        boolean uploaded = true;
        FileInputStream fis = null;
        //连接FTP服务器
        while(!connectServer()) {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        try {
            ftpClient.changeWorkingDirectory(remotePath);
            ftpClient.setBufferSize(1024);
            ftpClient.setControlEncoding("UTF-8");
            ftpClient.setFileType(FTPClient.BINARY_FILE_TYPE);
            ftpClient.enterLocalPassiveMode();      //以被动模式连接
            for (File fileItem : fileList) {
                logger.info("正在上传文件名为：" + fileItem.getName() + "的文件");
                fis = new FileInputStream(fileItem);
                ftpClient.storeFile(fileItem.getName(), fis);
                logger.info("文件名为：" + fileItem.getName() + "的文件上传成功");
            }

            } catch (IOException e) {
                logger.error("上传文件异常", e);
                uploaded = false;
                e.printStackTrace();
            } finally {
                fis.close();
                ftpClient.disconnect();
            }
        return uploaded;
    }


    public static boolean connectServer() {
        boolean isSuccess = false;
        ftpClient = new FTPClient();
        try {
            ftpClient.connect(ftpIp);
            isSuccess = ftpClient.login(ftpUser, ftpPass);
            logger.info("连接成功");
        } catch (IOException e) {
            logger.error("连接FTP服务器异常", e);
        }
        return isSuccess;
    }


    private String ip;
    private int port;
    private String user;
    private String pwd;
    public static FTPClient ftpClient;

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }


}
