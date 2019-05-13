package com.xiuchu.kkfcc.service.impl;

import com.xiuchu.kkfcc.mapper.KkfccMaterialCbookMapper;
import com.xiuchu.kkfcc.mapper.KkfccMaterialMapper;
import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccMaterial;
import com.xiuchu.kkfcc.pojo.KkfccMaterialCbook;
import com.xiuchu.kkfcc.service.IMaterialService;
import com.xiuchu.kkfcc.vo.MaterialVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("iMaterialServiceImpl")
public class IMaterialServiceImpl implements IMaterialService {

    @Autowired
    private KkfccMaterialMapper materialMapper;

    @Autowired
    private KkfccMaterialCbookMapper materialCbookMapper;

    public List<MaterialVO> queryMaterialByRecipeId(String recipeId) {
        if(recipeId == null || recipeId.equals(""))
            return new ArrayList<>();

        List<MaterialVO> res = new ArrayList<>();
        KkfccMaterialCbook materialCbook = new KkfccMaterialCbook();
        materialCbook.setCbookId(Integer.parseInt(recipeId));
        List<KkfccMaterialCbook> materialCbooks  = materialCbookMapper.select(materialCbook);
        for(KkfccMaterialCbook materialCbook1 : materialCbooks) {
            MaterialVO materialVO = new MaterialVO();
            KkfccMaterial kkfccMaterial = new KkfccMaterial();
            kkfccMaterial.setId(materialCbook1.getMaterialId());
            KkfccMaterial material = materialMapper.selectOne(kkfccMaterial);
            if(material != null)
               materialVO.setMaterial(material);
            materialVO.setUsage(materialCbook1.getUsages());
            res.add(materialVO);
        }

        return res;
    }


}
