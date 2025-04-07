import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Ab1 from "../../assets/images/aboutslide2.jpg";
import ContentSection from "./ContentSection";
import WelcomeSection from "../home/WelcomeSection";
import LandingPage2 from "./LandingPage2";
import ServicesPage from "../About/ServicesPage";
import  Global  from "../About/Global";
import Readyto from "../Designe/Readyto";

const menuItems = ["Company Overview", "Careers", "Company History"];

const About = () => {
  return (
    // <Box mt={15} sx={{ p: { xs: 2, md: 6 } }}>
    //   {/* Breadcrumbs */}
    //   <Breadcrumbs sx={{ color: "#777777" }}>
    //     <Link underline="hover" color="inherit" href="/">
    //       Home
    //     </Link>
    //     <Typography color="#777777">Company Overview</Typography>
    //   </Breadcrumbs>

    //   <Grid container spacing={4} alignItems="center">
    //     {/* Content Section */}
    //     <Grid item xs={12} md={4}>
    //       <Typography variant="h3" sx={{ fontWeight: "bold" }}>
    //         Meet our <br /> brilliant minds!
    //       </Typography>
    //       <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
    //         Our personnel have evaluated liability, causation, and/or damage
    //         issues in hundreds of litigation and dispute matters.
    //       </Typography>
    //       <Box>
    //         <Button
    //           variant="outlined"
    //           sx={{ background: "red", color: "white" }}
    //         >
    //           Learn More
    //         </Button>
    //       </Box>
    //     </Grid>

    //     {/* Image Section */}
    //     <Grid item xs={12} md={4}>
    //       <img
    //         src={Ab1}
    //         alt="Company leadership team discussing strategy"
    //         style={{ width: "100%", borderRadius: "10px" }}
    //       />
    //     </Grid>

    //     {/* Sidebar Menu */}
    //     <Grid item xs={12} md={4}>
    //       <Card sx={{ mb: 2, p: 1, bgcolor: "#f5f5f5" }}>
    //         {menuItems.map((item, index) => (
    //           <Typography
    //             key={index}
    //             sx={{
    //               p: 1,
    //               borderBottom:
    //                 index < menuItems.length - 1 ? "1px solid #ddd" : "none",
    //               cursor: "pointer",
    //               "&:hover": { color: "#002b5b", fontWeight: "bold" },
    //             }}
    //           >
    //             {item}
    //           </Typography>
    //         ))}
    //       </Card>

    //       {/* Company Presentation Button */}
    //       <Button
    //         variant="contained"
    //         sx={{
    //           bgcolor: "#002b5b",
    //           color: "white",
    //           textTransform: "none",
    //           width: "100%",
    //           py: 1.5,
    //           "&:hover": { bgcolor: "#ffc107" },
    //         }}
    //       >
    //         📄 Company Presentation
    //       </Button>

    //       {/* Help Card */}
    //       <Card sx={{ mt: 2, bgcolor: "#ffc107", color: "black", p: 2 }}>
    //         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    //           How can we help you?
    //         </Typography>
    //         <Typography variant="body2" sx={{ mt: 1 }}>
    //           Contact us at the SHSPL office nearest to you or submit a business
    //           inquiry online.
    //         </Typography>
    //         <Button
    //           variant="contained"
    //           sx={{
    //             mt: 2,
    //             bgcolor: "black",
    //             color: "white",
    //             textTransform: "none",
    //             width: "40%",
    //             "&:hover": { bgcolor: "#001f3f" },
    //           }}
    //           startIcon={<PhoneIcon />}
    //         >
    //           Contacts
    //         </Button>
    //       </Card>
    //     </Grid>

    //     {/* Company Overview Section */}
    //     <Grid item xs={12} container spacing={4} alignItems="center">
    //       {/* Company Overview Text Section */}
    //       <Grid item xs={12} md={8}>
    //         <Typography variant="h3" color="black" gutterBottom>
    //           Company Overview
    //         </Typography>
    //         <Typography variant="body1" color="text.secondary" mt={2}>
    //           Spirale HR Solutions Pvt. Ltd. is a leading employment services
    //           industry since 2009, offering customers vital services to meet
    //           their Global Recruitment & Staffing needs with a PAN India
    //           presence in Delhi NCR (Noida) and Hyderabad. A well-established,
    //           dynamic organization on the high road to further growth,
    //           expansion, and success. Our extensive candidate database is
    //           continuously updated and drawn from our career site registration,
    //           employer branding initiatives, job sites, campus recruitment,
    //           print media advertising, referrals, and headhunting through our
    //           dedicated and discreet resourcing team. We use creative solutions,
    //           in-depth market research, and cutting-edge technology to
    //           proactively identify talent in a scalable and sustainable way. We
    //           have a humongous web-enabled, easily searchable database of
    //           candidates across multiple levels and industries that enable The
    //           Search House to recommend ideally suitable candidates to clients
    //           in the fastest turnaround time.
    //         </Typography>
    //       </Grid>

    //       {/* Testimonial Card */}
    //       <Grid item xs={12} md={4} display="flex" justifyContent="center">
    //         <Card sx={{ maxWidth: 400, p: 2, boxShadow: 3, borderRadius: 2 }}>
    //           <CardContent>
    //             <Typography variant="body1">
    //               SHSPL really helped us <br />
    //               achieve our career goals. The <br />
    //               slick presentation along with <br />
    //               fantastic readability ensures <br />
    //               that our career standing is <br />
    //               stable. <br />
    //             </Typography>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //       <Card>
    //         <CardContent>
    //           <Typography>
    //             Vision : To be the leader in providing the largest and the most
    //             productive pool of Human resource talent to clients. <br />
    //             To make a meaningful and significant contribution to growth and
    //             progress of employers, jobseekers and community <br />
    //             at large <br />
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    //   <ContentSection/>
    // </Box>
    <>
    
    <LandingPage2/>
    <ServicesPage/>
    <Global/>
    <Readyto/>
  
    

    </>
  );
};

export default About;
