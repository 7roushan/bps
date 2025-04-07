// // import React, { useState } from "react";

// // import {
// //   AppBar,
// //   Toolbar,
// //   Typography,
// //   Box,
// //   IconButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   useMediaQuery,
// //   Button,
// //   Menu,
// //   MenuItem,
// //   Modal,
// //   Grid,
// //   TextField,
// //   Stack,
// //   Container,
// //   colors,
// // } from "@mui/material";
// // import { ArrowDropDown, Height, Menu as MenuIcon } from "@mui/icons-material";
// // import { useTheme } from "@mui/material/styles";
// // import { Link } from "react-router-dom";
// // // import IMGLOGO from "../assets/images/logo.png";
// // import TopBar from "./TopBar";
// // import Header from "./Header";

// // const navLinks = [
// //   { to: "/", label: "Home" },
// //   { to: "/about", label: "About" },
// //   { to: "/services", label: "Services" },
// //   { to: "/contact", label: "Contact" },
// //   // { to: "/ites", label: "Technology" },
// //   // { to: "/career", label: "Transportation" },
// //   { to: "/employer", label: "Order" },
// // ];

// // const PublicAppBar = () => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// //   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState(null);
// //   const [menuAnchor, setMenuAnchor] = useState(null);
// //   const [open, setOpen] = useState(false);

// //   // Desktop Dropdown Handling
// //   const handleMenuOpen = (event, index) => {
// //     setMenuAnchor(event.currentTarget);
// //     setActiveDropdown(index);
// //   };

// //   const handleMenuClose = () => {
// //     setMenuAnchor(null);
// //     setActiveDropdown(null);
// //   };

// //   return (
// //     <>
// //       <AppBar
// //         position="fixed"
// //         sx={{

// //           backgroundColor: "blue-500",
// //           boxShadow: "none",
// //           // borderBottom: "1px solid #ddd",
// //         }}
// //       >
// //         <TopBar />
// //         {/* <Header/> */}
// //         <Container>
// //           <Toolbar
// //             sx={{
// //               display: "flex",
// //                minheight: "100px",
// //               justifyContent: "space-between",
// //                p: 2,
// //             }}
// //           >
// //           <Box>
// //               <Typography
// //                 variant="h1"
// //                 sx={{
// //                   height: isSmallScreen ? "40px" : "50px",
// //                   color: "white",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 BPS
// //               </Typography>
// //             </Box>

// //             {/* Desktop Navigation */}
// //             {!isMobile && (
// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   flexGrow: 1,
// //                   justifyContent: "center",
// //                   gap: 6,
// //                 }}
// //               >
// //                 {navLinks.map((link, index) => (
// //                   <Box key={index} sx={{ position: "relative" }}>
// //                     {link.dropdown ? (
// //                       <>
// //                         <Typography
// //                           sx={{
// //                             color: "white",
// //                             textDecoration: "none",
// //                             fontSize: "1rem",
// //                             fontWeight: "bold",
// //                             cursor: "pointer",
// //                             display: "flex",
// //                             alignItems: "center",
// //                             gap: 0.5,
// //                             "&:hover": { Color: "#f56960" },
// //                           }}
// //                           onMouseEnter={(e) => handleMenuOpen(e, index)}
// //                         >
// //                           {link.label}
// //                           <ArrowDropDown
// //                             sx={{
// //                               transform:
// //                                 activeDropdown === index
// //                                   ? "rotate(180deg)"
// //                                   : "rotate(0deg)",
// //                             }}
// //                           />
// //                         </Typography>
// //                         <Menu
// //                           anchorEl={menuAnchor}
// //                           open={activeDropdown === index}
// //                           onClose={handleMenuClose}
// //                           onMouseLeave={handleMenuClose}
// //                           sx={{ mt: 1 }}
// //                         >
// //                           {link.dropdown.map((item, subIndex) => (
// //                             <MenuItem
// //                               key={subIndex}
// //                               component={Link}
// //                               to={item.to}
// //                               sx={{
// //                                 backgroundColor: "white",
// //                                 "&:hover": { backgroundColor: "red" },
// //                               }}
// //                               onClick={handleMenuClose}
// //                             >
// //                               {item.label}
// //                             </MenuItem>
// //                           ))}
// //                         </Menu>
// //                       </>
// //                     ) : (
// //                       <Typography
// //                         component={Link}
// //                         to={link.to}
// //                         sx={{
// //                           color: "white",
// //                           textDecoration: "none",
// //                           fontSize: "1rem",
// //                           fontWeight: "bold",
// //                           "&:hover": { color: "#f56960" },
// //                         }}
// //                       >
// //                         {link.label}
// //                       </Typography>
// //                     )}
// //                   </Box>
// //                 ))}
// //               </Box>
// //             )}

// //             {/* Mobile Menu Icon */}
// //             {isMobile && (
// //               <IconButton
// //                 onClick={() => setDrawerOpen(true)}
// //                 sx={{ color: "black" }}
// //               >
// //                 <MenuIcon />
// //               </IconButton>
// //             )}
// //           </Toolbar>
// //         </Container>
// //       </AppBar>

