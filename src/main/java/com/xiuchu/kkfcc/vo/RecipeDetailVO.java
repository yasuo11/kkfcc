package com.xiuchu.kkfcc.vo;

import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccCbookStep;

import java.util.List;

// 供前端显示菜谱详细信息
public class RecipeDetailVO {

    private KkfccCbook recipe;

    private List<KkfccCbookStep> steps;

    private String userName;

    private String userImage;


    private List<MaterialVO> materials;

    public List<MaterialVO> getMaterials() {
        return materials;
    }

    public void setMaterials(List<MaterialVO> materials) {
        this.materials = materials;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public KkfccCbook getRecipe() {
        return recipe;
    }

    public void setRecipe(KkfccCbook recipe) {
        this.recipe = recipe;
    }

    public List<KkfccCbookStep> getSteps() {
        return steps;
    }

    public void setSteps(List<KkfccCbookStep> steps) {
        this.steps = steps;
    }


}
