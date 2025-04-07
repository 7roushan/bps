// import React from "react";
// import backimg from "../../assets/images/contact.jpg";
// import {
//   Breadcrumbs,
//   Link,
//   Grid,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Icon,
//   Container,
// } from "@mui/material";
// import { Phone, Email, LocationOn, Business } from "@mui/icons-material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const Contact = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           position: "relative",
//           width: "100wv",
//           height: "300px",
//           mt:10,
//           backgroundImage: `url(${backimg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           padding: "30px",
//           color: "white",
//           px: { xs: 2, sm: 4, md: 10, lg: 15 }
//         }}
//       >
//         <Breadcrumbs sx={{ color: "white" }}>
//           <Link underline="hover" color="inherit" href="/">
//             Home
//           </Link>
//           <Typography color="white">Contact Us</Typography>
//         </Breadcrumbs>
//         <Typography variant="h3" fontWeight="bold">
//           Contact Us
//         </Typography>
//       </Box>

//       <Box sx={{ padding: "40px", margin: "0 auto", maxWidth: "1100px" }}>
//         <Typography variant="body1" color="textSecondary">
//           Please let us know if you have a question, want to leave a comment, or
//           would like further information about SHSPL.
//         </Typography>
//         {/* Contact Info Section */}
//         <Grid container spacing={4} justifyContent="center">
//           {[
//             { icon: <Phone />, label: "Call us", value: "+918130107014" },
//             { icon: <Business />, label: "Landline", value: "+911202555999" },
//             {
//               icon: <Email />,
//               label: "Have any questions?",
//               value: "info@spiralegroup.com",
//             },
//             {
//               icon: <LocationOn />,
//               label: "Location",
//               value: "3rd Floor, Bhavani Complex, Sector-27, Noida-201304",
//             },
//           ].map((item, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index} textAlign="center">
//               <Box
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: "50%",
//                   border: "2px solid #FFC107",
//                   margin: "0 auto 10px",
//                   mt: 2,
//                 }}
//               >
//                 <Icon sx={{ fontSize: 30, color: "#002e5b" }}>{item.icon}</Icon>
//               </Box>
//               <Typography variant="subtitle1" color="textSecondary">
//                 {item.label}
//               </Typography>
//               <Typography variant="body1">{item.value}</Typography>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Feedback Form Section */}
//         <Box mt={5}>
//           <Typography variant="h6" gutterBottom>
//             Feedback Form
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Your Message *"
//                 multiline
//                 rows={4}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="First Name *" variant="outlined" />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="E-mail *" variant="outlined" />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="Subject *" variant="outlined" />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 fontWeight="bold"
//                 sx={{
//                   bgcolor: "#002e5b",
//                   fontWeight: "bold",
//                   borderRadius: "0px",
//                   "&:hover": { color: "#002e5b", bgcolor: "#FFC107" },
//                 }}
//               >
//                 Submit
//                 <ArrowForwardIosIcon
//                   sx={{ color: "#FFC107", "&:hover": { color: "#002e5b" } }}
//                 />
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: "100%",
//           height: { xs: "auto", md: "75px" }, // Auto height for smaller screens
//           bgcolor: "#FFC107",
//           display: "flex",
//           alignItems: "center",
//           paddingY: { xs: 2, md: 0 }, // Add padding for smaller screens
//         }}
//       >
//         <Container
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
//             justifyContent: "space-between",
//             alignItems: "center",
//             textAlign: { xs: "center", sm: "left" }, // Center text for small screens
//             px: { xs: 2, sm: 4, md: 10, lg: 15 }
//           }}
//         >
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } }} // Responsive font size
//           >
//             Looking for a First-Class Career Consultant?
//           </Typography>

//           <Button
//             variant="contained"
//             size="large"
//             sx={{
//               fontWeight: "bold",
//               bgcolor: "#002e5b",
//               borderRadius: "0px",
//               marginTop: { xs: 2, sm: 0 }, // Add margin on small screens
//               "&:hover": {
//                 color: "#002e5b",
//                 bgcolor: "#FFC107",
//                 border: "2px solid white",
//               },
//             }}
//           >
//             Get a Quote
//           </Button>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Contact;

import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contactBanner from "../../assets/images/contact.jpg"; // Background image for hero section

