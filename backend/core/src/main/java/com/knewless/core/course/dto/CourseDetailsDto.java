package com.knewless.core.course.dto;

import com.knewless.core.course.model.Level;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDetailsDto {
    private UUID id;
    private String name;
    private Level level;
    private UUID authorId;
    private String authorName;
    private String imageSrc;
    private Date releasedDate;
    private long duration;
    private String description;
    private int rating;
    private int lectures;
    private List<String> tags;
    private long members;
    private int ratingCount;
}
