package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.pojo.KkfccWorks;
import com.xiuchu.kkfcc.vo.ActivityVO;
import com.xiuchu.kkfcc.vo.WorkVO;
import com.xiuchu.kkfcc.vo.otherWorkVO;
import org.elasticsearch.action.ingest.IngestActionForwarder;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface IWorkService {
    public void workUpload(WorkVO vo);
    public List<otherWorkVO> getOthersWork(Integer recipeId);
    public KkfccWorks getUserWorkDetail(Integer userId, Integer recipeId);
    List<ActivityVO> getActivityDetails();
    List<KkfccWorks> getAllWorks(Integer userId);
}
