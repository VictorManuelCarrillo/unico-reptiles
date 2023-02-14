// components
import Layout from "components/admin/06-layout/Layout";
import PrimaryBtn from "components/user/01-inputs/button/PrimaryBtn";
// MUI components
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box } from "@mui/material";
// MUI icons
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
// interfaces
import { Animal } from "interfaces/Animals";

import { styled } from '@mui/system';

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#00000015'
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})

interface Props {
  animals: Animal[];
}
export default function AdminHome({ animals }: Props) {
  return (
    <Layout titlePage='Panel principal'>
      <Box sx={{p: 1}}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{bgcolor: 'secondary.main'}}>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Imagen:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Nombre:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Categoría:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Fases:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Descripción:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>precio:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Edad:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Género:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Disponible:</strong>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='subtitle1'>
                    <strong>Acciones:</strong>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {animals.map((animal, idx) => (
                <StyledTableRow key={idx}>
                  <TableCell>
                    <Box
                      component='img'
                      src='/images/pages/home/banner.png'
                      alt={animal.title}
                      sx={{ maxWidth: { sm: "5em", lg: "8em" }, borderRadius: 2 }}
                    />
                  </TableCell>
                  <TableCell>{animal.title}</TableCell>
                  <TableCell>{animal.category}</TableCell>
                  <TableCell>{animal.morph}</TableCell>
                  <TableCell>{animal.description}</TableCell>
                  <TableCell>{"$" + animal.price}</TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell>{(() =>{
                    if (animal.gender == 'male') {
                      return <MaleIcon fontSize='large' sx={{ color: "#0384fc" }} />
                    }
                    if (animal.gender == 'female') {
                      return <FemaleIcon fontSize='large' sx={{ color: "#fc03d7" }} />
                    }
                    if (animal.gender == 'unknown') {
                      return <QuestionMarkIcon fontSize='large' sx={{ color: "#9d03fc" }} />
                    }
                    return null;
                    }) ()}
                  </TableCell>
                  {/* <TableCell>{animal.available.toString()}</TableCell> */}
                  <TableCell>
                    {animal.available == true
                    ? <Typography textAlign='center' color='success.main'><strong>DISPONIBLE</strong></Typography>
                    : <Typography textAlign='center' color='error.main'><strong>NO DISPONIBLE</strong></Typography>}
                  </TableCell>
                  <TableCell>
                    <PrimaryBtn text='eliminar' startIcon={undefined} endIcon={undefined} color='error' newTab={false} routerLink={""}/>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/animals`);
  const animals = await res.json();

  return {
    props: {
      animals,
    },
  };
};
