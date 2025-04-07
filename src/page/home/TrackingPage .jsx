

// import {
//   Container,
//   Typography,
//   Divider,
//   Grid,
//   Box,
// } from "@mui/material";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import FireTruckIcon from "@mui/icons-material/FireTruck";
// import RocketIcon from "@mui/icons-material/Rocket";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// const HexagonIcon = ({ Icon, gradient }) => (
//   <Box
//     sx={{
//       width: "130px",
//       height: "112px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: gradient,
//       border: "4px solid #ffffff",
//       mx: "auto",
//       transition: "transform 0.3s ease-in-out",
//       clipPath:
//         "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
//       "&:hover": {
//         transform: "scale(1.1)",
//       },
//     }}
//   >
//     <Icon sx={{ fontSize: "60px", color: "#ffffff" }} />
//   </Box>
// );

// const TrackingPage = () => {
//   const gradients = [
//     "linear-gradient(45deg, #4CAF50, #81C784)",
//     "linear-gradient(45deg, #FF5722, #FF8A65)",
//     "linear-gradient(45deg, #2196F3, #64B5F6)",
//   ];

//   return (
//     <Container
      
//       sx={{
//         py: 10,
        
//         background:
//           "linear-gradient(135deg,rgb(46, 162, 235) 0%,rgb(53, 65, 136) 100%)",
//         borderRadius: 4,
//         boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//         my: 4,
//       }}
//     >
//       <Typography
//         variant="h1"
//         fontWeight={800}
//         color="#ffffff"
//         textAlign="center"
//         sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
//       >
//         How to Track Orders in BPS
//       </Typography>

//       <Typography
//         variant="h6"
//         color="#E3F2FD"
//         textAlign="center"
//         sx={{ maxWidth: "800px", mx: "auto", mt: 2 }}
//       >
//         Experience effortless tracking with our intuitive system. Uncover
//         real-time insights into your shipment's journey. Elevate your order
//         management with a seamless process, ensuring transparency and peace of
//         mind.
//       </Typography>

//       <Grid container spacing={6} mt={6}>
//         {/* Steps with Icons */}
//         <Grid item xs={12} container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={3} textAlign="center">
//             <HexagonIcon Icon={LocalShippingIcon} gradient={gradients[0]} />
//             <Typography
//               color="#fff"
//               fontWeight={600}
//               mt={2}
//               variant="h6"
//               px={2}
//             >
//               Enter your Order ID
//             </Typography>
//             <Typography color="#E8EAF6" fontSize="0.95rem" px={2}>
//               For a seamless tracking experience — your package, your journey, our commitment.
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={3} textAlign="center">
//             <HexagonIcon Icon={RocketIcon} gradient={gradients[1]} />
//             <Typography
//               color="#fff"
//               fontWeight={600}
//               mt={2}
//               variant="h6"
//               px={2}
//             >
//               Track your Order
//             </Typography>
//             <Typography color="#E8EAF6" fontSize="0.95rem" px={2}>
//               Seamless updates for confident deliveries, ensuring transparency in every step.
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={3} textAlign="center">
//             <HexagonIcon Icon={FireTruckIcon} gradient={gradients[2]} />
//             <Typography
//               color="#fff"
//               fontWeight={600}
//               mt={2}
//               variant="h6"
//               px={2}
//             >
//               Please wait, your order will arrive soon
//             </Typography>
//             <Typography color="#E8EAF6" fontSize="0.95rem" px={2}>
//               Your delivery is on its way. Anticipate the moment with confidence. Arrival is imminent.
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={3} textAlign="center">
//             <HexagonIcon Icon={BusinessCenterIcon} gradient={gradients[0]} />
//             <Typography
//               color="#fff"
//               fontWeight={600}
//               mt={2}
//               variant="h6"
//               px={2}
//             >
//               Your order has successfully arrived
//             </Typography>
//             <Typography color="#E8EAF6" fontSize="0.95rem" px={2}>
//               Your delivery, a triumph of efficiency. Celebrate the seamless arrival of your order.
//             </Typography>
//           </Grid>
//         </Grid>


//       </Grid> 
//     </Container>
//   );
// };

// export default TrackingPage;


