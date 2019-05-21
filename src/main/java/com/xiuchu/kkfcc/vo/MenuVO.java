package com.xiuchu.kkfcc.vo;

import java.util.List;

public class MenuVO {
    private String title;
    private String authorName;
    private String desc;
    private String userImg;
    private Integer collectSum;
    private List<RecipeVO> recipeVOList;
    private Integer menuId;

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }


    public List<RecipeVO> getRecipeVOList() {
        return recipeVOList;
    }

    public void setRecipeVOList(List<RecipeVO> recipeVOList) {
        this.recipeVOList = recipeVOList;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getUserImg() {
        return userImg;
    }

    public void setUserImg(String userImg) {
        this.userImg = userImg;
    }

    public Integer getCollectSum() {
        return collectSum;
    }

    public void setCollectSum(Integer collectSum) {
        this.collectSum = collectSum;
    }
}
