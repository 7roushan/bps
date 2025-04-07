import { useParams } from "react-router-dom";
import { Myservices } from "../../data/Myservices";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import backimg from "../../assets/images/serviceBack.png";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = Myservices.find((item) => item.id === parseInt(id));

  if (!service)
    return (
      <Typography variant="h1" fontWeight="bold" mt={15}>
        Service Not Found
      </Typography>
    );

  return (
    <>
      <Box
        sx={{
          width: "100wv",
          height: "300px",
          mt: 16,
          backgroundImage: `url(${backimg})`,
          bgcolor: "#4f676a",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            {service.title}
          </Typography>
          {/* <Typography>{service.desc}</Typography> */}
        </Box>
      </Box>

      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" mt={2}>
          {service.titleInside}
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" mt={2} color="#808080">
              {service.descInside1}
            </Typography>
            <Typography variant="h4" fontWeight="bold" mt={2.5}>
              {service.titleInside1}
            </Typography>
            <Typography variant="subtitle1" mt={2} color="#808080">
              {service.descInsideTitle1}
            </Typography>
            
            <img
                      src={service.imgInside}
                      style={{ width: "80%", height: 300,}}
                    />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" mt={2} color="#808080">
              {service.descInside2}
            </Typography>
            <Typography variant="h4" fontWeight="bold" mt={6}>
              {service.titleInside2}
            </Typography>
            <Typography variant="subtitle1" mt={2} color="#808080">
              {service.descInsideTitle2}
            </Typography>

            <Typography variant="subtitle1" mt={2} color="#808080">
              {service.descInsideId2}
            </Typography>
            
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: "75px" }, // Auto height for smaller screens
          bgcolor: "#FFC107",
          display: "flex",
          alignItems: "center",
          paddingY: { xs: 2, md: 0 }, // Add padding for smaller screens
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" }, // Center text for small screens
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } }} // Responsive font size
          >
            Looking for a First-Class Career Consultant?
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: "bold",
              bgcolor: "#002e5b",
              borderRadius: "0px",
              marginTop: { xs: 2, sm: 0 }, // Add margin on small screens
              "&:hover": {
                color: "#002e5b",
                bgcolor: "#FFC107",
                border: "2px solid white",
              },
            }}
          >
            Get a Quote
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default ServiceDetails;
