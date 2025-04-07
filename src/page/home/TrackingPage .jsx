import {
  Container,
  Typography,
  Divider,
  Stack,
  Box,
  Grid,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import RocketIcon from "@mui/icons-material/Rocket";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CameraIcon from "@mui/icons-material/Camera";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

const HexagonIcon = ({ Icon, gradient }) => (
  <Box
    sx={{
      width: "130px",
      height: "112px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: gradient,
      border: "4px solid #ffffff",
      mx: 2,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
  >
    <Icon sx={{ fontSize: "60px", color: "#ffffff" }} />
  </Box>
);

const TrackingPage = () => {
  const gradients = [
    "linear-gradient(45deg, #4CAF50, #81C784)",
    "linear-gradient(45deg, #FF5722, #FF8A65)",
    "linear-gradient(45deg, #2196F3, #64B5F6)",
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 10,
        background:
          "linear-gradient(135deg,rgb(84, 178, 233) 0%, #3F51B5 100%)",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        my: 4,
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Typography
          variant="h1"
          fontWeight={800}
          color="#ffffff"
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          How to Track Orders in BPS
        </Typography>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h3"
            fontWeight={700}
            color="#ffffff"
            sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Track Your Shipment in Real-Time
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="center" spacing={3}>
          <HexagonIcon Icon={LocalShippingIcon} gradient={gradients[0]} />
          <HexagonIcon Icon={FireTruckIcon} gradient={gradients[1]} />
          <HexagonIcon Icon={RocketIcon} gradient={gradients[2]} />
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography
            variant="body1"
            color="#E8EAF6"
            fontSize="1.1rem"
            px={{ xs: 2, md: 6 }}
            sx={{ maxWidth: "900px", margin: "0 auto" }}
          >
            1 Enter your Order ID
          </Typography>
          <Typography
            variant="body1"
            alignContent="right"
            color="#E8EAF6"
            fontSize="1.1rem"
            px={{ xs: 2, md: 6 }}
            sx={{ maxWidth: "500px", margin: "0 auto" }}
          >
            Enter your Order ID for a seamless tracking experience - your
            package, your journey, our commitment.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider
            sx={{
              width: "60%",
              borderColor: "rgba(255, 255, 255, 0.2)",
              borderWidth: 2,
              mx: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h4"
            fontWeight={700}
            color="#ffffff"
            sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Download Our Tracking App
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography
            variant="body1"
            color="#E8EAF6"
            fontSize="1.1rem"
            px={{ xs: 2, md: 6 }}
            sx={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Get instant updates and detailed tracking information right at your
            fingertips. Our mobile app offers a user-friendly interface and
            real-time notifications for your convenience.
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="center" spacing={3}>
          <HexagonIcon Icon={BusinessCenterIcon} gradient={gradients[0]} />
          <HexagonIcon Icon={CameraIcon} gradient={gradients[1]} />
          <HexagonIcon Icon={HistoryToggleOffIcon} gradient={gradients[2]} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrackingPage;

// import { Container, Typography, Divider, Box, Grid } from "@mui/material";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import FireTruckIcon from "@mui/icons-material/FireTruck";
// import RocketIcon from "@mui/icons-material/Rocket";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import CameraIcon from "@mui/icons-material/Camera";
// import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

// const HexagonIcon = ({ Icon, gradient }) => (
//   <Box
//     sx={{
//       width: { xs: "90px", sm: "110px", md: "130px" },
//       height: { xs: "80px", sm: "100px", md: "112px" },
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: gradient,
//       border: "4px solid #ffffff",
//       mx: 1,
//       transition: "transform 0.3s ease-in-out",
//       "&:hover": {
//         transform: "scale(1.1)",
//       },
//     }}
//   >
//     <Icon sx={{ fontSize: { xs: "40px", sm: "50px", md: "60px" }, color: "#ffffff" }} />
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
//       maxWidth="lg"
//       sx={{
//         py: 6,
//         px: { xs: 2, sm: 4 },
//         background: "linear-gradient(135deg,rgb(84, 178, 233) 0%, #3F51B5 100%)",
//         borderRadius: 2,
//         boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//         my: 4,
//       }}
//     >
//       <Grid container spacing={6} alignItems="center" justifyContent="center">
//         {/* Title */}
//         <Grid item xs={12} textAlign="center">
//           <Typography variant="h4" fontWeight={700} color="#ffffff" sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
//             Track Your Shipment in Real-Time
//           </Typography>
//         </Grid>

//         {/* Icons and Text - Responsive */}
//         <Grid item xs={12} md={6} container justifyContent="center" spacing={2}>
//           <HexagonIcon Icon={LocalShippingIcon} gradient={gradients[0]} />
//           <HexagonIcon Icon={FireTruckIcon} gradient={gradients[1]} />
//           <HexagonIcon Icon={RocketIcon} gradient={gradients[2]} />
//         </Grid>

//         <Grid item xs={12} md={6} textAlign="center">
//           <Typography variant="body1" color="#E8EAF6" fontSize="1rem" px={{ xs: 2, md: 6 }}>
//             Experience seamless tracking with our advanced system. Monitor your package's journey from pickup to delivery with precision and ease. Stay informed every step of the way.
//           </Typography>
//         </Grid>

//         {/* Divider */}
//         <Grid item xs={12}>
//           <Divider sx={{ width: "60%", borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: 2, mx: "auto" }} />
//         </Grid>

//         {/* Second Section - App Download */}
//         <Grid item xs={12} textAlign="center">
//           <Typography variant="h5" fontWeight={700} color="#ffffff" sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
//             Download Our Tracking App
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={6} textAlign="center">
//           <Typography variant="body1" color="#E8EAF6" fontSize="1rem" px={{ xs: 2, md: 6 }}>
//             Get instant updates and detailed tracking information right at your fingertips. Our mobile app offers a user-friendly interface and real-time notifications for your convenience.
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={6} container justifyContent="center" spacing={2}>
//           <HexagonIcon Icon={BusinessCenterIcon} gradient={gradients[0]} />
//           <HexagonIcon Icon={CameraIcon} gradient={gradients[1]} />
//           <HexagonIcon Icon={HistoryToggleOffIcon} gradient={gradients[2]} />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default TrackingPage;
