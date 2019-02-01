package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_user_friends")
public class KkfccUserFriends {
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "friends_id")
    private Integer friendsId;

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
     * @return friends_id
     */
    public Integer getFriendsId() {
        return friendsId;
    }

    /**
     * @param friendsId
     */
    public void setFriendsId(Integer friendsId) {
        this.friendsId = friendsId;
    }
}