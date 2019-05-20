package com.xiuchu.kkfcc.vo;

import java.util.List;

public class RecipeSimpleVO {
    private String name;
    private String desc;
    private List<MaterialVO> materialVOList;
    private List<StepVO> stepVOList;
    private String imgUrl;
    private Integer userId;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<MaterialVO> getMaterialVOList() {
        return materialVOList;
    }

    public void setMaterialVOList(List<MaterialVO> materialVOList) {
        this.materialVOList = materialVOList;
    }

    public List<StepVO> getStepVOList() {
        return stepVOList;
    }

    public void setStepVOList(List<StepVO> stepVOList) {
        this.stepVOList = stepVOList;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
