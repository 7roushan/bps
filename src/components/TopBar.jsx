
// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   IconButton,
//   Stack,
//   Typography,
//   Toolbar,
//   Container,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { useNavigate } from "react-router-dom";

// function TopBar() {
//   const navigate = useNavigate();
//   const [scrolling, setScrolling] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Responsive check
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Declare inside function

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.pageYOffset > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {!scrolling && (
//         <AppBar
//           position="static"
//           sx={{
//             backgroundColor: "white",
//             p:2,
            
//           }}
//         >
//           <Container>
//             <Toolbar
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 flexDirection: isMobile ? "column" : "row",
//                 textAlign: "center",
//                 py: isMobile ? 1 : 0,
//               }}
//             >
//               Logo Section
//               <Box>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     height: isSmallScreen ? "30px" : "40px",
//                     color: "blue",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   BPS
//                 </Typography>
//               </Box>

//               {/* Phone Contact */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center", // Centers the content horizontally
//                   gap: 1,
//                 }}
//               >
//                 <IconButton sx={{ color: "blue" }}>
//                   <LocalPhoneIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "black", textAlign: "center" }}
//                   >
//                     CALL US NOW
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "blue", textAlign: "center" }}
//                   >
//                     +91-6386963004
//                   </Typography>
//                 </Box>
                
//               </Box>
              

//               {/* Social Icons */}
//               {/* <Stack direction="row" spacing={1} sx={{ mt: isMobile ? 1 : 0 }}>
//                 <IconButton sx={{ color: "white" }}>
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton sx={{ color: "white" }}>
//                   <InstagramIcon />
//                 </IconButton>
//                 <IconButton sx={{ color: "white" }}>
//                   <TwitterIcon />
//                 </IconButton>
//                 <IconButton sx={{ color: "white" }}>
//                   <LinkedInIcon />
//                 </IconButton>
//               </Stack> */}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       )}
//     </>
//   );
// }

// export default TopBar;


import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Typography,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Responsive check

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!scrolling && (
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            p:0.8,
          }}
        >
          <Container>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: isMobile ? "column" : "row",
                textAlign: "center",
                py: isMobile ? 1 : 0,
              }}
            >
              {/* Logo Section */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    height: "40px",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  BPS
                </Typography>
              </Box>

              {/* Phone Contact Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <IconButton sx={{ color: "blue" }}>
                  <LocalPhoneIcon />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    CALL US NOW
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "blue", fontWeight: "bold" }}
                  >
                    +91-6386963004
                  </Typography>
                </Box>
              </Box>

              {/* Social Icons */}
              {/* <Stack direction="row" spacing={1} sx={{ mt: isMobile ? 1 : 0 }}>
                <IconButton sx={{ color: "blue" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: "blue" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: "blue" }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: "blue" }}>
                  <LinkedInIcon />
                </IconButton>
              </Stack> */}
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}

export default TopBar;