import {
  Container,
  Typography,
  Grid,
  Box,
  keyframes,
  useTheme
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import RocketIcon from "@mui/icons-material/Rocket";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HexagonIcon = ({ Icon, gradient, index }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{
      position: 'relative',
      zIndex: 1,
      '&:hover': {
        '&::after': {
          opacity: 1,
        }
      }
    }}>
      <Box
        sx={{
          width: "130px",
          height: "112px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: gradient,
          border: "4px solid #ffffff",
          mx: "auto",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          animation: `${float} 4s ease-in-out infinite`,
          position: 'relative',
          '&:hover': {
            transform: "scale(1.15)",
            boxShadow: theme.shadows[10],
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '140%',
            height: '140%',
            background: gradient,
            opacity: 0.2,
            clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            zIndex: -1,
            transition: 'opacity 0.3s ease',
          }
        }}
      >
        <Icon sx={{ fontSize: "60px", color: "#ffffff", filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))" }} />
      </Box>
      <Box sx={{
        position: 'absolute',
        top: -60,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 40,
        height: 40,
        background: theme.palette.background.paper,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme.shadows[2],
        fontWeight: 700,
        color: theme.palette.text.primary,
      }}>
        {index + 1}
      </Box>
    </Box>
  );
};

const TrackingPage = () => {
  const theme = useTheme();
  const gradients = [
    "linear-gradient(45deg, #4CAF50, #81C784)",
    "linear-gradient(45deg, #FF5722, #FF8A65)",
    "linear-gradient(45deg, #2196F3, #64B5F6)",
    "linear-gradient(45deg, #9C27B0, #BA68C8)",
  ];

  const steps = [
    {
      Icon: LocalShippingIcon,
      title: "Enter your Order ID",
      text: "For a seamless tracking experience — your package, your journey, our commitment."
    },
    {
      Icon: RocketIcon,
      title: "Track your Order",
      text: "Seamless updates for confident deliveries, ensuring transparency in every step."
    },
    {
      Icon: FireTruckIcon,
      title: "Order in Transit",
      text: "Your delivery is on its way. Anticipate the moment with confidence. Arrival is imminent."
    },
    {
      Icon: BusinessCenterIcon,
      title: "Successful Delivery",
      text: "Your delivery, a triumph of efficiency. Celebrate the seamless arrival of your order."
    }
  ];

  return (
    <Container
      sx={{
        py: 10,
        background: "linear-gradient(135deg, rgba(46, 162, 235, 0.95) 0%, rgba(53, 65, 136, 0.95) 100%)",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        my: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient(${theme.palette.background.paper} 20%, transparent 20%)`,
          backgroundSize: '15px 15px',
          opacity: 0.1,
          top: 0,
          left: 0,
          zIndex: 0,
        }
      }}
    >
      <Box position="relative" zIndex={1}>
        <Typography
          variant="h1"
          fontWeight={800}
          textAlign="center"
          sx={{
            background: "linear-gradient(45deg,rgb(42, 15, 178),rgb(134, 186, 45))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            mb: 2,
            letterSpacing: '1.5px',

            [theme.breakpoints.down('md')]: {
              fontSize: '2.5rem',
            }
          }}
        >
          How to Track Orders in BPS
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mt: 2,
            mb: 6,
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 300,
            fontSize: '1.2rem',
            lineHeight: 1.6,
            [theme.breakpoints.down('md')]: {
              px: 2,
              fontSize: '1rem',
            }
          }}
        >
          Experience effortless tracking with our intuitive system. Uncover
          real-time insights into your shipment's journey. Elevate your order
          management with a seamless process, ensuring transparency and peace of
          mind.
        </Typography>

        <Grid container spacing={6} mt={6}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{
                maxWidth: 300,
                px: 3,
                py: 4,
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: theme.shadows[4],
                }
              }}>
                <HexagonIcon Icon={step.Icon} gradient={gradients[index]} index={index} />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 200,
                    mt: 6,
                    mb: 2,
                    textAlign: 'center',
                    minHeight: 60,
                    [theme.breakpoints.down('md')]: {
                      minHeight: 'auto',
                      mt: 3,
                    }
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.95rem',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  {step.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TrackingPage;