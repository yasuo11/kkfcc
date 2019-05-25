package com.xiuchu.kkfcc.vo;

public class UserVO {

    private String userName;
    private int recipe_collects;
    private int menu_collects;
    private int works;
    private int recipes;
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    private String image;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getRecipe_collects() {
        return recipe_collects;
    }

    public void setRecipe_collects(int recipe_collects) {
        this.recipe_collects = recipe_collects;
    }

    public int getMenu_collects() {
        return menu_collects;
    }

    public void setMenu_collects(int menu_collects) {
        this.menu_collects = menu_collects;
    }

    public int getWorks() {
        return works;
    }

    public void setWorks(int works) {
        this.works = works;
    }

    public int getRecipes() {
        return recipes;
    }

    public void setRecipes(int recipes) {
        this.recipes = recipes;
    }
}
