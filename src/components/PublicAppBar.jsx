

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
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
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
  const [scrolling, setScrolling] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolling(currentScroll > 10);

      if (currentScroll = lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1200,
          backgroundColor: "blue",
          boxShadow: "none",
        }}
      >
        <TopBar scrolling={scrolling} />
        <Box px={10}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "100px",
              
              backgroundColor: "blue",
              boxShadow: showHeader ? "0 4px 12px rgba(34, 95, 208, 0.2)" : "none",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {/* Logo - only when scrolling */}
            {scrolling && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease-in-out",
                  opacity: showHeader ? 1 : 0,
                  height: showHeader ? "auto" : 0,
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: isSmallScreen ? "1.8rem" : "2.2rem",
                    color: "#fff",
                    fontWeight: 800,
                    letterSpacing: "2px",
                  }}
                >
                  BPS
                </Typography>
              </Box>
            )}

            {/* Nav Links (Desktop Only) */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                {navLinks.map((link, index) => (
                  <Typography
                    key={index}
                    component={Link}
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: 0,
                        left: 0,
                        backgroundColor: "#f56960",
                        transition: "0.3s",
                      },
                      "&:hover:after": {
                        width: "100%",
                      },
                      "&:hover": {
                        color: "#f56960",
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "white" }}>
                <MenuIcon fontSize="large" />
              </IconButton>
            )}
          </Toolbar>
        </Box>
      </AppBar>

      {/* Drawer for mobile */}
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
                window.scrollTo(0, 0);
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


