import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Card,
  CardContent,
  Avatar,
  Chip,
  Tabs,
  Tab,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Assignment as AssignmentIcon,
  Payment as PaymentIcon,
  Schedule as ScheduleIcon,
  School as SchoolIcon,
  LinkedIn,
  Language,
  Email,
  CreditCard,
  AccountBalance,
  QrCode2,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Instructor {
  name: string;
  role: string;
  company: string;
  experience: string;
  image: string;
  bio: string;
  linkedin: string;
  website: string;
  email: string;
}

interface Module {
  title: string;
  topics: string[];
}

interface LegacyCourse {
  title: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  modules: {
    title: string;
    topics: string[];
    duration: string;
  }[];
}

interface ModernCourse {
  title: string;
  instructor: Instructor;
  syllabus: Module[];
  price?: number;
  duration?: string;
  description?: string;
}

type Course = LegacyCourse | ModernCourse;

interface PaymentMode {
  id: string;
  title: string;
  icon: React.ReactNode;
  fields: {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
  }[];
}

const courseData = {
  'mathematics': {
    title: 'Mathematics Excellence',
    price: 599,
    duration: '6 months',
    description: 'Master advanced mathematical concepts with our comprehensive course.',
    image: '/courses/mathematics.jpg',
    modules: [
      {
        title: 'Module 1: Foundations of Mathematics',
        topics: [
          'Set Theory and Logic',
          'Number Systems',
          'Mathematical Reasoning',
          'Basic Algebra'
        ],
        duration: '4 weeks'
      },
      {
        title: 'Module 2: Advanced Algebra',
        topics: [
          'Polynomials',
          'Quadratic Equations',
          'Complex Numbers',
          'Matrices and Determinants'
        ],
        duration: '4 weeks'
      },
      {
        title: 'Module 3: Calculus',
        topics: [
          'Limits and Continuity',
          'Differentiation',
          'Integration',
          'Applications of Calculus'
        ],
        duration: '8 weeks'
      }
    ]
  },
  'physics': {
    title: 'Physics Fundamentals',
    price: 499,
    duration: '8 months',
    description: 'Learn the basic principles of physics through practical experiments.',
    image: '/courses/physics.jpg',
    modules: [
      {
        title: 'Module 1: Mechanics',
        topics: [
          'Newton\'s Laws of Motion',
          'Work, Energy, and Power',
          'Gravitation',
          'Rotational Motion'
        ],
        duration: '8 weeks'
      },
      {
        title: 'Module 2: Waves and Optics',
        topics: [
          'Wave Motion',
          'Sound Waves',
          'Light and Reflection',
          'Refraction and Dispersion'
        ],
        duration: '8 weeks'
      },
      {
        title: 'Module 3: Modern Physics',
        topics: [
          'Quantum Mechanics',
          'Atomic Structure',
          'Nuclear Physics',
          'Relativity'
        ],
        duration: '8 weeks'
      }
    ]
  },
  'english': {
    title: 'English Literature',
    price: 399,
    duration: '4 months',
    description: 'Explore classic and contemporary literature with expert guidance.',
    image: '/courses/english.jpg',
    modules: [
      {
        title: 'Module 1: Classical Literature',
        topics: [
          'Shakespeare\'s Works',
          'Greek Mythology',
          'Epic Poetry',
          'Classical Drama'
        ],
        duration: '4 weeks'
      },
      {
        title: 'Module 2: Modern Literature',
        topics: [
          'Modern Poetry',
          'Contemporary Fiction',
          'Literary Analysis',
          'Critical Theory'
        ],
        duration: '4 weeks'
      },
      {
        title: 'Module 3: Creative Writing',
        topics: [
          'Story Structure',
          'Character Development',
          'Dialogue Writing',
          'Poetry Writing'
        ],
        duration: '4 weeks'
      }
    ]
  },
  'computer-science': {
    title: 'Computer Science',
    price: 799,
    duration: '12 months',
    description: 'Learn programming, algorithms, and software development.',
    image: '/courses/computer-science.jpg',
    modules: [
      {
        title: 'Module 1: Programming Fundamentals',
        topics: [
          'Introduction to Programming',
          'Data Types and Variables',
          'Control Structures',
          'Functions and Methods'
        ],
        duration: '12 weeks'
      },
      {
        title: 'Module 2: Data Structures',
        topics: [
          'Arrays and Lists',
          'Stacks and Queues',
          'Trees and Graphs',
          'Hash Tables'
        ],
        duration: '12 weeks'
      },
      {
        title: 'Module 3: Algorithms',
        topics: [
          'Sorting Algorithms',
          'Searching Algorithms',
          'Dynamic Programming',
          'Graph Algorithms'
        ],
        duration: '12 weeks'
      }
    ]
  },
  'chemistry': {
    title: 'Chemistry Lab',
    price: 549,
    duration: '6 months',
    description: 'Hands-on experience with chemical reactions and lab techniques.',
    image: '/courses/chemistry.jpg',
    modules: [
      {
        title: 'Module 1: General Chemistry',
        topics: [
          'Atomic Structure',
          'Chemical Bonding',
          'States of Matter',
          'Chemical Reactions'
        ],
        duration: '6 weeks'
      },
      {
        title: 'Module 2: Organic Chemistry',
        topics: [
          'Hydrocarbons',
          'Functional Groups',
          'Reaction Mechanisms',
          'Synthesis'
        ],
        duration: '6 weeks'
      },
      {
        title: 'Module 3: Lab Techniques',
        topics: [
          'Safety Procedures',
          'Equipment Handling',
          'Experimental Design',
          'Data Analysis'
        ],
        duration: '6 weeks'
      }
    ]
  },
  'history': {
    title: 'World History',
    price: 449,
    duration: '5 months',
    description: 'Journey through time and learn about world-changing events.',
    image: '/courses/history.jpg',
    modules: [
      {
        title: 'Module 1: Ancient Civilizations',
        topics: [
          'Mesopotamia',
          'Ancient Egypt',
          'Greek Civilization',
          'Roman Empire'
        ],
        duration: '5 weeks'
      },
      {
        title: 'Module 2: Medieval Period',
        topics: [
          'Middle Ages',
          'Renaissance',
          'Age of Discovery',
          'Reformation'
        ],
        duration: '5 weeks'
      },
      {
        title: 'Module 3: Modern Era',
        topics: [
          'Industrial Revolution',
          'World Wars',
          'Cold War',
          'Contemporary History'
        ],
        duration: '5 weeks'
      }
    ]
  },
  'devops': {
    title: 'DevOps Engineering Fundamentals',
    instructor: {
      name: 'Rahul Kumar',
      role: 'Senior DevOps Engineer',
      company: 'Tech Solutions Ltd',
      experience: '8+ years',
      image: '/instructors/rahul.jpg',
      bio: 'Expert in CI/CD, containerization, and cloud infrastructure with experience at leading tech companies.',
      linkedin: 'https://linkedin.com/in/rahul-kumar',
      website: 'https://rahulkumar.dev',
      email: 'rahul@techsolutions.com'
    },
    syllabus: [
      {
        title: 'Module 1: Introduction to DevOps',
        topics: ['DevOps principles and culture', 'Understanding CI/CD', 'DevOps tools overview']
      },
      {
        title: 'Module 2: Version Control with Git',
        topics: ['Git fundamentals', 'Branching strategies', 'Git workflows']
      },
      {
        title: 'Module 3: Continuous Integration',
        topics: ['Jenkins setup and configuration', 'Building pipelines', 'Automated testing']
      },
      {
        title: 'Module 4: Containerization',
        topics: ['Docker basics', 'Container orchestration', 'Kubernetes fundamentals']
      }
    ]
  },
  'devops-aws': {
    title: 'DevOps with AWS',
    instructor: {
      name: 'Priya Singh',
      role: 'AWS Solutions Architect',
      company: 'Cloud Experts Inc',
      experience: '10+ years',
      image: '/instructors/priya.jpg',
      bio: 'Certified AWS architect specializing in DevOps practices and cloud infrastructure.',
      linkedin: 'https://linkedin.com/in/priya-singh',
      website: 'https://priyasingh.tech',
      email: 'priya@cloudexperts.com'
    },
    syllabus: [
      {
        title: 'Module 1: AWS Fundamentals',
        topics: ['AWS core services', 'IAM and Security', 'VPC architecture']
      },
      {
        title: 'Module 2: AWS DevOps Services',
        topics: ['CodeBuild', 'CodeDeploy', 'CodePipeline']
      },
      {
        title: 'Module 3: Container Services',
        topics: ['ECS fundamentals', 'EKS management', 'Fargate deployment']
      },
      {
        title: 'Module 4: Infrastructure as Code',
        topics: ['CloudFormation', 'Terraform with AWS', 'Infrastructure automation']
      }
    ]
  },
  'java-programming': {
    title: 'Java Development',
    instructor: {
      name: 'Amit Sharma',
      role: 'Lead Java Developer',
      company: 'Software Solutions Ltd',
      experience: '12+ years',
      image: '/instructors/amit.jpg',
      bio: 'Java expert with extensive experience in enterprise application development.',
      linkedin: 'https://linkedin.com/in/amit-sharma',
      website: 'https://amitsharma.dev',
      email: 'amit@softwaresolutions.com'
    },
    syllabus: [
      {
        title: 'Module 1: Java Fundamentals',
        topics: ['Core Java concepts', 'OOP principles', 'Exception handling']
      },
      {
        title: 'Module 2: Advanced Java',
        topics: ['Collections framework', 'Multithreading', 'File I/O']
      },
      {
        title: 'Module 3: Java Enterprise',
        topics: ['Servlets and JSP', 'Spring Framework', 'Hibernate ORM']
      },
      {
        title: 'Module 4: Modern Java',
        topics: ['Java 8+ features', 'Reactive programming', 'Microservices']
      }
    ]
  }
};

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [openPayment, setOpenPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('credit');

  const course = courseData[courseId as keyof typeof courseData] as Course;

  // Additional expert teachers data
  const additionalExperts = [
    {
      name: "Dr. Rajesh Verma",
      role: "Technical Director",
      company: "Institute of Technology",
      experience: "15+ years",
      image: "/instructors/rajesh.jpg",
      bio: "Ph.D. in Computer Science with expertise in AI, Machine Learning, and Cloud Computing. Published numerous research papers and led multiple technical projects.",
      linkedin: "https://linkedin.com/in/rajesh-verma",
      website: "https://rajeshverma.tech",
      email: "rajesh.verma@institute.edu"
    },
    {
      name: "Sneha Patel",
      role: "Senior Software Architect",
      company: "TechCorp Solutions",
      experience: "12+ years",
      image: "/instructors/sneha.jpg",
      bio: "Full-stack development expert specializing in enterprise applications. Led teams at major tech companies and contributed to open-source projects.",
      linkedin: "https://linkedin.com/in/sneha-patel",
      website: "https://snehapatel.dev",
      email: "sneha@techcorp.com"
    }
  ];

  const paymentModes: PaymentMode[] = [
    {
      id: 'credit',
      title: 'Credit Card',
      icon: <CreditCard />,
      fields: [
        { name: 'cardNumber', label: 'Card Number', placeholder: '1234 5678 9012 3456' },
        { name: 'expiry', label: 'Expiry Date', placeholder: 'MM/YY' },
        { name: 'cvv', label: 'CVV', type: 'password', placeholder: '123' },
        { name: 'name', label: 'Cardholder Name' }
      ]
    },
    {
      id: 'debit',
      title: 'Debit Card',
      icon: <AccountBalance />,
      fields: [
        { name: 'cardNumber', label: 'Card Number', placeholder: '1234 5678 9012 3456' },
        { name: 'expiry', label: 'Expiry Date', placeholder: 'MM/YY' },
        { name: 'cvv', label: 'CVV', type: 'password', placeholder: '123' },
        { name: 'name', label: 'Cardholder Name' }
      ]
    },
    {
      id: 'upi',
      title: 'UPI',
      icon: <QrCode2 />,
      fields: [
        { name: 'upiId', label: 'UPI ID', placeholder: 'username@upi' }
      ]
    }
  ];

  if (!course) {
    return (
      <Container>
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Course not found
        </Typography>
      </Container>
    );
  }

  const handlePaymentClick = () => {
    setOpenPayment(true);
  };

  const handlePaymentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      setTimeout(() => {
        setOpenPayment(false);
        setPaymentSuccess(false);
      }, 2000);
    }, 1500);
  };

  const isModernCourse = (course: Course): course is ModernCourse => {
    return 'instructor' in course && 'syllabus' in course;
  };

  const getPrice = (course: Course) => {
    if (isModernCourse(course)) {
      return course.price || 2999;
    }
    return course.price;
  };

  const getDuration = (course: Course) => {
    if (isModernCourse(course)) {
      return course.duration || '6 months';
    }
    return course.duration;
  };

  const getDescription = (course: Course) => {
    if (isModernCourse(course)) {
      return course.description || course.instructor.bio;
    }
    return course.description;
  };

  const handlePaymentModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMode(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Course Header */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom>
              {course.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              {getDescription(course)}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleIcon sx={{ mr: 1 }} />
                <Typography>{getDuration(course)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SchoolIcon sx={{ mr: 1 }} />
                <Typography>Certificate Included</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  ₹{getPrice(course)}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary" 
                  sx={{ textDecoration: 'line-through' }}
                >
                  ₹10,000
                </Typography>
                <Chip 
                  label="70% OFF" 
                  color="error" 
                  size="small"
                  sx={{ fontWeight: 500 }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                Full course access with:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Lifetime Access" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Certificate of Completion" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="24/7 Support" />
                </ListItem>
              </List>
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<PaymentIcon />}
                onClick={handlePaymentClick}
                sx={{ mt: 2 }}
              >
                Enroll Now
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Instructor Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Expert Instructors
          </Typography>
          <Grid container spacing={3}>
            {/* Main instructor for modern courses */}
            {isModernCourse(course) && (
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar
                        src={course.instructor.image}
                        sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                      />
                      <Typography variant="h6">{course.instructor.name}</Typography>
                      <Typography color="text.secondary" gutterBottom>
                        {course.instructor.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.instructor.company}
                      </Typography>
                      <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                        {course.instructor.experience} experience
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                      {course.instructor.bio}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LinkedIn />}
                        href={course.instructor.linkedin}
                        target="_blank"
                      >
                        LinkedIn
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Email />}
                        href={`mailto:${course.instructor.email}`}
                      >
                        Email
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )}

            {/* Additional expert teachers */}
            {additionalExperts.map((expert, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar
                        src={expert.image}
                        sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                      />
                      <Typography variant="h6">{expert.name}</Typography>
                      <Typography color="text.secondary" gutterBottom>
                        {expert.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {expert.company}
                      </Typography>
                      <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                        {expert.experience} experience
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                      {expert.bio}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LinkedIn />}
                        href={expert.linkedin}
                        target="_blank"
                      >
                        LinkedIn
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Email />}
                        href={`mailto:${expert.email}`}
                      >
                        Email
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Course Syllabus */}
        <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
          Course Syllabus
        </Typography>
        {isModernCourse(course) ? (
          // Modern course syllabus
          course.syllabus.map((module, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                {module.title}
              </Typography>
              <List>
                {module.topics.map((topic, topicIndex) => (
                  <ListItem key={topicIndex}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={topic} />
                  </ListItem>
                ))}
              </List>
              {index < course.syllabus.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))
        ) : (
          // Legacy course modules
          course.modules.map((module, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                {module.title}
              </Typography>
              <List>
                {module.topics.map((topic, topicIndex) => (
                  <ListItem key={topicIndex}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={topic} />
                  </ListItem>
                ))}
              </List>
              {index < course.modules.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))
        )}

        {/* Payment Dialog */}
        <Dialog 
          open={openPayment} 
          onClose={() => setOpenPayment(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Complete Your Enrollment</DialogTitle>
          <form onSubmit={handlePaymentSubmit}>
            <DialogContent>
              {paymentSuccess ? (
                <Alert severity="success">
                  Payment successful! You will receive an email confirmation shortly.
                </Alert>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Select Payment Mode</FormLabel>
                      <RadioGroup
                        row
                        value={selectedPaymentMode}
                        onChange={handlePaymentModeChange}
                      >
                        {paymentModes.map((mode) => (
                          <FormControlLabel
                            key={mode.id}
                            value={mode.id}
                            control={<Radio />}
                            label={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {mode.icon}
                                <Typography>{mode.title}</Typography>
                              </Box>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {/* Payment Fields */}
                  {paymentModes.find(mode => mode.id === selectedPaymentMode)?.fields.map((field, index) => (
                    <Grid item xs={field.name === 'cardNumber' || field.name === 'name' || field.name === 'upiId' ? 12 : 6} key={index}>
                      <TextField
                        label={field.label}
                        fullWidth
                        required
                        type={field.type || 'text'}
                        placeholder={field.placeholder}
                        InputProps={field.name === 'cardNumber' ? {
                          startAdornment: <CreditCard sx={{ mr: 1, color: 'text.secondary' }} />,
                        } : undefined}
                      />
                    </Grid>
                  ))}

                  <Grid item xs={12}>
                    <Divider />
                    <Box sx={{ mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                          ₹{getPrice(course)}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="text.secondary" 
                          sx={{ textDecoration: 'line-through' }}
                        >
                          ₹10,000
                        </Typography>
                        <Chip 
                          label="70% OFF" 
                          color="error" 
                          size="small"
                          sx={{ fontWeight: 500 }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenPayment(false)}>Cancel</Button>
              <Button
                type="submit"
                variant="contained"
                disabled={paymentSuccess}
                startIcon={<PaymentIcon />}
              >
                Pay Now
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </motion.div>
    </Container>
  );
};

export default CourseDetails; 