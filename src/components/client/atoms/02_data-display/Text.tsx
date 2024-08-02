import React from 'react';
import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import '@fontsource-variable/oswald';

const textStyles: { [key: string]: React.CSSProperties } = {
  h1: { fontFamily: `'Oswald Variable', sans-serif`, textTransform: 'uppercase', fontWeight: 600 },
  // Otros estilos
};

interface TextProps {
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: string;
  styles?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({ children, type = 'body1', color, styles }) => {
  const defaultStyles = textStyles[type] || {};

  return (
    <Typography
      variant={type}
      sx={{ ...defaultStyles, color, ...styles }}
    >
      {children}
    </Typography>
  );
};
