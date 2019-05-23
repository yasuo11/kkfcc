package com.xiuchu.kkfcc.pojo;

import java.util.Date;
import javax.persistence.*;

@Table(name = "kkfcc_comment")
public class KkfccComment {
    private Integer id;

    @Column(name = "work_id")
    private Integer workId;

    /**
     * 评论人的用户id
     */
    @Column(name = "user_id")
    private Integer userId;

    /**
     * 评论时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * 评论内容
     */
    private String message;

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
     * @return work_id
     */
    public Integer getWorkId() {
        return workId;
    }

    /**
     * @param workId
     */
    public void setWorkId(Integer workId) {
        this.workId = workId;
    }

    /**
     * 获取评论人的用户id
     *
     * @return user_id - 评论人的用户id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * 设置评论人的用户id
     *
     * @param userId 评论人的用户id
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 获取评论时间
     *
     * @return create_time - 评论时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置评论时间
     *
     * @param createTime 评论时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取评论内容
     *
     * @return message - 评论内容
     */
    public String getMessage() {
        return message;
    }

    /**
     * 设置评论内容
     *
     * @param message 评论内容
     */
    public void setMessage(String message) {
        this.message = message;
    }
}