// Office locations data
const officeLocations = [
  {
    city: "Mumbai, India",
    address: "101 Marine Drive, Nariman Point, Mumbai, Maharashtra 400021",
    phone: "+91 22 1234 5678",
    email: "mumbai@logisticspro.com",
  },
  {
    city: "Delhi, India",
    address: "56 Connaught Place, New Delhi, Delhi 110001",
    phone: "+91 11 9876 5432",
    email: "delhi@logisticspro.com",
  },
  {
    city: "Bangalore, India",
    address: "12 Electronic City, Phase 1, Bangalore, Karnataka 560100",
    phone: "+91 80 2345 6789",
    email: "bangalore@logisticspro.com",
  },
  {
    city: "Noida, India",
    address: "Plot No. 32, Sector 62, Noida, Uttar Pradesh 201301",
    phone: "+91 120 4567 890",
    email: "noida@logisticspro.com",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <Box sx={{ bgcolor: "#F9FAFB" }}>
      {/* Hero Section */}
      {/* <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: { xs: "400px", md: "500px" },
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs sx={{ color: "white", mb: 2 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="white">Contact Us</Typography>
          </Breadcrumbs>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              mt: 2,
              maxWidth: "700px",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            We're here to assist with all your logistics needs. Reach out today!
          </Typography>
        </Container>
      </Box> */}

      {/* Main Content Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {/* Left Section - Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#1976D2", mb: 3 }}
            >
              Send Us a Message
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
              Have a question or need assistance? Fill out the form below, and
              our team will get back to you promptly.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="First Name *"
                variant="outlined"
                margin="normal"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                sx={{ bgcolor: "white" }}
              />
              <TextField
                fullWidth
                label="Email *"
                variant="outlined"
                margin="normal"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ bgcolor: "white" }}
              />
              <TextField
                fullWidth
                label="Subject *"
                variant="outlined"
                margin="normal"
                {...register("subject", { required: "Subject is required" })}
                error={!!errors.subject}
                helperText={errors.subject?.message}
                sx={{ bgcolor: "white" }}
              />
              <TextField
                fullWidth
                label="Your Message *"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                {...register("message", { required: "Message is required" })}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{ bgcolor: "white" }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  bgcolor: "#1976D2",
                  "&:hover": { bgcolor: "#1565C0" },
                  py: 1.5,
                  px: 4,
                }}
              >
                Send Message
              </Button>
            </form>
          </Grid>

          {/* Right Section - Contact Info and Map */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#1976D2", mb: 3 }}
            >
              Contact Information
            </Typography>
            <Card sx={{ p: 3, mb: 4, borderRadius: 2, boxShadow: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ color: "#1976D2", mr: 2 }} />
                <Typography variant="body1">+91 7017866149</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ color: "#1976D2", mr: 2 }} />
                <Typography variant="body1">caarun@rediffmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ color: "#1976D2", mr: 2 }} />
                <Typography variant="body1">
                  332, KUCHA GHASI RAM, FATEH PURI, CHANDNI CHOWK DELHI DL
                  110006
                </Typography>
              </Box>
            </Card>

            {/* Map Placeholder */}
            <Box
              sx={{
                height: "300px",
                bgcolor: "#E0E0E0",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 4,
                overflow: "hidden",
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.304215062335!2d77.22537445!3d28.6561594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17d19e24bd%3A0x33e23bb3c913d871!2s332%2C%20Kucha%20Ghasiram%2C%20Fatehpuri%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006%2C%20India!5e0!3m2!1sen!2sin!4v1712056781234!5m2!1sen!2sin"
              ></iframe>
            </Box>
          </Grid>
        </Grid>

        {/* Office Locations Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1976D2",
              mb: 3,
              textAlign: "center",
            }}
          >
            Our Global Offices
          </Typography>
          <Grid container spacing={3}>
            {officeLocations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    minHeight: "200px",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#1976D2", mb: 2 }}
                  >
                    {location.city}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ mr: 1 }} />
                    {location.address}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                    <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    {location.phone}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    {location.email}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: 4,
          bgcolor: "#1976D2",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Ready to Optimize Your Logistics?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#FFC107",
              color: "black",
              "&:hover": { bgcolor: "#FFB300" },
              px: 4,
              py: 1.5,
            }}
          >
            Request a Quote
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
