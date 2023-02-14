// components
import PrimaryBtn from "components/user/01-inputs/button/PrimaryBtn";
import SecondaryBtn from "components/user/01-inputs/button/SecondaryBtn";
import TextBtn from "components/user/01-inputs/button/TextBtn";
import PrimaryTitle from "components/user/02-data-display/typography/PrimaryTitle";
import SecondaryTitle from "components/user/02-data-display/typography/SecondaryTitle";
import InputText from "components/user/01-inputs/input/InputText";

// next components
import Head from "next/head";

// MUI components
import { Grid, Paper, Box, Container, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Head>
        <title>Único Reptiles | Ingresar</title>
      </Head>
      {/* title ___________________________ */}
      <PrimaryTitle title='login - admin único reptiles' />

      <Container maxWidth='lg'>
        {/* container grid ______________________________ */}
        <Grid container spacing={2}>
          {/* sub grid container */}
          <Grid item lg={3}>
            {/* sub grid container - photo */}
            <Grid item sx={{ mb: 2 }}>
              <Paper elevation={6} sx={{ height: "100%", p: 2, bgcolor: "primary.light" }}>
                dededed
              </Paper>
            </Grid>
            {/* sub grid container - options */}
            <Grid item lg={12}>
              <Paper elevation={6} sx={{ p: 2, bgcolor: "primary.light" }}>
                <Typography variant='subtitle1' color='white' fontWeight='bold'>
                  otras opciones que te pueden interesar :
                </Typography>
                <br />
                <br />
                {/* sub grid container - options - action buttons */}
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <PrimaryBtn text='regresar al inicio' startIcon='' endIcon='' color='success' newTab={false} routerLink='/' />
                  <SecondaryBtn text='¿necesitas ayuda?' startIcon='' endIcon='' color='info' newTab={false} routerLink='/' />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* login form _____________________________ */}
          <Grid item lg={9}>
            <Paper elevation={6} sx={{ width: "100%", height: "70vh", p: 2, bgcolor: "primary.light" }}>
              <SecondaryTitle title='ingresar como administrador' />
              {/* login form - form */}
              <Box component='form'>
                <InputText
                  label='administrador'
                  required={true}
                  disabled={false}
                  type={undefined}
                  helperText={"ingresa tu nombre de administrador"}
                  id={""}
                />

                <InputText
                  label='contraseña'
                  required={true}
                  disabled={false}
                  type={"password"}
                  helperText={"ingresa tu contraseña"}
                  id={""}
                />
                {/* login form - action buttons */}
                <Box sx={{ display: "flex", alignItems: "flex-end", mt: 12 }}>
                  <PrimaryBtn text='ingresar' color='success' startIcon={undefined} endIcon={undefined} newTab={false} routerLink={""} />
                  <TextBtn
                    text='olvidé mi contraseña'
                    color='warning'
                    routerLink={""}
                    size={"small"}
                    startIcon={undefined}
                    endIcon={undefined}
                    newTab={false}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
