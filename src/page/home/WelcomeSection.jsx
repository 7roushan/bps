


import { Box, Typography, Container, Grid, useMediaQuery, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import img from "../../assets/image1/book.png";
import { useTheme } from "@mui/material/styles";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlaceIcon from '@mui/icons-material/Place';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  borderRadius: '16px',
  boxShadow: theme.shadows[10],
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main})`,
    opacity: 0.1,
    borderRadius: '16px'
  }
}));

const StatCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6]
  }
}));

const WelcomeSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ 
     py:8,
     px:3,
      bgcolor: 'background.default',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: -100,
        right: -100,
        width: '400px',
        height: '400px',
        background: `linear-gradient(45deg, ${theme.palette.primary.light}, transparent)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: 0.3
      }
    }}>
      <Box px={10}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <StyledImage 
              src={img} 
              alt="Welcome" 
              sx={{
                animation: `${float} 6s ease-in-out infinite`,
                transformOrigin: 'center bottom'
              }}
            />
            <Box sx={{
              position: 'absolute',
              bottom: -40,
              left: 30,
              display: { xs: 'none', md: 'none' }
            }}>
              <StatCard>
                <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    50K+
                  </Typography>
                  <Typography variant="body2">Monthly Deliveries</Typography>
                </Box>
              </StatCard>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography
              variant={isSmallScreen ? "h4" : "h2"}
              gutterBottom
              sx={{
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 4,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `${fadeIn} 1s ease-out`
              }}
            >
              Welcome to
              <Box component="span" display="block" sx={{ textTransform: 'uppercase' }}>
                Bharat Parcel
              </Box>
            </Typography>

            <Typography variant="h6" paragraph sx={{ 
              mb: 3, 
              fontWeight: 500,
              fontSize: '1.25rem',
              color: 'text.secondary'
            }}>
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Delivering Trust,
              </Box> One Parcel at a Time!
            </Typography>

            <Typography variant="body1" paragraph sx={{ 
              mb: 3, 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary'
            }}>
              At Bharat Parcel, we believe in making logistics simple, fast, and reliable. 
              Whether you're shipping across cities or tracking an important delivery, 
              we ensure your parcels reach their destination safely and on time.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <StatCard>
                  <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
                  <Typography variant="body1" fontWeight="500">
                    99% Delivery Success Rate
                  </Typography>
                </StatCard>
              </Grid>
              <Grid item xs={12} sm={6}>
                <StatCard>
                  <PlaceIcon sx={{ color: 'error.main', mr: 1 }} />
                  <Typography variant="body1" fontWeight="500">
                    200+ Cities Covered
                  </Typography>
                </StatCard>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              size="large"
              endIcon={<LocalShippingIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main})`,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[4]
                },
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WelcomeSection;