package com.paryas.backend.service.impl;

import com.paryas.backend.model.Course;
import com.paryas.backend.repository.CourseRepository;
import com.paryas.backend.service.CourseService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CourseServiceImpl implements CourseService {
    
    private final CourseRepository courseRepository;

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    @Override
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course updateCourse(Long id, Course course) {
        Course existingCourse = courseRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Course not found with id: " + id));
        
        existingCourse.setTitle(course.getTitle());
        existingCourse.setCategory(course.getCategory());
        existingCourse.setImage(course.getImage());
        existingCourse.setDuration(course.getDuration());
        existingCourse.setStudents(course.getStudents());
        existingCourse.setLevel(course.getLevel());
        existingCourse.setDescription(course.getDescription());
        existingCourse.setPrice(course.getPrice());
        
        return courseRepository.save(existingCourse);
    }

    @Override
    public void deleteCourse(Long id) {
        if (!courseRepository.existsById(id)) {
            throw new EntityNotFoundException("Course not found with id: " + id);
        }
        courseRepository.deleteById(id);
    }

    @Override
    public List<Course> searchCourses(String query) {
        return courseRepository.searchCourses(query);
    }

    @Override
    public List<Course> getCoursesByCategory(String category) {
        return courseRepository.findByCategory(category);
    }

    @Override
    public List<Course> getCoursesByLevel(String level) {
        return courseRepository.findByLevel(level);
    }

    @Override
    public List<String> getAllCategories() {
        return courseRepository.findAllCategories();
    }

    @Override
    public List<Course> getCoursesByMaxPrice(Double maxPrice) {
        return courseRepository.findByPriceLessThanEqual(maxPrice);
    }
} 