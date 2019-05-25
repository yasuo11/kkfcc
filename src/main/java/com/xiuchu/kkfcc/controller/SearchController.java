package com.xiuchu.kkfcc.controller;

import com.xiuchu.kkfcc.elasticsearch.ElasticsearchUtil;
import com.xiuchu.kkfcc.elasticsearch.EsPage;

import com.xiuchu.kkfcc.pojo.KkfccCbook;
import com.xiuchu.kkfcc.pojo.KkfccUser;
import com.xiuchu.kkfcc.service.IRecipeService;
import com.xiuchu.kkfcc.service.IUserService;
import com.xiuchu.kkfcc.vo.QRecipeVO;
import org.apdplat.word.WordSegmenter;
import org.apdplat.word.segmentation.Word;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.WildcardQueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@EnableAutoConfiguration
@Controller
@RequestMapping("/search")
public class SearchController {

    @Autowired
    ElasticsearchUtil elasticsearchUtil;

    @Autowired
    IRecipeService iRecipeService;
    @Autowired
    IUserService iUserService;
    @RequestMapping("/hint.do")
    @ResponseBody
    public List<String> searchHint(String keyWord) {
        WildcardQueryBuilder queryBuilder = QueryBuilders.wildcardQuery("recipeName", "*" + keyWord + "*");
        EsPage esPage = ElasticsearchUtil.search(queryBuilder, "recipe", "info", 0, 10, "recipeName,id", null, "recipeName");

        List<Map<String, Object>> recordList = esPage.getRecordList();
        List<String> res = new ArrayList<>();
        for(Map<String, Object> map : recordList) {
            res.add((String)map.get("recipeName"));
        }
        return res;
    }

    @RequestMapping("/searchRecipe")
    public String search(String keyWord, Model model) {
        List<QRecipeVO> qRecipeVOList = new ArrayList<>();
        List<Word> words = WordSegmenter.seg(keyWord);

        for(Word word : words) {
            WildcardQueryBuilder queryBuilder = QueryBuilders.wildcardQuery("recipeName", "*" + word.getText() + "*");
            EsPage esPage = ElasticsearchUtil.search(queryBuilder, "recipe", "info", 0, 10, "recipeName,id", null, "recipeName");
            List<Map<String, Object>> recordList = esPage.getRecordList();
            for(Map<String, Object> map : recordList) {
                QRecipeVO qRecipeVO = new QRecipeVO();
                qRecipeVO.setRecipeName("<p>" + map.get("recipeName") + "</p>");
                Integer recipeId = (Integer)map.get("id");
                KkfccCbook cbook = iRecipeService.selectRecipe(recipeId);
                qRecipeVO.setCollectSum(cbook.getCollectionSum());
                qRecipeVO.setImgUrl(cbook.getImage());
                KkfccUser user = new KkfccUser();
                user.setId(cbook.getUserId());
                user = iUserService.findUser(user);
                qRecipeVO.setAuthorName(user.getNickName());
                qRecipeVOList.add(qRecipeVO);
                qRecipeVO.setRecipeId(recipeId);
            }

        }
        model.addAttribute("recipeVOList", qRecipeVOList);
        return qRecipeVOList.size() == 0? "search_hint" : "search_recipe";
    }

}
