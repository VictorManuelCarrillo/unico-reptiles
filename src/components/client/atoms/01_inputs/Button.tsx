import React from 'react';
import { Button as Btn, IconButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles'; // Cambio aquí
import Link from 'next/link';

// Props interface
interface ButtonProps {
  type?: 'contained' | 'outlined' | 'text' | 'icon';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'inherit';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  newTab?: boolean;
  styles?: SxProps<Theme>;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: any) => void;
}

const TypeButton: React.FC<ButtonProps> = (props) => {
  const { type, color, startIcon, endIcon, size, styles, disabled, children, onClick } = props;

  const isButton = type === 'contained' || type === 'outlined' || type === 'text';
  const variant = type === 'icon' ? undefined : type;

  return isButton ? (
    <Btn
      variant={variant}
      size={size}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      sx={{
        margin: '0.2em',
        padding: type === 'outlined' ? '0.2em 0.9em' : '0.3em 1em',
        border: type === 'outlined' ? '3px solid' : null,
        borderRadius: type === 'outlined' ? '50px' : null,
        '&:hover': {
          border: type === 'outlined' ? '3px solid' : null,
        },
        ...styles,
      }}>
      {children}
    </Btn>
  ) : (
    <IconButton
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
      sx={styles}>
      {children}
    </IconButton>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { href, newTab, type, ...rest } = props;
  const linkProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return href ? (
    <Link
      href={href}
      passHref
      {...linkProps}>
      <TypeButton
        {...rest}
        type={type}
      />
    </Link>
  ) : (
    <TypeButton
      {...rest}
      type={type}
    />
  );
};
