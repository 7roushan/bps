// import {
//   Box,
//   Typography,
//   Button,
//   Divider,
//   Grid,
//   Avatar,
//   Stack,
// } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const WarehouseSection = () => {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: 2,
//         backgroundColor: "#f8f9fa",
//         textAlign: "center",
//       }}
//     >
//       <Box sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
//         <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
//           Deliver the Goods on time.
//         </Typography>
//         <Typography variant="h6" sx={{ color: "text.secondary", mb: 3 }}>
//           Over 100+ acre interior warehouse space
//         </Typography>

//         <Divider sx={{ my: 4, mx: "auto", width: "60px", borderWidth: 2 }} />

//         <Button
//           variant="contained"
//           color="primary"
//           endIcon={<ArrowForwardIcon />}
//           sx={{
//             mb: 6,
//             px: 4,
//             py: 1.5,
//             borderRadius: "8px",
//             textTransform: "none",
//             fontSize: "1.1rem",
//           }}
//         >
//           View Solutions
//         </Button>

//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={4}>
//             <Stack alignItems="center" spacing={2}>
//               <Avatar
//                 sx={{
//                   bgcolor: "primary.main",
//                   color: "white",
//                   width: 56,
//                   height: 56,
//                   fontSize: "1.5rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 1
//               </Avatar>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                 Solutions
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 Custom logistics solutions tailored to your needs
//               </Typography>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Stack alignItems="center" spacing={2}>
//               <Avatar
//                 sx={{
//                   bgcolor: "primary.main",
//                   color: "white",
//                   width: 56,
//                   height: 56,
//                   fontSize: "1.5rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 2
//               </Avatar>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                 Explore
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 Discover our global network and capabilities
//               </Typography>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Stack alignItems="center" spacing={2}>
//               <Avatar
//                 sx={{
//                   bgcolor: "primary.main",
//                   color: "white",
//                   width: 56,
//                   height: 56,
//                   fontSize: "1.5rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 3
//               </Avatar>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                 Get Started
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 Begin your logistics journey with us today
//               </Typography>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default WarehouseSection;

import {
  Box,
  Typography,
  Button,
  Divider,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WarehouseSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Deliver the Goods on time.
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mb: 3 }}>
          Over 100+ acre interior warehouse space
        </Typography>

        <Divider sx={{ my: 4, mx: "auto", width: "60px", borderWidth: 2 }} />

        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{
            mb: 6,
            px: 4,
            py: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1.1rem",
          }}
        >
          View Solutions
        </Button>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Stack alignItems="center" spacing={2} >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  width: 56,
                  height: 56,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  
                }}
              >
                1
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Solutions
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Custom logistics solutions tailored to your needs
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack alignItems="center" spacing={2}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  width: 56,
                  height: 56,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                2
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Explore
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Discover our global network and capabilities
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack alignItems="center" spacing={2}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  width: 56,
                  height: 56,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                3
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Get Started
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Begin your logistics journey with us today
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WarehouseSection;

