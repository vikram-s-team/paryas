import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  School,
  CheckCircle,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const teachers = [
    {
      name: 'Vikram Kumar',
      role: 'Senior Software Engineer',
      company: 'Tech Solutions',
      expertise: ['Java', 'Spring Boot', 'Microservices'],
      image: '/teachers/vikram.png',
      description: 'Experienced in building scalable applications and mentoring junior developers.',
      social: {
        linkedin: 'https://linkedin.com/in/vikram',
        twitter: 'https://twitter.com/vikram',
        github: 'https://github.com/vikram'
      }
    },
    {
      name: 'Hirdesh Kumar Yadav',
      role: 'Full Stack Developer',
      company: 'Tech Solutions',
      expertise: ['MERN Stack', 'Java', 'Spring Boot', 'System Design'],
      image: '/teachers/hirdesh.jpeg',
      description: 'Specialized in full-stack development with expertise in modern web technologies and system architecture.',
      social: {
        linkedin: 'https://linkedin.com/in/iamhirdeshkumar15',
        github: 'https://github.com/iamhirdeshkumar15'
      }
    },
    {
      name: 'Akhilesh Prajapati',
      role: 'Data Science Expert',
      company: 'Data Analytics Corp',
      expertise: ['Machine Learning', 'Python', 'Data Analytics', 'AI'],
      image: '/teachers/akhilesh.jpeg',
      description: 'Experienced in data science and machine learning with a focus on practical applications and industry solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/akp03112000',
        github: 'https://github.com/akp03112000'
      }
    },
    {
      name: 'Dheeraj Kumar',
      role: 'Security Specialist',
      company: 'CyberSec Solutions',
      expertise: ['Cybersecurity', 'Network Security', 'Ethical Hacking', 'CISSP'],
      image: '/teachers/dheeraj.png',
      description: 'Expert in cybersecurity and network protection with extensive experience in securing enterprise applications.',
      social: {
        linkedin: 'https://linkedin.com/in/dheerajkumar856',
        github: 'https://github.com/iamdheerajkumar'
      }
    },
    {
      name: 'Anjali Sharma',
      role: 'Mobile App Developer',
      company: 'App Innovators',
      expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
      image: '/teachers/anjali.png',
      description: 'Specialized in cross-platform mobile app development with a track record of successful app launches.',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Priya Verma',
      role: 'UI/UX Designer',
      company: 'Design Studio',
      expertise: ['UI Design', 'UX Research', 'Figma', 'Adobe XD'],
      image: '/teachers/priya.png',
      description: 'Creative designer with expertise in creating intuitive and user-friendly interfaces for web and mobile applications.',
      social: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <Box>
      {/* Mission & Vision Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h3" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  At PARYAS, our mission is to provide high-quality education that empowers students
                  to achieve their full potential and become leaders in their chosen fields.
                  We strive to create an environment that fosters creativity, critical thinking,
                  and personal growth.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h3" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph>
                  We envision PARYAS as a leading educational institution that sets new standards
                  in academic excellence and innovation. Our goal is to shape the future of
                  education by combining traditional values with modern teaching methods and
                  technology.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {['Excellence', 'Innovation', 'Integrity', 'Inclusivity'].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={value}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom color="primary">
                    {value}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Teachers Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Expert Teachers
          </Typography>
          <Grid container spacing={4}>
            {teachers.map((teacher, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <CardContent sx={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '100%',
                      p: 3,
                      gap: 2
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        mb: 2,
                        minHeight: '180px'
                      }}>
                        <Avatar
                          src={teacher.image}
                          alt={teacher.name}
                          sx={{
                            width: 120,
                            height: 120,
                            mb: 2,
                            border: `3px solid ${theme.palette.primary.main}`,
                          }}
                        />
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          align="center"
                          sx={{ 
                            fontWeight: 600,
                            minHeight: '2.5em',
                            mb: 1
                          }}
                        >
                          {teacher.name}
                        </Typography>
                        <Typography 
                          variant="subtitle1" 
                          color="primary" 
                          sx={{ 
                            fontWeight: 500,
                            minHeight: '1.5em',
                            mb: 1
                          }}
                        >
                          {teacher.role}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            minHeight: '1.5em'
                          }}
                        >
                          {teacher.company}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'center',
                          minHeight: '4em',
                          mb: 2
                        }}
                      >
                        {teacher.description}
                      </Typography>
                      <Divider />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography 
                          variant="subtitle2" 
                          gutterBottom 
                          sx={{ 
                            textAlign: 'center',
                            fontWeight: 600,
                            color: 'primary.main'
                          }}
                        >
                          Expertise
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: 1, 
                          justifyContent: 'center',
                          minHeight: '80px',
                          px: 2
                        }}>
                          {teacher.expertise.map((skill, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                bgcolor: 'primary.main',
                                color: 'white',
                                px: 2,
                                py: 0.75,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                minWidth: '100px',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {skill}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: 2,
                        mt: 'auto'
                      }}>
                        <LinkedIn
                          sx={{
                            cursor: 'pointer',
                            fontSize: 28,
                            '&:hover': { color: theme.palette.primary.main },
                          }}
                          onClick={() => window.open(teacher.social.linkedin, '_blank')}
                        />
                        <GitHub
                          sx={{
                            cursor: 'pointer',
                            fontSize: 28,
                            '&:hover': { color: theme.palette.primary.main },
                          }}
                          onClick={() => window.open(teacher.social.github, '_blank')}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 