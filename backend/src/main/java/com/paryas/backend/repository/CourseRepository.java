package com.paryas.backend.repository;

import com.paryas.backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByCategory(String category);
    
    List<Course> findByLevel(String level);
    
    @Query("SELECT c FROM Course c WHERE " +
           "LOWER(c.title) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(c.description) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(c.category) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Course> searchCourses(@Param("query") String query);
    
    @Query("SELECT DISTINCT c.category FROM Course c")
    List<String> findAllCategories();
    
    List<Course> findByPriceLessThanEqual(Double maxPrice);
} 