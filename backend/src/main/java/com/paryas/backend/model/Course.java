package com.paryas.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Course title is required")
    private String title;

    @NotBlank(message = "Course category is required")
    private String category;

    private String image;

    @NotBlank(message = "Course duration is required")
    private String duration;

    @NotNull(message = "Number of students is required")
    private Integer students;

    @NotBlank(message = "Course level is required")
    private String level;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "Course description is required")
    private String description;

    private Double price;

    @Column(name = "created_at")
    private java.time.LocalDateTime createdAt;

    @Column(name = "updated_at")
    private java.time.LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = java.time.LocalDateTime.now();
        updatedAt = createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = java.time.LocalDateTime.now();
    }
} 