package com.xiuchu.kkfcc.service;

import com.xiuchu.kkfcc.vo.WorkVO;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

public interface IWorkService {
    public void workUpload(WorkVO vo);
}
