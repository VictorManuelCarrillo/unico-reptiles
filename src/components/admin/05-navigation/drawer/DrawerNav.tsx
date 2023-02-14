// react components
import { Fragment, useState } from "react";
// next components
import { useRouter } from "next/router";
// MUI components
import { Drawer, List, Box, ListItemButton, ListItemText, ListItemIcon, IconButton, Divider } from "@mui/material";
// MUI icon
import MenuIcon from "@mui/icons-material/Menu";

const DrawerNav = () => {
  // drawer handle state
  const [openDrawer, setOpenDrawer] = useState(false);
  // links drawer array
  const drawerNavLinks: { name: string; href: string }[] = [
    { name: "inicio", href: "/" },
    { name: "inicio", href: "/nosotros" },
    { name: "inicio", href: "/" },
    { name: "inicio", href: "/" },
  ];
  // next router
  const router = useRouter();

  return (
    <Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} PaperProps={{sx: {bgcolor: 'primary.light'}}}>
        <List sx={{ width: "70vw", px: "1em"}}>
          {drawerNavLinks.map((drawerLink, idx) => (
            <Box key={idx}>
              <ListItemButton onClick={() => router.push(drawerLink.href)}>
                <ListItemIcon>
                  <ListItemText sx={{ pt: "0.5em", color: 'white' }}>{drawerLink.name}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <Divider />
            </Box>
          ))}
        </List>
      </Drawer>

      <IconButton size='large' edge='start' aria-label='menu' onClick={() => setOpenDrawer(!openDrawer)} sx={{position: 'absolute', right: 0}}>
        <MenuIcon sx={{color: 'white'}}/>
      </IconButton>
    </Fragment>
  );
};

export default DrawerNav;
