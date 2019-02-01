package com.xiuchu.kkfcc.pojo;

import javax.persistence.*;

@Table(name = "kkfcc_material_cbook")
public class KkfccMaterialCbook {
    private Integer id;

    @Column(name = "material_id")
    private Integer materialId;

    @Column(name = "cbook_id")
    private Integer cbookId;

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
     * @return material_id
     */
    public Integer getMaterialId() {
        return materialId;
    }

    /**
     * @param materialId
     */
    public void setMaterialId(Integer materialId) {
        this.materialId = materialId;
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
}