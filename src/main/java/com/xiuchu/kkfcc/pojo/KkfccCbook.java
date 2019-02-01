package com.xiuchu.kkfcc.pojo;

import java.math.BigDecimal;
import javax.persistence.*;

@Table(name = "kkfcc_cbook")
public class KkfccCbook {
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    private String name;

    /**
     * 菜谱评分
     */
    private BigDecimal score;

    /**
     * 菜谱收藏数
     */
    @Column(name = "collection_sum")
    private Integer collectionSum;

    /**
     * 菜谱图片地址, json格式
     */
    private String image;

    /**
     * 菜谱描述
     */
    private String introduction;

    /**
     * 详细用料，json格式
     */
    private String stuff;

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
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取菜谱评分
     *
     * @return score - 菜谱评分
     */
    public BigDecimal getScore() {
        return score;
    }

    /**
     * 设置菜谱评分
     *
     * @param score 菜谱评分
     */
    public void setScore(BigDecimal score) {
        this.score = score;
    }

    /**
     * 获取菜谱收藏数
     *
     * @return collection_sum - 菜谱收藏数
     */
    public Integer getCollectionSum() {
        return collectionSum;
    }

    /**
     * 设置菜谱收藏数
     *
     * @param collectionSum 菜谱收藏数
     */
    public void setCollectionSum(Integer collectionSum) {
        this.collectionSum = collectionSum;
    }

    /**
     * 获取菜谱图片地址, json格式
     *
     * @return image - 菜谱图片地址, json格式
     */
    public String getImage() {
        return image;
    }

    /**
     * 设置菜谱图片地址, json格式
     *
     * @param image 菜谱图片地址, json格式
     */
    public void setImage(String image) {
        this.image = image;
    }

    /**
     * 获取菜谱描述
     *
     * @return introduction - 菜谱描述
     */
    public String getIntroduction() {
        return introduction;
    }

    /**
     * 设置菜谱描述
     *
     * @param introduction 菜谱描述
     */
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    /**
     * 获取详细用料，json格式
     *
     * @return stuff - 详细用料，json格式
     */
    public String getStuff() {
        return stuff;
    }

    /**
     * 设置详细用料，json格式
     *
     * @param stuff 详细用料，json格式
     */
    public void setStuff(String stuff) {
        this.stuff = stuff;
    }
}