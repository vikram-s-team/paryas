import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  School,
  Group,
  TrendingUp,
  EmojiEvents,
  CheckCircle,
  Close,
  Business,
  AccountBalance,
  Store,
  Apartment,
  Domain,
  Work,
  BusinessCenter,
  Storefront,
  AccountBalanceWallet,
  StoreMallDirectory
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const features = [
    {
      icon: <School fontSize="large" />,
      title: 'Expert Faculty',
      description: 'Learn from experienced educators dedicated to your success',
      link: '/about'
    },
    {
      icon: <Group fontSize="large" />,
      title: 'Small Class Sizes',
      description: 'Personalized attention and interactive learning environment',
      link: '/courses'
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: 'Career Growth',
      description: 'Industry-aligned curriculum for better career opportunities',
      link: '/courses'
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: 'Student Success',
      description: 'Track record of exceptional student achievements',
      link: '/about'
    },
  ];

  const handleExplore = () => {
    navigate('/courses');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleFeatureClick = (link: string) => {
    navigate(link);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Welcome to PARYAS
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, opacity: 0.9 }}
                >
                  Empowering Minds, Shaping Futures
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={handleExplore}
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                >
                  Explore Courses
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  // src="/home/Education.webp"
                  // alt="Education"
                  
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Why Choose PARYAS?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                      bgcolor: 'action.hover',
                    },
                  }}
                  onClick={() => handleFeatureClick(feature.link)}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Comparison Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            How Are We Different?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card sx={{ 
                  height: '100%', 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '600px'
                }}>
                  <CardContent sx={{ 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: '100%'
                  }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      align="center" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 3
                      }}
                    >
                      PARYAS
                    </Typography>
                    <List sx={{ 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      {[
                        'Structured Video Content',
                        'LIVE Sessions From Industry Experts',
                        'Integrated Problem Solving Environment',
                        'Fastest Doubts Support',
                        'Daily Progress Report',
                        'Dedicated Job Portal',
                        'Personalized Mentorship',
                        'Real-World Projects',
                        'Placement Assistance',
                        'Community Access',
                        'Flexible Learning Options',
                        'Certification on Completion',
                        
                      ].map((feature, index) => (
                        <ListItem key={index} sx={{ py: 1 }}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: 'white' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card sx={{ 
                  height: '100%', 
                  bgcolor: 'grey.200',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '600px'
                }}>
                  <CardContent sx={{ 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: '100%'
                  }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      align="center" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 3
                      }}
                    >
                      Other Courses
                    </Typography>
                    <List sx={{ 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      {[
                        'Limited Video Content',
                        'Recorded Sessions',
                        'Basic Problem Solving',
                        'Delayed Support',
                        'No Progress Tracking',
                        'No Job Portal',
                        'Group Mentorship',
                        'Basic Projects',
                        'No Placement Support',
                        'Limited Community',
                        'Fixed Schedule',
                        'Basic Certification',
                        'Basic Assessments'
                      ].map((feature, index) => (
                        <ListItem key={index} sx={{ py: 1 }}>
                          <ListItemIcon>
                            <Close sx={{ color: 'error.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card sx={{ 
                  height: '100%', 
                  bgcolor: 'grey.200',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '600px'
                }}>
                  <CardContent sx={{ 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: '100%'
                  }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      align="center" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 3
                      }}
                    >
                      Free Resources
                    </Typography>
                    <List sx={{ 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      {[
                        'Unstructured Content',
                        'No Live Sessions',
                        'No Problem Solving',
                        'No Support',
                        'No Progress Tracking',
                        'No Job Portal',
                        'No Mentorship',
                        'No Projects',
                        'No Placement Support',
                        'No Community',
                        'No Schedule',
                        'No Certification',
                        'No Assessments'
                      ].map((feature, index) => (
                        <ListItem key={index} sx={{ py: 1 }}>
                          <ListItemIcon>
                            <Close sx={{ color: 'error.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Placement Statistics Section */}
      <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Success Story
          </Typography>
          <Box sx={{ 
            textAlign: 'center', 
            mb: 8,
            position: 'relative',
            zIndex: 1
          }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{ 
                fontWeight: 700,
                mb: 2
              }}
            >
              200+ Students Placed
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              At Top MNCs and Indian Multinational Companies
            </Typography>
          </Box>
          
          {/* Floating Company Logos */}
          <Box sx={{ 
            position: 'relative',
            height: '150px',
            overflow: 'hidden',
            mb: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}>
            <motion.div
              style={{
                display: 'flex',
                gap: '3rem',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                willChange: 'transform'
              }}
              animate={{
                x: ['0%', '-50%']
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[{ name: 'TCS', logo: '/companies/tcs.webp' },
                { name: 'Accenture', logo: '/companies/accenture.webp' },
                { name: 'Accolite', logo: '/companies/accolite.png' },
                { name: 'Adobe', logo: '/companies/adobe.png' },
                { name: 'Amazon', logo: '/companies/amazon.png' },
                { name: 'American Express', logo: '/companies/americanExpress.png' },
                { name: 'Atlassian', logo: '/companies/atlassian.png' },
                { name: 'HSBC', logo: '/companies/hsbc.png' },
                { name: 'Microsoft', logo: '/companies/microsoft.png' },
                { name: 'Oracle', logo: '/companies/oracle.webp' },
                { name: 'Bandhan Bank', logo: '/companies/bandhanBank.webp' },
                { name: 'Capgemini', logo: '/companies/capgemini.webp' },
                { name: 'Paytm', logo: '/companies/paytm.webp' },
                { name: 'Microsoft', logo: '/companies/microsoft.png' },
                { name: 'JIO', logo: '/companies/jio.png' },
                { name: 'Uber', logo: '/companies/uber.png' },
                { name: 'Nagarro', logo: '/companies/nagarro.webp' },
                { name: 'Samsung', logo: '/companies/samsung.webp' },
                { name: 'Siemens', logo: '/companies/siemens.png' },
                { name: 'PWC', logo: '/companies/pwc.webp' },
                { name: 'Juspay', logo: '/companies/juspay.webp' },
                { name: 'Salesforce', logo: '/companies/salesforce.webp' },
                { name: 'Eleven', logo: '/companies/eleven.webp' },
                { name: 'Bosh', logo: '/companies/bosch.png' },
                { name: 'Urban Company', logo: '/companies/urban-company.webp' }
              ].map((company, index) => (
                <Box
                  key={company.name}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    minWidth: '120px',
                    height: '100px'
                  }}
                >
                  <Box
                    component="img"
                    src={company.logo}
                    alt={company.name}
                    sx={{
                      width: '100%',
                      height: '80px',
                      objectFit: 'contain',
                      opacity: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))'
                      }
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    {company.name}
                  </Typography>
                </Box>
              ))}
              {/* Duplicate logos for seamless loop */}
              {[
                { name: 'TCS', logo: '/companies/tcs.webp' },
                { name: 'Accenture', logo: '/companies/accenture.webp' },
                { name: 'Accolite', logo: '/companies/accolite.png' },
                { name: 'Adobe', logo: '/companies/adobe.png' },
                { name: 'Amazon', logo: '/companies/amazon.png' },
                { name: 'American Express', logo: '/companies/americanExpress.png' },
                { name: 'Atlassian', logo: '/companies/atlassian.png' },
                { name: 'HSBC', logo: '/companies/hsbc.png' },
                { name: 'Microsoft', logo: '/companies/microsoft.png' },
                { name: 'Oracle', logo: '/companies/oracle.webp' },
                { name: 'Bandhan Bank', logo: '/companies/bandhanBank.webp' },
                { name: 'Capgemini', logo: '/companies/capgemini.webp' },
                { name: 'Paytm', logo: '/companies/paytm.webp' },
                { name: 'Microsoft', logo: '/companies/microsoft.png' },
                { name: 'JIO', logo: '/companies/jio.png' },
                { name: 'Uber', logo: '/companies/uber.png' },
                { name: 'Nagarro', logo: '/companies/nagarro.webp' },
                { name: 'Samsung', logo: '/companies/samsung.webp' },
                { name: 'Siemens', logo: '/companies/siemens.png' },
                { name: 'PWC', logo: '/companies/pwc.webp' },
                { name: 'Juspay', logo: '/companies/juspay.webp' },
                { name: 'Salesforce', logo: '/companies/salesforce.webp' },
                { name: 'Eleven', logo: '/companies/eleven.webp' },
                { name: 'Bosh', logo: '/companies/bosch.png' },
                { name: 'Urban Company', logo: '/companies/urban-company.webp' }
                
              ].map((company, index) => (
                <Box
                  key={`${company.name}-duplicate`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    minWidth: '120px',
                    height: '100px'
                  }}
                >
                  <Box
                    component="img"
                    src={company.logo}
                    alt={company.name}
                    sx={{
                      width: '100%',
                      height: '80px',
                      objectFit: 'contain',
                      opacity: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))'
                      }
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    {company.name}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Box>

          {/* Placement Statistics */}
          <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
            {[
              { number: '200+', label: 'Students Placed' },
              { number: '50+', label: 'Companies' },
              { number: '95%', label: 'Placement Rate' },
              { number: '₹12L+', label: 'Average Package' }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    bgcolor: 'background.paper',
                    boxShadow: 3
                  }}>
                    <Typography
                      variant="h4"
                      color="primary"
                      sx={{ 
                        fontWeight: 700,
                        mb: 1
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Course Preview Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Featured Courses
          </Typography>
          <Grid container spacing={4}>
            {['DevOps', 'Java Development', 'Full Stack'].map((course, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={`/home/paryas.png`}
                      alt={course}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {course}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Master the latest technologies and advance your career with our comprehensive courses.
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => navigate('/courses')}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Get Certified Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: 'primary.main'
                  }}
                >
                  Get Certified From PARYAS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 3,
                    lineHeight: 1.8,
                    color: 'text.secondary'
                  }}
                >
                  Course completion certificate will be awarded on successful course completion and upon scoring above 60% marks in the quiz consistently throughout the program. A value add-on to your LinkedIn Profile that can grab the attention of our hiring partners and top big data companies.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 4,
                    lineHeight: 1.8,
                    color: 'text.secondary'
                  }}
                >
                  Upon successful completion of the this course, we will provide the course completion certificate.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate('/courses')}
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="/home/certificate.webp"
                  alt="Course Certificate"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            What Our Students Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Rahul Kumar',
                role: 'Software Engineer at Google',
                image: '/testimonials/male.jpg',
                feedback: 'PARYAS transformed my career. The structured curriculum and expert guidance helped me land my dream job at Google.'
              },
              {
                name: 'Priya Sharma',
                role: 'Full Stack Developer at Microsoft',
                image: '/testimonials/female.jpg',
                feedback: 'The mentorship program at PARYAS is exceptional. My mentor helped me overcome challenges throughout my journey.'
              },
              {
                name: 'Amit Patel',
                role: 'DevOps Engineer at Amazon',
                image: '/testimonials/male.jpg',
                feedback: 'The hands-on experience with real-world projects gave me the confidence to tackle complex challenges.'
              },
              {
                name: 'Neha Gupta',
                role: 'Java Developer at Oracle',
                image: '/testimonials/female.jpg',
                feedback: 'I was impressed by the quality of instructors and the interactive learning environment.'
              },
              {
                name: 'Vikram Singh',
                role: 'Cloud Architect at AWS',
                image: '/testimonials/male.jpg',
                feedback: 'PARYAS helped me transition from a non-tech background to a successful tech career.'
              },
              {
                name: 'Anjali Verma',
                role: 'Data Scientist at IBM',
                image: '/testimonials/female.jpg',
                feedback: "The practical approach to learning and problem-solving skills made all the difference."
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        mb: 2,
                        objectFit: 'cover',
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {testimonial.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      "{testimonial.feedback}"
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: 'primary.main' }} />
                      ))}
                    </Box>
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

export default Home;
