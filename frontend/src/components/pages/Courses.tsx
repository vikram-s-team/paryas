import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccessTime,
  Group,
  School,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Courses = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 'devops',
      title: 'DevOps Engineering Fundamentals',
      category: 'DevOps',
      image: '/courses/devops.jpg',
      duration: '6 months',
      students: 120,
      level: 'Intermediate',
      description: 'Master DevOps principles, CI/CD pipelines, and automation tools for modern software delivery.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'devops-aws',
      title: 'DevOps with AWS',
      category: 'Cloud & DevOps',
      image: '/courses/aws.jpg',
      duration: '8 months',
      students: 150,
      level: 'Advanced',
      description: 'Learn DevOps practices using AWS services, including ECS, EKS, CodePipeline, and CloudFormation.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'devops-azure',
      title: 'DevOps with Azure',
      category: 'Cloud & DevOps',
      image: '/courses/azure.jpg',
      duration: '8 months',
      students: 130,
      level: 'Advanced',
      description: 'Master Azure DevOps, AKS, Azure Pipelines, and cloud infrastructure automation.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'cpp-programming',
      title: 'C++ Programming Mastery',
      category: 'Programming',
      image: '/courses/cpp.jpg',
      duration: '6 months',
      students: 200,
      level: 'Beginner to Advanced',
      description: 'Comprehensive C++ programming from basics to advanced concepts with practical projects.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'java-programming',
      title: 'Java Development',
      category: 'Programming',
      image: '/courses/java.jpg',
      duration: '6 months',
      students: 180,
      level: 'Beginner to Advanced',
      description: 'Master Java programming, OOP concepts, and enterprise application development.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'linux-admin',
      title: 'Linux System Administration',
      category: 'System Admin',
      image: '/courses/linux.jpg',
      duration: '4 months',
      students: 140,
      level: 'Intermediate',
      description: 'Learn Linux administration, shell scripting, and system management skills.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'fullstack-java',
      title: 'Full Stack Java Development',
      category: 'Full Stack',
      image: '/courses/fullstack.jpg',
      duration: '12 months',
      students: 160,
      level: 'Advanced',
      description: 'Complete Full Stack development with Java, Spring Boot, and React.',
      originalPrice: 10000,
      price: 2999
    },
    {
      id: 'mern-stack',
      title: 'MERN Stack Development',
      category: 'Full Stack',
      image: '/courses/mern.jpg',
      duration: '8 months',
      students: 170,
      level: 'Intermediate',
      description: 'Build modern web applications with MongoDB, Express.js, React, and Node.js.',
      originalPrice: 10000,
      price: 2999
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Our Courses
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Discover our wide range of courses designed to help you succeed
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search courses by name, category, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ maxWidth: 600 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Courses Grid */}
        <Grid container spacing={4}>
          {filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={course.image}
                    alt={course.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    p: 3
                  }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={course.category}
                        color="primary"
                        size="small"
                        sx={{ mb: 2 }}
                      />
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          minHeight: '64px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: 1.3,
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          minHeight: '60px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          mb: 2,
                        }}
                      >
                        {course.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        mb: 2,
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTime sx={{ fontSize: 20, mr: 0.5 }} />
                        <Typography variant="body2">{course.duration}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Group sx={{ fontSize: 20, mr: 0.5 }} />
                        <Typography variant="body2">{course.students} students</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <School sx={{ fontSize: 20, mr: 0.5 }} />
                        <Typography variant="body2">{course.level}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography 
                          variant="h6" 
                          color="primary" 
                          sx={{ fontWeight: 600 }}
                        >
                          ₹{course.price}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="text.secondary" 
                          sx={{ 
                            textDecoration: 'line-through',
                            fontWeight: 500
                          }}
                        >
                          ₹{course.originalPrice}
                        </Typography>
                        <Chip 
                          label="70% OFF" 
                          color="error" 
                          size="small"
                          sx={{ fontWeight: 500 }}
                        />
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        component={Link}
                        to={`/courses/${course.id}`}
                        sx={{
                          mt: 1,
                          py: 1,
                          fontWeight: 500,
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No courses found matching your search criteria.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Courses; 