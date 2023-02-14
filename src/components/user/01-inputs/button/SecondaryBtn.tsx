// next components
import { useRouter } from "next/router";
// MUI components
import Button from "@mui/material/Button";

interface Props {
  text: string;
  startIcon: any;
  endIcon: any;
  color: any;
  newTab: boolean;
  routerLink: string;
}
const SecondaryBtn = (props: Props) => {
  //useRouter function
  const router = useRouter();

  if (props.newTab == true) {
    return (
      <Button
        onClick={() => window.open(props.routerLink)}
        variant='outlined'
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{
          px: 4,
          mx: 1/2,
          my: 1,
          fontWeight: 'bold',
          border: '2px solid',
          borderColor: props.color + '.main',
          borderRadius: 5/3,
          color: props.color + '.main',
          transition: 'all 0.5s',
          '&:hover': {
            color: 'common.white',
            bgcolor: props.color + '.dark',
            border: '2px solid',
            borderColor: props.color + '.dark'
          }}}
      >
        {props.text}
      </Button>
    );
  }
  return (
    <Button
      onClick={() => router.push(props.routerLink)}
      variant='outlined'
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={{
        px: 4,
        mx: 1/2,
        my: 1,
        fontWeight: 'bold',
        border: '2px solid',
        borderColor: props.color + '.main',
        borderRadius: 5/3,
        color: props.color + '.main',
        transition: 'all 0.5s',
        '&:hover': {
          color: 'common.white',
          bgcolor: props.color + '.dark',
          border: '2px solid',
          borderColor: props.color + '.dark'
        }}}
    >
      {props.text}
    </Button>
  );
};

export default SecondaryBtn;

// // MUI components
// import Button from '@mui/material/Button'
// // Next component
// import Link from 'next/link'

// const SecondaryBtn = ( props) => {

//   return (

//     <Link href={ props.href}>

//       <Button
//         variant='outlined'
//         size={ props.size}
//         startIcon={ props.startIcon}
//         endIcon={ props.endIcon}
//         sx={{
//           mx: 1,
//           my: 1,
//           fontWeight: 'bold',
//           border: '0.2em solid',
//           borderColor: 'button.secondary.main',
//           borderRadius: 2,
//           color: 'button.secondary.main',
//           transition: 'all 0.5s',
//           '&:hover': {
//             color: 'common.white',
//             bgcolor: 'button.secondary.main',
//             border: '0.2em solid',
//             borderColor: 'button.secondary.main'
//           }}}>

//         { props.text}
//       </Button>
//     </Link>
//   )
// }

// export default SecondaryBtn;
