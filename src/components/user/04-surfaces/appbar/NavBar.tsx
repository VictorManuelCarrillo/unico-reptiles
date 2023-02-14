// components
import DrawerNav from "../../05-navigation/drawer/DrawerNav";
// Next Components
import { useRouter } from "next/router";
// MUI Components
import { AppBar, Toolbar, Typography, Button, useTheme, useMediaQuery, Box } from "@mui/material";

const NavBar = () => {
  // title
  const titleNav = <Typography variant='h6'>Único Reptiles</Typography>;
  // links array
  const navLinks: { name: string; href: string }[] = [
    { name: "inicio", href: "/" },
    { name: "inicio", href: "/nosotros" },
    { name: "inicio", href: "/" },
    { name: "inicio", href: "/" },
  ];
  // next router
  const router = useRouter();
  // MUI useTheme
  const theme = useTheme();
  // Responsive query
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar sx={{ height: 60 , bgcolor: 'primary.main'}}>
      <Toolbar>
        {isMatch ? (
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {titleNav}
            <DrawerNav />
          </Box>
        ) : (
          <Box sx={{ display: "flex" }}>
            {titleNav}
            <Box sx={{ mx: 6 }}>
              {navLinks.map((navLink, idx) => (
                <Button
                  key={idx}
                  color='inherit'
                  sx={{ fontWeight: 600, transition: "0.5s", borderRadius: 0, "&:hover": { color: "white", bgcolor: "#00000020" } }}
                  onClick={() => router.push(navLink.href)}
                >
                  {navLink.name}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;