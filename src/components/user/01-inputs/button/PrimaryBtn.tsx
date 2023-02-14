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
const PrimaryBtn = (props: Props) => {
  //useRouter function
  const router = useRouter();

  if (props.newTab == true) {
    return (
      <Button
        onClick={() => window.open(props.routerLink)}
        variant='contained'
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{
          px: 4,
          mx: 1/2,
          my: 1,
          color: "#1f1f1f",
          bgcolor: props.color + ".main",
          borderRadius: 5,
          fontWeight: "bold",
          "&: hover": { bgcolor: props.color + ".dark" },
        }}
      >
        {props.text}
      </Button>
    );
  }
  return (
    <Button
      onClick={() => router.push(props.routerLink)}
      variant='contained'
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={{
        px: 4,
        mx: 1/2,
        my: 1,
        color: "#1f1f1f",
        bgcolor: props.color + ".main",
        borderRadius: 5,
        fontWeight: "bold",
        "&: hover": { bgcolor: props.color + ".dark" },
      }}
    >
      {props.text}
    </Button>
  );
};

export default PrimaryBtn;
