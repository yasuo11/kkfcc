package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_menu")
public class KkfccMenu {
    private Integer id;

    private String title;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "collect_sum")
    private Integer collectSum;

    /**
     * 菜单描述
     */
    private String introduction;

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
     * @return title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title
     */
    public void setTitle(String title) {
        this.title = title;
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
     * @return collect_sum
     */
    public Integer getCollectSum() {
        return collectSum;
    }

    /**
     * @param collectSum
     */
    public void setCollectSum(Integer collectSum) {
        this.collectSum = collectSum;
    }

    /**
     * 获取菜单描述
     *
     * @return introduction - 菜单描述
     */
    public String getIntroduction() {
        return introduction;
    }

    /**
     * 设置菜单描述
     *
     * @param introduction 菜单描述
     */
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
}