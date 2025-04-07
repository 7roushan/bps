// import { Box, Typography, Divider, Container, Grid } from "@mui/material";
// import { styled } from "@mui/system";
// import img from "../../assets/image1/book.png";

// const QuoteText = styled(Typography)(({ theme }) => ({
//   position: "relative",
//   paddingLeft: theme.spacing(4),
//   "&:before": {
//     content: '"\\201C"',
//     position: "absolute",
//     left: 0,
//     top: "-0.4em",
//     fontSize: "4rem",
//     color: theme.palette.text?.secondary || "#666666",
//   },
// }));

// const WelcomeSection = () => {
//   return (
//     <Box sx={{ py: 8, bgcolor: "background.paper" }}>
//       <Container maxWidth="md">
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={6}>
//             <img 
//               src={img} 
//               alt="Welcome" 
//               style={{ 
//                 width: "100%", 
//                 height: "auto",
//                 borderRadius: "8px" 
//               }}
//             />
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" gutterBottom>
//               Welcome to
//               <Box
//                 component="span"
//                 sx={{
//                   display: "block",
//                   color: "primary.main",
//                   textTransform: "uppercase",
//                   fontSize: "inherit",
//                 }}
//               >
//                 Logistics International
//               </Box>
//             </Typography>

//             <Typography variant="body1" paragraph sx={{ mb: 3 }}>
//               Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
//               turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
//               a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
//               porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
//             </Typography>

//             <Typography variant="body1" paragraph sx={{ mb: 3 }}>
//               Morbi in sem quis dui placerat ornare. Pellentesque odio nisl, euismod
//               in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
//             </Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <QuoteText
//               variant="body1"
//               sx={{
//                 fontStyle: "italic",
//                 mb: 4,
//                 color: (theme) => theme.palette.text?.secondary || "#666666",
//               }}
//             >
//               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
//               fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
//               sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
//               sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
//               tempora incidunt ut labore et dolore magnam aliquam.
//             </QuoteText>

//             <Divider
//               sx={{
//                 my: 6,
//                 borderColor: (theme) =>
//                   theme.palette.divider || "rgba(0, 0, 0, 0.12)",
//               }}
//             />

//             <Typography
//               variant="h6"
//               align="center"
//               sx={{
//                 textTransform: "uppercase",
//                 fontWeight: "bold",
//                 letterSpacing: "1px",
//                 color: "primary.main",
//               }}
//             >
//               Join us we cover the whole world
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WelcomeSection;




// import { Box, Typography, Divider, Container, Grid,useMediaQuery } from "@mui/material";
// import { styled } from "@mui/system";
// import img from "../../assets/image1/book.png";
// import { useTheme } from "@mui/material/styles";
// const QuoteText = styled(Typography)(({ theme }) => ({
//   position: "relative",
//   paddingLeft: theme.spacing(4),
//   "&:before": {
//     content: '"\\201C"',
//     position: "absolute",
//     left: 0,
//     top: "-0.4em",
//     fontSize: "4rem",
//     color: theme.palette.text?.secondary || "#666666",
//   },
// }));

// const WelcomeSection = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   return (
//     <Box sx={{ py:5, bgcolor: "background.paper", px: { xs: 2, sm: 4, md: 10, lg: 15 } }}>
      
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={6}>
//             <img 
//               src={img} 
//               alt="Welcome" 
//               style={{ 
//                 width: "400px", 
              
//                 borderRadius: "8px" 
//               }}
//             />
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//           <Typography
//           fontSize={22}
//       variant={isSmallScreen ? "h4" : "h3"} // Adjust size based on screen width
//       gutterBottom
//       sx={{
//         textAlign: isSmallScreen ? "center" : "left",
//         fontWeight: "bold",
      
//       }}
//     >
//       Welcome to
//       <Box
//         component="span"
//         sx={{
//           display: "block",
//           color: "primary.main",
//           textTransform: "uppercase",
//           fontSize: "inherit", // Inherits font size dynamically
//         }}
//       >
//         Bharat Parcel
//       </Box>
//     </Typography>

//             <Typography variant="body1" paragraph sx={{ mb: 3 }}>
//           Bharat Parcel – Delivering Trust, One Parcel at a Time! 🚛📦


//             </Typography>

//             <Typography variant="body1" paragraph sx={{ mb: 3 }}>
//             At Bharat Parcel, we believe in making logistics simple, fast, and reliable. Whether you're shipping across cities or tracking an important delivery, we ensure your parcels reach their destination safely and on time. With advanced tracking, secure handling, and a commitment to excellence, we bridge the distance between you and your shipments.


//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             {/* <QuoteText
//               variant="body1"
//               sx={{
//                 fontStyle: "italic",
//                 mb: 4,
//                 color: (theme) => theme.palette.text?.secondary || "#666666",
//               }}
//             >
//               Experience seamless logistics with Bharat Parcel – because your trust drives us forward! 🚀✨
//             </QuoteText> */}

//             {/* <Divider
//               sx={{
//                 my: 6,
//                 borderColor: (theme) =>
//                   theme.palette.divider || "rgba(0, 0, 0, 0.12)",
//               }}
//             />

//             <Typography
//               variant="h6"
//               align="center"
//               sx={{
//                 textTransform: "uppercase",
//                 fontWeight: "bold",
//                 letterSpacing: "1px",
//                 color: "primary.main",
//               }}
//             >
//               Join us we cover the whole world
//             </Typography> */}
//           </Grid>
//         </Grid>
     
//     </Box>
//   );
// };

// export default WelcomeSection;


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
  maxWidth: '500px',
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
      py: 10, 
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
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
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
      </Container>
    </Box>
  );
};

export default WelcomeSection;