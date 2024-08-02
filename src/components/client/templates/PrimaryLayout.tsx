'use client'
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { primaryLightTheme } from '@/themes/primaryLight.theme';
import { primaryDarkTheme } from '@/themes/primaryDark.theme';
import { NavBar } from '../organisms/Navbar';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? primaryDarkTheme : primaryLightTheme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Box sx={{marginBottom: '4em'}}/>
      {children}
    </ThemeProvider>
  );
};
