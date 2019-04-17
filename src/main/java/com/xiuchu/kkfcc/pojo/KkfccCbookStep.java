package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_cbook_step")
public class KkfccCbookStep {
    private Integer id;

    @Column(name = "cbook_id")
    private Integer cbookId;

    private String image;

    private Integer sindex;

    private String details;

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
     * @return cbook_id
     */
    public Integer getCbookId() {
        return cbookId;
    }

    /**
     * @param cbookId
     */
    public void setCbookId(Integer cbookId) {
        this.cbookId = cbookId;
    }

    /**
     * @return image
     */
    public String getImage() {
        return image;
    }

    /**
     * @param image
     */
    public void setImage(String image) {
        this.image = image;
    }

    /**
     * @return sindex
     */
    public Integer getSindex() {
        return sindex;
    }

    /**
     * @param sindex
     */
    public void setSindex(Integer sindex) {
        this.sindex = sindex;
    }

    /**
     * @return details
     */
    public String getDetails() {
        return details;
    }

    /**
     * @param details
     */
    public void setDetails(String details) {
        this.details = details;
    }
}