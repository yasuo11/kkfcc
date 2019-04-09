package com.xiuchu.kkfcc.service;

import org.springframework.web.multipart.MultipartFile;


public interface IFileService {

    String upload(MultipartFile file, String path, Integer userId);
}
