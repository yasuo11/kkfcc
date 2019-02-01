package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_category")
public class KkfccCategory {
    private Integer id;

    /**
     * 类别名
     */
    private String name;

    /**
     * 当父类别为0时说明是当前节点为跟节点
     */
    @Column(name = "parent_id")
    private Integer parentId;

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
     * 获取类别名
     *
     * @return name - 类别名
     */
    public String getName() {
        return name;
    }

    /**
     * 设置类别名
     *
     * @param name 类别名
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取当父类别为0时说明是当前节点为跟节点
     *
     * @return parent_id - 当父类别为0时说明是当前节点为跟节点
     */
    public Integer getParentId() {
        return parentId;
    }

    /**
     * 设置当父类别为0时说明是当前节点为跟节点
     *
     * @param parentId 当父类别为0时说明是当前节点为跟节点
     */
    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }
}