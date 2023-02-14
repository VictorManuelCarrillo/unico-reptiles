// MUI components
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

const PrimaryTitle = (props: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "70vw",
        m: 3,
        pl: 1,
        borderLeft: "1em solid",
        borderColor: "secondary.main",
      }}
    >
      <Typography variant='h3' fontWeight='bold' textTransform='uppercase'>
        {props.title}
      </Typography>
    </Box>
  );
};

export default PrimaryTitle;
