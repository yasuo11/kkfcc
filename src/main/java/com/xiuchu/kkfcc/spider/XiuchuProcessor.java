package com.xiuchu.kkfcc.spider;

import com.xiuchu.kkfcc.KkfccApplication;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.selector.Selectable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Pattern;

@Slf4j
public class XiuchuProcessor implements PageProcessor {

    public static final String URL_RECIPE = "http://www\\.xiachufang\\.com/recipe/\\d*/";
    public static final String URL_CATEGORY = "http://www\\.xiachufang\\.com/category/";
    public static final String URL_CATEGORY_PAGE = "http://www\\.xiachufang\\.com/category/\\d+/\\?page=\\d+";
    private Site site = Site
            .me()
            .setDomain("xiachufang.com")
            .setSleepTime(3000)
            .setUserAgent(
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.65 Safari/537.31");

    // key -> ID   value -> Name
    private HashMap<String, String> categoryMap = new HashMap<>();
    // key -> ID    value -> Name
    private HashMap<String, String> recipeMap = new HashMap<>();
    // key -> categoryName    value -> List recipeName
    private HashMap<String, List<String>> categoryRecipeMap = new HashMap<>();
    // 取数字用的正则
    private Pattern pattern = Pattern.compile("\\D+");

    @Override
    public void process(Page page) {
        if(page.getUrl().regex(URL_CATEGORY_PAGE).match()) {

            String[] categoryIds = pattern.split(page.getUrl().regex(URL_CATEGORY_PAGE).toString());
            if(categoryIds.length > 2) {
                String categoryId = categoryIds[1];
                List<String> recipeURLs = page.getHtml().xpath("//div[@class=\"info pure-u\"]//a").links().regex(URL_RECIPE).all();
                List<String> recipeIds = new ArrayList<>();
                for(String recipeURL : recipeURLs) {
                    String recipeId = pattern.split(recipeURL)[1];
                    recipeIds.add(recipeId);
                }
                if(categoryRecipeMap.containsKey(categoryId)) {
                    List<String> preMap = categoryRecipeMap.get(categoryId);
                    preMap.addAll(recipeIds);
                    categoryRecipeMap.put(categoryId, preMap);
                }
                else
                    categoryRecipeMap.put(categoryId, recipeIds);
                page.addTargetRequests(recipeURLs);
            }

        }

        else if(page.getUrl().regex(URL_RECIPE).match()) {

            page.putField("authorName", page.getHtml().xpath("//span[@itemprop=\"name\"]/text()").toString());
            page.putField("authorImg", page.getHtml().xpath("//a[@class=\"avatar-link avatar\"]//img/@src").toString());
            page.putField("recipeImg", page.getHtml().xpath("//div[@class=\"cover image expandable block-negative-margin\"]//img/@src").toString());
            page.putField("description", page.getHtml().xpath("//div[@itemprop=\"description\"]/text()").toString());
            page.putField("ingredient", page.getHtml().xpath("//td[@class=\"name\"]/a/text()").all());
            page.putField("unit", page.getHtml().xpath("//td[@class=\"unit\"]/text()").all());
            page.putField("stepIntroduction", page.getHtml().xpath("//li[@class=\"container\"]/p/text()").all());
            page.putField("stepImage", page.getHtml().xpath("//li[@class=\"container\"]/img/@src").all());
            page.putField("tip", page.getHtml().xpath("//div[@class=\"tip\"]/text()").toString());


            String[] ids = pattern.split(page.getUrl().toString());
            if(ids.length > 1) {
                String recipeName = page.getHtml().xpath("//h1[@class=\"page-title\"]/text()").toString();
                page.putField("recipeName", recipeName);
                if(!recipeMap.containsKey(ids[1])) {
                    recipeMap.put(ids[1], recipeName.trim());
                    // TODO
                     DBUtil.story(page.getResultItems());
                }
            }

        }
        else if(page.getUrl().regex(URL_CATEGORY).match()) {
            Selectable aContents = page.getHtml().xpath("//div[@class=\"block-bg p40 font16\"]//a");
            List<String> categoryList = aContents.xpath("//a/text()").all();
            List<String> urlList = aContents.links().all();
            List<String> res = new ArrayList<>();
            for(int j = 0; j < urlList.size(); j++) {
                String url = urlList.get(j);
                String categoryName = categoryList.get(j);
                String[] ids = pattern.split(url);
                if(url.equals("") || ids.length <= 1)
                    continue;
                String categoryId = ids[1];
                if(!categoryMap.containsKey(categoryId)) {
                    categoryMap.put(categoryId, categoryName);
                    for(int i = 1; i <= 1; i++)
                        res.add(url + "?page=" + i);
                }
            }
            page.addTargetRequests(res.subList(0, 5));
        }
    }

    @Override
    public Site getSite() {
        return site;
    }

    public static void main(String[] args) {
        ApplicationContext run = SpringApplication.run(KkfccApplication.class, args);
        SpringApplicationContextUtil.setApplicationContext(run);

        XiuchuProcessor xiuchuSipder = new XiuchuProcessor();
        Spider.create(xiuchuSipder).addUrl("http://www.xiachufang.com/category/")
                .thread(5).run();
         HashMap<String, List<String>> categoryRecipeNameMap = new HashMap<>();
         for(String categoryId : xiuchuSipder.categoryRecipeMap.keySet()) {
             List<String> recipeIds = xiuchuSipder.categoryRecipeMap.get(categoryId);
             List<String> recipeNames = new ArrayList<>();
             for(String recipeId : recipeIds)
                 if(xiuchuSipder.recipeMap.containsKey(recipeId))
                    recipeNames.add(xiuchuSipder.recipeMap.get(recipeId));
             if(xiuchuSipder.categoryMap.containsKey(categoryId)) {
                 String categoryName = xiuchuSipder.categoryMap.get(categoryId);
                 categoryRecipeNameMap.put(categoryName, recipeNames);
             }
         }

         for(String categoryName : categoryRecipeNameMap.keySet()) {
             System.out.println(categoryName + ": " + Arrays.toString(categoryRecipeNameMap.get(categoryName).toArray()));
         }

    }
}
