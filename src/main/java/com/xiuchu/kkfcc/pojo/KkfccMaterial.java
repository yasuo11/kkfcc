package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_material")
public class KkfccMaterial {
    private Integer id;

    /**
     * 食材名
     */
    private String name;

    /**
     * 食材图片地址, json格式
     */
    private String image;

    /**
     * 食材介绍
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
     * 获取食材名
     *
     * @return name - 食材名
     */
    public String getName() {
        return name;
    }

    /**
     * 设置食材名
     *
     * @param name 食材名
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取食材图片地址, json格式
     *
     * @return image - 食材图片地址, json格式
     */
    public String getImage() {
        return image;
    }

    /**
     * 设置食材图片地址, json格式
     *
     * @param image 食材图片地址, json格式
     */
    public void setImage(String image) {
        this.image = image;
    }

    /**
     * 获取食材介绍
     *
     * @return introduction - 食材介绍
     */
    public String getIntroduction() {
        return introduction;
    }

    /**
     * 设置食材介绍
     *
     * @param introduction 食材介绍
     */
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
}