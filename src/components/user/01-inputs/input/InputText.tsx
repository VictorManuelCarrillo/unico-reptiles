// MUI component
import { TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)({
  // label
  "& label": {
    color: "lightgrey",
  },
  // label focused
  "& label.Mui-focused": {
    color: "lightblue",
  },
  // ??
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  // input
  "& .MuiOutlinedInput-root": {
    color: "white",
    // border
    "& fieldset": {
      border: "2px solid lightgrey",
      borderRadius: "12px",
    },
    // border hover
    "&:hover fieldset": {
      borderColor: "white",
    },
    // focused border
    "&.Mui-focused fieldset": {
      borderColor: "lightblue",
    },
  },
});

interface Props {
  required: boolean,
  disabled: boolean,
  type: any,
  helperText: string,
  id: string,
  label: string
}

const InputText = (props: Props) => {
  return (
    <StyledTextField
      required={props.required}
      disabled={props.disabled}
      type={props.type}
      helperText={props.helperText}
      FormHelperTextProps={{ sx:{color: '#777777'}}}
      id={props.id}
      label={props.label}
      fullWidth
      sx={{my: 1}}
    />
  );
};

export default InputText;