// //       {/* Mobile Drawer */}
// //       <Drawer
// //         anchor="left"
// //         open={drawerOpen}
// //         onClose={() => setDrawerOpen(false)}
// //       >
// //         <List sx={{ width: 250 }}>
// //           {navLinks.map((link, index) => (
// //             <Box key={index}>
// //               <ListItem
// //                 onClick={() =>
// //                   setActiveDropdown(activeDropdown === index ? null : index)
// //                 }
// //               >
// //                 <ListItemText>
// //                   {link.dropdown ? (
// //                     <Box>
// //                       <Typography
// //                         sx={{
// //                           fontWeight: "bold",
// //                           cursor: "pointer",
// //                           color: "#000",
// //                           "&:hover": { color: "#f56960" },
// //                         }}
// //                       >
// //                         {link.label}
// //                       </Typography>
// //                       {activeDropdown === index && (
// //                         <Box sx={{ pl: 4 }}>
// //                           {link.dropdown.map((item, subIndex) => (
// //                             <ListItem key={subIndex} sx={{ pl: 4 }}>
// //                               <ListItemText>
// //                                 <Link
// //                                   to={item.to}
// //                                   style={{
// //                                     textDecoration: "none",
// //                                     color: "#000",
// //                                   }}
// //                                   onClick={() => setDrawerOpen(false)}
// //                                 >
// //                                   {item.label}
// //                                 </Link>
// //                               </ListItemText>
// //                             </ListItem>
// //                           ))}
// //                         </Box>
// //                       )}
// //                     </Box>
// //                   ) : (
// //                     <Link
// //                       to={link.to}
// //                       style={{
// //                         textDecoration: "none",
// //                         color: "#000",
// //                         fontWeight: "bold",
// //                       }}
// //                       onClick={() => setDrawerOpen(false)}
// //                     >
// //                       {link.label}
// //                     </Link>
// //                   )}
// //                 </ListItemText>
// //               </ListItem>
// //             </Box>
// //           ))}
// //         </List>
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default PublicAppBar;

// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   Container,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import { ArrowDropDown, Menu as MenuIcon } from "@mui/icons-material";
// import { useTheme } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import TopBar from "./TopBar";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/contact", label: "Contact" },
//   { to: "/employer", label: "Order" },
// ];

// const PublicAppBar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [menuAnchor, setMenuAnchor] = useState(null);
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY < lastScrollY) {
//         setShowHeader(true);
//       } else {
//         setShowHeader(false);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: "blue",
//           boxShadow: "none",
//         }}
//       >
//         <TopBar />
//         <Container>
//           <Toolbar
//             sx={{
//               display: "flex",
//               minHeight: "100px",
//               justifyContent: "space-between",
//               p: 2,
//             }}
//           >
//             {showHeader && (
//               <Box>
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     height: isSmallScreen ? "40px" : "50px",
//                     color: "white",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   BPS
//                 </Typography>
//               </Box>
//             )}

//             {!isMobile && (
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexGrow: 1,
//                   justifyContent: "center",
//                   gap: 6,
//                 }}
//               >
//                 {navLinks.map((link, index) => (
//                   <Typography
//                     key={index}
//                     component={Link}
//                     to={link.to}
//                     sx={{
//                       color: "white",
//                       textDecoration: "none",
//                       fontSize: "1rem",
//                       fontWeight: "bold",
//                       "&:hover": { color: "#f56960" },
//                     }}
//                   >
//                     {link.label}
//                   </Typography>
//                 ))}
//               </Box>
//             )}

//             {isMobile && (
//               <IconButton
//                 onClick={() => setDrawerOpen(true)}
//                 sx={{ color: "white" }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <List sx={{ width: 250 }}>
//           {navLinks.map((link, index) => (
//             <ListItem key={index} onClick={() => setDrawerOpen(false)}>
//               <ListItemText>
//                 <Link
//                   to={link.to}
//                   style={{
//                     textDecoration: "none",
//                     color: "#000",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {link.label}
//                 </Link>
//               </ListItemText>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default PublicAppBar;

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { ArrowDropDown, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/employer", label: "Order" },
];

const PublicAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "blue",
          boxShadow: "none",
        }}
      >
        <TopBar />
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              minHeight: "100px",
              justifyContent: "space-between",
              p: 1.2,
            }}
          >
            {showHeader && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between", // Ensures spacing between logo & contact
                  width: "100%", // Takes full width to avoid wrapping
                }}
              >
                {/* Logo */}
                <Typography
                  variant="h1"
                  sx={{
                    height: isSmallScreen ? "40px" : "50px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  BPS
                </Typography>
              </Box>
            )}

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                {navLinks.map((link, index) => (
                  <Typography
                    key={index}
                    component={Link}
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      "&:hover": { color: "#f56960" },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Contact Section */}
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center", // Ensures icon and text are vertically aligned
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <LocalPhoneIcon />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Centers text in relation to the icon
                  justifyContent: "center", // Ensures even spacing
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  CALL US NOW
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  +91-6386963004
                </Typography>
              </Box>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setDrawerOpen(false);
                window.scrollTo(0, 0); // Scroll to top on click
              }}
            >
              <ListItemText>
                <Link
                  to={link.to}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {link.label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default PublicAppBar;

