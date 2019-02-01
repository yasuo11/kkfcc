package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_menu_cbook")
public class KkfccMenuCbook {
    private Integer id;

    @Column(name = "menu_id")
    private Integer menuId;

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
     * @return menu_id
     */
    public Integer getMenuId() {
        return menuId;
    }

    /**
     * @param menuId
     */
    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
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