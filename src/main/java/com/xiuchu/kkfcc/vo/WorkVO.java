package com.xiuchu.kkfcc.vo;

import java.util.Date;

public class WorkVO {
    private String recipeId;
    private String recipeInfo;
    private Date createTime;    //作品创建时间
    private String imageUrl;    //返回的图片地址

    public String getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(String recipeId) {
        this.recipeId = recipeId;
    }

    public String getRecipeInfo() {
        return recipeInfo;
    }

    public void setRecipeInfo(String recipeInfo) {
        this.recipeInfo = recipeInfo;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
