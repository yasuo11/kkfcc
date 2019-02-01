package com.xiuchu.kkfcc.pojo;

import java.util.Date;
import javax.persistence.*;

@Table(name = "kkfcc_works")
public class KkfccWorks {
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    /**
     * 关联的菜谱id
     */
    @Column(name = "cbook_id")
    private Integer cbookId;

    /**
     * 作品创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * 作品更新时间
     */
    @Column(name = "update_time")
    private Date updateTime;

    /**
     * 用户留言
     */
    private String message;

    /**
     * 作品图片地址, json格式
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
     * @return user_id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * @param userId
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 获取关联的菜谱id
     *
     * @return cbook_id - 关联的菜谱id
     */
    public Integer getCbookId() {
        return cbookId;
    }

    /**
     * 设置关联的菜谱id
     *
     * @param cbookId 关联的菜谱id
     */
    public void setCbookId(Integer cbookId) {
        this.cbookId = cbookId;
    }

    /**
     * 获取作品创建时间
     *
     * @return create_time - 作品创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置作品创建时间
     *
     * @param createTime 作品创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取作品更新时间
     *
     * @return update_time - 作品更新时间
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * 设置作品更新时间
     *
     * @param updateTime 作品更新时间
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取用户留言
     *
     * @return message - 用户留言
     */
    public String getMessage() {
        return message;
    }

    /**
     * 设置用户留言
     *
     * @param message 用户留言
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * 获取作品图片地址, json格式
     *
     * @return image - 作品图片地址, json格式
     */
    public String getImage() {
        return image;
    }

    /**
     * 设置作品图片地址, json格式
     *
     * @param image 作品图片地址, json格式
     */
    public void setImage(String image) {
        this.image = image;
    }
}