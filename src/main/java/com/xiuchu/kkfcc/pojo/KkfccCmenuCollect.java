package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_cmenu_collect")
public class KkfccCmenuCollect {
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "cmenu_id")
    private Integer cmenuId;

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
     * @return cmenu_id
     */
    public Integer getCmenuId() {
        return cmenuId;
    }

    /**
     * @param cmenuId
     */
    public void setCmenuId(Integer cmenuId) {
        this.cmenuId = cmenuId;
    }
}