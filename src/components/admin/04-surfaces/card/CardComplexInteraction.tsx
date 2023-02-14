// components
import IconBtn from '../../01-inputs/button/IconBtn';
import TextBtn from "../../01-inputs/button/TextBtn";
// MUI components
import { Card, CardHeader, CardMedia, CardContent, Box, Typography } from "@mui/material";
// MUI icons
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
//MUI icons
import ShareIcon from "@mui/icons-material/Share";

interface Props {
  id: string;
  title: string;
  category: string;
  image: string;
  available: boolean;
  price: number;
  gender: string;
  age: string;
  morph: string;
  description: string;
}

// general function for count words in any props strings
function wordsArr(str: string) {
  const arr = str.split(" ");
  return arr.filter((word) => word !== "").length;
}

const CardComplexAction = (props: Props) => {
  // styled title card
  const styledTitle = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  return (
  // card component
    <Card elevation={6} sx={{ width: "22em", borderRadius: 2 / 3 }}>
  {/* card header ____________________ */}
      <CardHeader
        title={styledTitle}
        titleTypographyProps={{
          variant: "subtitle1",
          fontWeight: "bold",
          color: "white",
        }}
        subheader={props.category}
        subheaderTypographyProps={{ variant: "caption", textTransform: "uppercase", fontWeight: "bold", color: "lightgrey" }}
        sx={{ px: 1, py: 2 / 3, bgcolor: "primary.main" }}
        action={
          <Box sx={{mr: 1, mt: 1}}>
            <IconBtn newTab routerLink='http://www.facebook.com/share.php?u=unicoreptiles.com' tooltipTitle='¡compartir!' size='medium' color='info' icon={<ShareIcon fontSize="inherit"/>}/>
          </Box>
        }
      />
  {/* card media img ____________________ */}
      <CardMedia component='img' image={props.image} alt={props.title} title={props.title} />
      {props.available == true ? (
        ``
      ) : (
        <div style={{ position: "absolute", color: "red", top: 70, left: "50%", transform: "translateX(-50%)" }}>
          <Typography variant='subtitle1'>
            <strong>NO DISPONIBLE</strong>
          </Typography>
        </div>
      )}
  {/* card content - text and actions */}
      <CardContent sx={{ maxHeight: 270, px: 2, py: 1 / 2, color: "white", bgcolor: "primary.main" }}>

  {/* price ____________________ */}
        <Box component='div' sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 1 / 2 }}>
          {(() => {
            const cost = props.price.toString();
            if (cost.length <= 3) {
              return (
                <Typography variant='h3' fontWeight='bold'>
                  $ {cost}
                </Typography>
              );
            }
            if (cost.length == 4) {
              return (
                <Typography variant='h3' fontWeight='bold'>
                  $ {cost.charAt(0) + "," + cost.slice(1)}
                </Typography>
              );
            }
            if (cost.length == 5) {
              return (
                <Typography variant='h3' fontWeight='bold'>
                  $ {cost.slice(0, 2) + "," + cost.slice(2)}
                </Typography>
              );
            }
            return null;
          })()}
  {/* gender icon section ____________________ */}
          {(() =>{
            if (props.gender == 'male') {
              return <MaleIcon fontSize='large' sx={{ color: "#0384fc" }} />
            }
            if (props.gender == 'female') {
              return <FemaleIcon fontSize='large' sx={{ color: "#fc03d7" }} />
            }
            if (props.gender == 'unknown') {
              return <QuestionMarkIcon fontSize='large' sx={{ color: "#9d03fc" }} />
            }
            return null;
          }) ()}
        </Box>
  {/* age section ____________________ */}
        <Typography variant='body2'>
          <strong>EDAD: </strong>
          {props.age}
        </Typography>
  {/* morph section ____________________ */}
        {(() => {
          if (wordsArr(props.morph) >= 5) {
            return (
              <Typography variant='body2'>
                <strong>FASE: </strong> {props.morph.split(" ", 5).join(" ") + "..."}
              </Typography>
            );
          }
          return <Typography variant='body2'>{props.morph}</Typography>;
        })()}
        <br />
  {/* description section ____________________ */}
        {(() => {
          if (wordsArr(props.description) >= 28) {
            // return props.description.slice(0,180)+'...'
            return <Typography variant='body2'>{props.description.split(" ", 28).join(" ") + "..."}</Typography>;
          }
          return <Typography variant='body2'>{props.description}</Typography>;
        })()}
  {/* see more btn section ____________________ */}
        <Box sx={{mt: 2}}>
          <TextBtn newTab={false} text='VER MÁS' routerLink={`/ver-mas`} size={''} startIcon={''} endIcon={''}/>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComplexAction;
