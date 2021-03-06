package com.knewless.core.lecture.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class LectureDto {
    private UUID id;
    private String name;
    private String description;
    private String webLink;
    private String urlOrigin;
    private String url1080;
    private String url720;
    private String url480;
    private String previewImage;
    private int duration;
    private int progress;
    private boolean favourite;
    private int index;
}
