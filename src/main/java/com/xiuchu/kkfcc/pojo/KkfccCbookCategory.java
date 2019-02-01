package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_cbook_category")
public class KkfccCbookCategory {
    private Integer id;

    @Column(name = "cbook_id")
    private Integer cbookId;

    @Column(name = "category_id")
    private Integer categoryId;

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

    /**
     * @return category_id
     */
    public Integer getCategoryId() {
        return categoryId;
    }

    /**
     * @param categoryId
     */
    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}