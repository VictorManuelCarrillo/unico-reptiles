// components
import Layout from "components/user/06-layout/Layout";
import PrimaryTitle from "components/user/02-data-display/typography/PrimaryTitle";
import CardComplexAction from "components/user/04-surfaces/card/CardComplexInteraction";

// MUI components
import { Grid, Box, Typography, Container, Paper } from "@mui/material";
// MUI icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Home() {
  // social papers arr
  const socialPapers: { name: string; href: string; icon: React.ReactNode; color1: string; color2: string }[] = [
    { name: "facebook", href: "/", icon: <FacebookIcon fontSize='large' sx={{ marginRight: 2 }} />, color1: "#3b5998", color2: "#8b9dc3" },
    {
      name: "instagram",
      href: "/",
      icon: <InstagramIcon fontSize='large' sx={{ marginRight: 2 }} />,
      color1: "#833AB4",
      color2: "#FD1D1D",
    },
    { name: "whatsapp", href: "/", icon: <WhatsAppIcon fontSize='large' sx={{ marginRight: 2 }} />, color1: "#128C7E", color2: "#25D366" },
  ];

  return (
    <Layout titlePage='Inicio'>
      {/* banner section ______________________________ */}
      <Grid container>
        {/* banner section - text */}
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            minHeight: { xs: "20vh", sm: "30vh", md: "60vh", lg: "50vh" },
            bgcolor: "secondary.main",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant='h1'>ÚNICO REPTILES</Typography>
            <Typography>comercializadora legal de especies exóticas</Typography>
          </Box>
        </Grid>
        {/* banner section - image & text */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            minHeight: { xs: "40vh", sm: "40vh", md: "60vh", lg: "50vh" },
            backgroundImage: `url('../images/pages/home/banner.png')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Box>
            <Typography variant='h3'>NOSOTROS SOMOS TU MEJOR OPCIÓN</Typography>
            <Typography variant='h6'>PRESTIGIO, EXPERIENCIA Y CALIDAD ANIMAL</Typography>
            <br />
            <Typography variant='h5'>
              CON NOSOTROS SE DIFERENTE, SE ORIGINAL... <strong>SE ÚNICO REPTILES</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* social section ______________________________ */}
      <Container maxWidth='md' sx={{ p: 2 }}>
        <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {socialPapers.map((socialPaper, idx) => (
            <Grid item key={idx} xs={12} md={6} lg={4}>
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3 / 2,
                  color: "white",
                  background: `linear-gradient(to right bottom, ${socialPaper.color1}, ${socialPaper.color2})`,
                  "&: hover": {
                    cursor: "pointer",
                    background: `linear-gradient(to right bottom, ${socialPaper.color2}, ${socialPaper.color1})`,
                  },
                }}
              >
                {socialPaper.icon}
                <Typography variant='h5'>{socialPaper.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* available section ______________________________ */}
      {/* <Container maxWidth='lg'>
        <PrimaryTitle title='nuevos ejemplares disponibles' />

        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          {animals.slice(0, 4).map((animal, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <CardComplexAction
                id={animal.id}
                title={animal.title}
                category={animal.category}
                image={animal.img}
                available={animal.available}
                price={animal.price}
                gender={animal.gender}
                age={animal.age}
                morph={animal.morph}
                description={animal.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container> */}

      {/* store section ______________________________ */}
      <Container maxWidth='lg'>
        <PrimaryTitle title='visita nuestra tienda física' />

        <Grid container>
          <Grid item sm={12} md={4} lg={5} sx={{ p: 4, bgcolor: "secondary.main" }}>
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold" }}>
              VISITA NUESTRA TIENDA FÍSICA
            </Typography>
            <br />
            <br />
            <Typography>
              Visitanos en nuestra sucursal en <strong>Calle Nuevo Mundo #2381</strong> y descubre los ejemplares que tenemos disponibles
              para tí.
              <br />
              <br />
              Nuestro horarios:
              <br />
              <strong>Lun - Dom: 14:00 - 20:00</strong>
              <br />
              <br />
              <strong>También puedes buscarnos por Google Maps</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={7}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.5642024750205!2d-103.37483464989555!3d20.646612886138914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adec2b9b09dd%3A0xa857fdb244996ae1!2sC.%20Nuevo%20Mundo%202381%2C%20Col%C3%B3n%2C%2044920%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1674851647217!5m2!1ses-419!2smx'
              width='100%'
              height='450'
              loading='lazy'
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

// interface ctxProps {
//   ctx: any;
// }
// export const getServerSideProps = async (ctx: ctxProps) => {
//   const res = await fetch(`http://localhost:3000/api/animals`);
//   const animals = await res.json();

//   return {
//     props: {
//       animals,
//     },
//   };
// };
