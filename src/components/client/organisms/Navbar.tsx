import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  ListItemText,
  ListItem,
  List,
  Switch,
  FormControlLabel,
  Collapse,
  Menu,
  MenuItem,
  Button as MUIButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button } from '@/components/client/atoms/01_inputs/Button'; // Asegúrate de que este componente esté correctamente definido
import { Text } from '../atoms/02_data-display/Text'; // Asegúrate de que este componente esté correctamente definido

interface NavBarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const menuData = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  {
    text: 'Services',
    submenu: [
      { text: 'Web Development', path: '/services/web-development' },
      { text: 'Mobile Development', path: '/services/mobile-development' },
    ],
  },
  {
    text: 'Ola',
    submenu: [
      { text: 'Web ola', path: '/ola/web-development' },
      { text: 'Mobile ola', path: '/ola/mobile-ola' },
    ],
  },
  { text: 'Contact', path: '/contact' },
];

export const NavBar: React.FC<NavBarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [submenuAnchorEls, setSubmenuAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    setOpenSubmenu(null);
  };

  const handleMenuOpen = (submenu: string, event: React.MouseEvent<HTMLElement>) => {
    setSubmenuAnchorEls((prevState) => ({
      ...prevState,
      [submenu]: event.currentTarget,
    }));
  };

  const handleMenuClose = (submenu: string) => {
    setSubmenuAnchorEls((prevState) => ({ ...prevState, [submenu]: null }));
  };

  const handleSubmenuToggle = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setDrawerOpen(false);
    setOpenSubmenu(null);
  };

  const renderMenuItems = () =>
    menuData.map((item) => {
      if (item.submenu) {
        return (
          <React.Fragment key={item.text}>
            <Button
              type='text'
              color='inherit'
              onClick={(e) => handleMenuOpen(item.text, e)}
              aria-controls={`${item.text}-menu`}
              aria-haspopup='true'
              endIcon={submenuAnchorEls[item.text] ? <ExpandLess /> : <ExpandMore />}>
              {item.text}
            </Button>
            <Menu
              sx={{ marginTop: 0.8, marginLeft: -1 }}
              id={`${item.text}-menu`}
              anchorEl={submenuAnchorEls[item.text]}
              open={Boolean(submenuAnchorEls[item.text])}
              onClose={() => handleMenuClose(item.text)}
              keepMounted
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
              {item.submenu.map((subitem) => (
                <MenuItem
                  key={subitem.text}
                  onClick={() => handleNavigation(subitem.path)}>
                  {subitem.text}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        );
      }
      return (
        <Button
          type='text'
          key={item.text}
          color='inherit'
          onClick={() => handleNavigation(item.path)}>
          {item.text}
        </Button>
      );
    });

  const renderDrawerItems = () =>
    menuData.map((item) => (
      <React.Fragment key={item.text}>
        <ListItem onClick={item.submenu ? () => handleSubmenuToggle(item.text) : () => handleNavigation(item.path)}>
          <ListItemText primary={item.text} />
          {item.submenu ? openSubmenu === item.text ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
        {item.submenu && (
          <Collapse
            in={openSubmenu === item.text}
            timeout='auto'
            unmountOnExit>
            <List
              component='div'
              disablePadding>
              {item.submenu.map((subitem) => (
                <ListItem
                  key={subitem.text}
                  onClick={() => handleNavigation(subitem.path)}>
                  <ListItemText primary={subitem.text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Text type='h6'>único reptiles</Text>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />
              }
              label={isDarkTheme ? 'Dark' : 'Light'}
            />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>{renderMenuItems()}</Box>
          </Box>
        </Toolbar>
      </AppBar>
      <MUIButton
        sx={{
          position: 'absolute',
          display: { xs: 'flex', md: 'none' },
          right: '1.2em',
          bottom: '0.8em',
        }}
        onClick={handleDrawerToggle}>
        <MenuIcon />
      </MUIButton>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box
          sx={{ width: 250 }}
          role='presentation'>
          <List sx={{ ':hover': { cursor: 'pointer' } }}>{renderDrawerItems()}</List>
        </Box>
      </Drawer>
    </>
  );
};
