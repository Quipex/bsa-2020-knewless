package com.knewless.core.path.dto;

import com.knewless.core.author.dto.AuthorShortDto;
import com.knewless.core.course.dto.CourseWithMinutesDto;
import com.knewless.core.tag.dto.TagDto;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
public class PathDetailsDto {
    private UUID id;
    private String name;
    private String description;
    private Date releasedDate;
    private List<CourseWithMinutesDto> courses;
    private List<TagDto> tags;
    private TagDto imageTag;
    private long duration;
    private AuthorShortDto author;
}
