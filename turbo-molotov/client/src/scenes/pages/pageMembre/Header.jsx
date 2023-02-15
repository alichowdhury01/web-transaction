import { Typography, Box, useTheme } from "@mui/material";


const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={"gray"}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={"aqua"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
