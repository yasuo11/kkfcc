package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_user")
public class KkfccUser {
    private Integer id;

    /**
     * 用户名
     */
    @Column(name = "login_name")
    private String loginName;

    /**
     * 用户密码MD5加密
     */
    private String password;

    /**
     * 自我介绍
     */
    @Column(name = "self_introduction")
    private String selfIntroduction;

    /**
     * 0男 1女
     */
    private Integer sex;

    /**
     * 昵称
     */
    @Column(name = "nick_name")
    private String nickName;

    /**
     * 用户头像图片地址, json格式
     */
    private String image;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取用户名
     *
     * @return login_name - 用户名
     */
    public String getLoginName() {
        return loginName;
    }

    /**
     * 设置用户名
     *
     * @param loginName 用户名
     */
    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    /**
     * 获取用户密码MD5加密
     *
     * @return password - 用户密码MD5加密
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置用户密码MD5加密
     *
     * @param password 用户密码MD5加密
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取自我介绍
     *
     * @return self_introduction - 自我介绍
     */
    public String getSelfIntroduction() {
        return selfIntroduction;
    }

    /**
     * 设置自我介绍
     *
     * @param selfIntroduction 自我介绍
     */
    public void setSelfIntroduction(String selfIntroduction) {
        this.selfIntroduction = selfIntroduction;
    }

    /**
     * 获取0男 1女
     *
     * @return sex - 0男 1女
     */
    public Integer getSex() {
        return sex;
    }

    /**
     * 设置0男 1女
     *
     * @param sex 0男 1女
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * 获取昵称
     *
     * @return nick_name - 昵称
     */
    public String getNickName() {
        return nickName;
    }

    /**
     * 设置昵称
     *
     * @param nickName 昵称
     */
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    /**
     * 获取用户头像图片地址, json格式
     *
     * @return image - 用户头像图片地址, json格式
     */
    public String getImage() {
        return image;
    }

    /**
     * 设置用户头像图片地址, json格式
     *
     * @param image 用户头像图片地址, json格式
     */
    public void setImage(String image) {
        this.image = image;
    }
}