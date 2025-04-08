// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   IconButton,
//   Typography,
//   Toolbar,
//   Container,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import { useNavigate } from "react-router-dom";

// function TopBar() {
//   const navigate = useNavigate();
//   const [scrolling, setScrolling] = useState(false);
//     const [showHeader, setShowHeader] = useState(true);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.pageYOffset > 50); // you can adjust 50 to control sensitivity
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
//             p: 0.8,
//             transition: "all 0.1s ease-in-out",
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
//               {/* Logo */}
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     height: "40px",
//                     color: "blue",
//                     fontWeight: "bold",
//                     fontSize: isMobile ? "1.8rem" : "2.2rem",
//                     letterSpacing: "2px",
//                     transition: "all 0.3s ease-in-out",
//                     opacity: showHeader ? 1 : 0,
//                     height: showHeader ? "auto" : 0,
//                     overflow: "hidden",
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
//                     alignItems: "flex-start",
//                   }}
//                 >
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "black", fontWeight: "bold" }}
//                   >
//                     CALL US NOW
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "blue", fontWeight: "bold" }}
//                   >
//                     +91-6386963004
//                   </Typography>
//                 </Box>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       )}
//     </>
//   );
// }

// export default TopBar;


import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function TopBar({ scrolling }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (scrolling) return null; // Hide when scrolling

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      
        transition: "all 0.1s ease-in-out",
      }}
    >
      <Box px={10}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            textAlign: "Start",
            py: isMobile ? 1 : 0,
          }}
        >
          {/* Logo */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                height: "40px",
                color: "blue",
                fontWeight: "bold",
                fontSize: isMobile ? "1.8rem" : "2.2rem",
                letterSpacing: "2px",
              }}
            >
              BPS
            </Typography>
          </Box>

          {/* Phone Contact */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton sx={{ color: "blue" }}>
              <LocalPhoneIcon />
            </IconButton>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="body2" sx={{ color: "black", fontWeight: "bold" }}>
                CALL US NOW
              </Typography>
              <Typography variant="body2" sx={{ color: "blue", fontWeight: "bold" }}>
                +91-6386963004
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default TopBar;
