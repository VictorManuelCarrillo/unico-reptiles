// next components
import { useRouter } from "next/router";
// MUI components
import Button from "@mui/material/Button";

interface Props {
  text: string;
  color: string;
  routerLink: string;
  size: any;
  startIcon: any;
  endIcon: any;
  newTab: boolean;
}

const TextBtn = (props: Props) => {
  //useRouter function
  const router = useRouter();

  if (props.newTab == true) {
    return (
      <Button
        onClick={() => window.open(props.routerLink)}
        variant='text'
        size={props.size}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{ fontWeight: "bold", color: props.color + ".main", "&: hover": { color: props.color + ".light", bgcolor: "none" } }}
      >
        {props.text}
      </Button>
    );
  }
  return (
    <Button
      onClick={() => window.open(props.routerLink)}
      variant='text'
      size={props.size}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={{ fontWeight: "bold", color: props.color + ".main", "&: hover": { color: props.color + ".light", bgcolor: "none" } }}
    >
      {props.text}
    </Button>
  );
};

export default TextBtn;
