package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_cbook_collect")
public class KkfccCbookCollect {
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "cbook_id")
    private Integer cbookId;

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
     * @return cbook_id
     */
    public Integer getCbookId() {
        return cbookId;
    }

    /**
     * @param cbookId
     */
    public void setCbookId(Integer cbookId) {
        this.cbookId = cbookId;
    }
}