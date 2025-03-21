package com.paryas.backend.service;

import com.paryas.backend.model.Course;
import java.util.List;
import java.util.Optional;

public interface CourseService {
    List<Course> getAllCourses();
    
    Optional<Course> getCourseById(Long id);
    
    Course createCourse(Course course);
    
    Course updateCourse(Long id, Course course);
    
    void deleteCourse(Long id);
    
    List<Course> searchCourses(String query);
    
    List<Course> getCoursesByCategory(String category);
    
    List<Course> getCoursesByLevel(String level);
    
    List<String> getAllCategories();
    
    List<Course> getCoursesByMaxPrice(Double maxPrice);
} 