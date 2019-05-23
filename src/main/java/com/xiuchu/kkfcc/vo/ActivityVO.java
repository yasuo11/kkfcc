package com.xiuchu.kkfcc.vo;

import java.util.Date;

public class ActivityVO {

    private String workImg;         //该作品图片
    private String workUserName;    //该作品用户名字
    private String workUserImg;    //该作品用户头像
    private Date workCreateTime;    //该作品创建时间
    private String workInfo;        //该作品描述
    private Integer workId;         //该作品id
    private String commentUsername; //评论人用户名
    private Integer commentUserId;  //评论人id
    private String commentUserImg;  //评论人用户头像
    private String  commentInfo;    //评论内容
    private Date commentTime;       //评论时间
    private Integer userId;         //登陆人id，用户名
    private String userName;

    public String getWorkUserImg() {
        return workUserImg;
    }

    public void setWorkUserImg(String workUserImg) {
        this.workUserImg = workUserImg;
    }

    public String getWorkImg() {
        return workImg;
    }

    public void setWorkImg(String workImg) {
        this.workImg = workImg;
    }

    public String getWorkUserName() {
        return workUserName;
    }

    public void setWorkUserName(String workUserName) {
        this.workUserName = workUserName;
    }

    public Date getWorkCreateTime() {
        return workCreateTime;
    }

    public void setWorkCreateTime(Date workCreateTime) {
        this.workCreateTime = workCreateTime;
    }

    public String getWorkInfo() {
        return workInfo;
    }

    public void setWorkInfo(String workInfo) {
        this.workInfo = workInfo;
    }

    public Integer getWorkId() {
        return workId;
    }

    public void setWorkId(Integer workId) {
        this.workId = workId;
    }

    public String getCommentUsername() {
        return commentUsername;
    }

    public void setCommentUsername(String commentUsername) {
        this.commentUsername = commentUsername;
    }

    public Integer getCommentUserId() {
        return commentUserId;
    }

    public void setCommentUserId(Integer commentUserId) {
        this.commentUserId = commentUserId;
    }

    public String getCommentUserImg() {
        return commentUserImg;
    }

    public void setCommentUserImg(String commentUserImg) {
        this.commentUserImg = commentUserImg;
    }

    public String getCommentInfo() {
        return commentInfo;
    }

    public void setCommentInfo(String commentInfo) {
        this.commentInfo = commentInfo;
    }

    public Date getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(Date commentTime) {
        this.commentTime = commentTime;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
