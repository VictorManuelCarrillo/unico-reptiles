// next components
import { useRouter } from "next/router";
// MUI components
import { IconButton, Tooltip, Zoom } from "@mui/material/";

interface Props {
  tooltipTitle: string,
  icon: any,
  size: any,
  color: any,
  routerLink: string,
  newTab: boolean,
}
const IconBtn = (props: Props) => {
  // useRouter function
  const router = useRouter();

  if (props.newTab == true) {
    return (
      <Tooltip title={props.tooltipTitle} sx={{bgcolor: 'secondary.main'}} enterDelay={500} leaveDelay={1000} TransitionProps={{ timeout: 500 }} TransitionComponent={Zoom} arrow>
        <IconButton onClick={() => window.open(props.routerLink)} aria-label={props.tooltipTitle} size={props.size} color={props.color} sx={{'&: hover': {bgcolor: '#ffffff10'}}}>
        {props.icon}
      </IconButton>
      </Tooltip>
    )
  }

  return (
    <Tooltip title={props.tooltipTitle} sx={{bgcolor: 'secondary.main'}} enterDelay={500} leaveDelay={1000} TransitionProps={{ timeout: 500 }} TransitionComponent={Zoom} arrow>
      <IconButton onClick={() => router.push(props.routerLink)} aria-label={props.tooltipTitle} size={props.size} color={props.color} sx={{'&: hover': {bgcolor: '#ffffff10'}}}>
      {props.icon}
    </IconButton>
    </Tooltip>
  )
}

export default IconBtn;