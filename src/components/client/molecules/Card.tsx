'use client';
import React, { useState, ReactNode } from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Share as ShareIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

import { Text } from '../atoms/02_data-display/Text';

interface BasicCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonArea?: ReactNode;
  imageUrl?: string;
  href?: string;
  newTab?: boolean;
}

const commonCardStyles = {
  width: { xs: '90vw', sm: '70vw', md: '40vw', lg: '20vw', xl: '18vw' },
  margin: '0.5em',
};

const menuItems = [
  { icon: <ShareIcon fontSize='small' />, text: 'Compartir' },
  { icon: <FavoriteIcon fontSize='small' />, text: 'Favoritos' },
];

const CardMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={{ top: -5, left: -5 }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const CardContentSection: React.FC<BasicCardProps> = ({ title, subtitle, description }) => (
  <CardContent>
    <Text
      type='h4'
      styles={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
      {title}
    </Text>
    {subtitle && (
      <Text
        type='subtitle2'
        styles={{ fontWeight: 'bold', marginTop: -1 }}>
        {subtitle}
      </Text>
    )}
    <Text
      type='body1'
      styles={{ marginTop: '1em' }}>
      {description}
    </Text>
  </CardContent>
);

const BaseCard: React.FC<BasicCardProps & { children: ReactNode }> = ({ children, ...props }) => (
  <MuiCard sx={commonCardStyles}>{children}</MuiCard>
);

const BasicCard: React.FC<BasicCardProps> = (props) => (
  <BaseCard {...props}>
    <CardContentSection {...props} />
    <CardActions>{props.buttonArea}</CardActions>
  </BaseCard>
);

const MediaCard: React.FC<BasicCardProps> = (props) => (
  <BaseCard {...props}>
    <CardMedia
      sx={{ height: '10em' }}
      image={props.imageUrl}
      title={props.title}
    />
    <CardContentSection {...props} />
    <CardActions>{props.buttonArea}</CardActions>
  </BaseCard>
);

const ActionCard: React.FC<BasicCardProps> = (props) => {
  const linkProps = props.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <BaseCard {...props}>
      <CardActionArea
        component={props.href ? 'a' : 'div'}
        href={props.href || undefined}
        {...linkProps}>
        <CardMedia
          sx={{ height: '10em' }}
          image={props.imageUrl}
          title={props.title}
        />
        <CardContentSection {...props} />
      </CardActionArea>
    </BaseCard>
  );
};

const ComplexCard: React.FC<BasicCardProps> = (props) => (
  <BaseCard {...props}>
    <CardHeader
      sx={{ padding: '0.6em' }}
      title={props.title}
      subheader={props.subtitle}
      action={<CardMenu />}
    />
    <CardMedia
      sx={{ height: '10em' }}
      image={props.imageUrl}
      title={props.title}
    />
    <CardContentSection {...props} />
    <CardActions>{props.buttonArea}</CardActions>
  </BaseCard>
);

interface CardProps extends BasicCardProps {
  type: 'basic' | 'media' | 'action' | 'complex';
}

export const Card: React.FC<CardProps> = ({ type, ...rest }) => {
  switch (type) {
    case 'basic':
      return <BasicCard {...rest} />;
    case 'media':
      return <MediaCard {...rest} />;
    case 'action':
      return <ActionCard {...rest} />;
    case 'complex':
      return <ComplexCard {...rest} />;
    default:
      return null;
  }
};
