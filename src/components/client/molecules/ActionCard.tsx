import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Box } from '@mui/material';
import { Text } from '../atoms/02_data-display/Text';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  aspectRatio: number; // Añadido: relación de aspecto
}

export const ActionCard: React.FC<ImageCardProps> = (props) => {
  const { imageUrl, title, description, aspectRatio } = props;

  return (
    <Card>
      <CardActionArea>
        <Box sx={{ position: 'relative', width: '100%', paddingTop: `${(1 / aspectRatio) * 100}%` }}>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={title}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <CardContent>
          <Text type='h4'>{title}</Text>
          <Text
            type={'body1'}
            color='secondary'
            styles={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginTop: '1em',
            }}>
            {description}
          </Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};