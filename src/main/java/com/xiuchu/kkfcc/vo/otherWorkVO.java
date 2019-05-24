package com.xiuchu.kkfcc.vo;

import java.util.Date;

public class otherWorkVO {
    private String workName;    //作品名
    private String workAuthor;  //作者名
    private Date workCreateTime;//作品创建时间
    private Integer workUserId; //作者id
    private Integer recipeId;   //作品对应的菜谱id

    public Integer getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Integer recipeId) {
        this.recipeId = recipeId;
    }

    public Integer getWorkUserId() {
        return workUserId;
    }

    public void setWorkUserId(Integer workUserId) {
        this.workUserId = workUserId;
    }

    public String getWorkAuthor() {
        return workAuthor;
    }

    public void setWorkAuthor(String workAuthor) {
        this.workAuthor = workAuthor;
    }

    public String getWorkName() {
        return workName;
    }

    public void setWorkName(String workName) {
        this.workName = workName;
    }


    public Date getWorkCreateTime() {
        return workCreateTime;
    }

    public void setWorkCreateTime(Date workCreateTime) {
        this.workCreateTime = workCreateTime;
    }
}
