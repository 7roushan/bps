

import React from "react";
import { Box, Typography, List, ListItem, Link, TextField, Button, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#333", color: "#fff", py:2 }}>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          
        }}
      >
        {/* CEO Statement Section */}
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 3 }}>
          <Typography variant="h1" sx={{ borderBottom: "2px solid #fff", pb: 1 }}>
           BPS 
          </Typography>
          <Typography variant="body2" sx={{ pr: 4, textAlign: "justify" }}>
          Bharat Parcel Services – Your parcel's whereabouts at your fingertips, delivering peace of mind


          </Typography>
          <Box component="img"
            src="https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/03/sign-light.png"
            alt="CEO Signature"
            sx={{ mt: 2, maxWidth: "100%" }}
            loading="lazy"
          />
        </Box>

        {/* Quick Links Section */}
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 3 }}>
          <Typography variant="h6" sx={{ borderBottom: "2px solid #fff", pb: 1 }}>
            QUICK LINKS
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <List sx={{ p: 0 }}>
              {[  "About Us", "Service", "How to Track", "Testimonial"].map((text) => (   

                <ListItem key={text} sx={{ p: 0 }}>
                  <Link href="#" color="inherit" underline="none">
                    {text}
                  </Link>
                </ListItem>
              ))}
            </List>
            <List sx={{ p: 0 }}>
              {["Rail Shipping", "Logistic Solutions", "Cargo Shipping"].map((text) => (
                <ListItem key={text} sx={{ p: 0 }}>
                  <Link href="#" color="inherit" underline="none">
                    {text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* Newsletter Signup Section */}
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 3 }}>
          <Typography variant="h6" sx={{ borderBottom: "2px solid #fff", pb: 1 }}>
            NEWS LETTER SIGNUP
          </Typography>
          <Typography variant="body2">
            If you want to receive our weekly updates about new offers and discounts, signup below.
          </Typography>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
            <TextField
              type="email"
              placeholder="Email Address"
              variant="outlined"
              size="small"
              sx={{ bgcolor: "#fff", borderRadius: 1 }}
              required
            />
            <Button variant="contained" sx={{ bgcolor: "#f04", color: "#fff", ":hover": { bgcolor: "#d03" } }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "#fff", opacity: 0.2, my: 2 }} />

      {/* Footer Bottom Section */}

      <Box sx={{ textAlign: "center", px: 2, minHeight: "100px" }}>
        <Typography variant="body2">
          Copyright © 2023. All rights Reserved by{" "}
          <Link href="https://themeforest.net/user/designthemes" color="inherit" underline="none">
            DesignThemes
          </Link>
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", p: 0, display: "flex",  justifyContent: "center", gap: 2, mt: 1 }}>
          {["Terms of Use", "Legal Disclaimer", "Privacy Policy", "Support", "Sitemap"].map((text) => (
            <ListItem key={text} sx={{ display: "inline", p: 0 }}>
              <Link href="#" color="inherit" underline="none">
                {text}
              </Link>
            </ListItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;


