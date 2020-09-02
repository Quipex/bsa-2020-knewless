package com.knewless.core.student.dto;

import com.knewless.core.course.dto.CourseProfileDto;
import lombok.Data;

import java.util.List;

@Data
public class StudentProfileDto {
    private int totalContentWatched;
    private List<CourseProfileDto> courses;
}
