// MUI components
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

const SecondaryTitle = (props: Props) => {
  return (
    <Box
      sx={{
        my: 2,

      }}
    >
      <Typography
        variant='h4'
        fontWeight='bold'
        textAlign='center'
        textTransform='capitalize'
        sx={{ maxWidth: "90vw", mx: "auto", color: "#d9d9d9" }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default SecondaryTitle;
