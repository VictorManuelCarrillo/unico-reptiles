// MUI Components
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component='footer' sx={{ p: 4, bgcolor: "primary.main" }}>
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Typography variant='h6'>Único Reptiles</Typography>
            <Typography variant='body2'>Sé diferente. Sé original ...</Typography>
            <br />
            <Typography variant='body2'>Somos una tienda especializada en la venta legal de especies exóticas</Typography>
            <br />
            <Typography variant='body2'>Tienda física. Ubícanos en Calle Nuevo Mundo #2381</Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.5642024750205!2d-103.37483464989555!3d20.646612886138914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adec2b9b09dd%3A0xa857fdb244996ae1!2sC.%20Nuevo%20Mundo%202381%2C%20Col%C3%B3n%2C%2044920%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1674851647217!5m2!1ses-419!2smx'
              width='100%'
              height='250'
              loading='lazy'
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
