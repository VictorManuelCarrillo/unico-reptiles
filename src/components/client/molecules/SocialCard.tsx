import { Paper, Box } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Text } from '../atoms/02_data-display/Text';

interface SocialCardProps {
  social: string;
  socialName: string;
  aspectRatio: number;
}

export const SocialCard: React.FC<SocialCardProps> = (props) => {
  const { social, socialName, aspectRatio } = props;
  
  return (
    <Paper sx={{ position: 'relative', width: '100%', bgcolor: 'red' }}>
      <Box sx={{ position: 'relative', width: '100%', paddingTop: `${(1 / aspectRatio) * 100}%` }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {social === 'facebook' ? <FacebookIcon sx={{ color: '#3b5998', fontSize: '5em' }} /> : null}
          <Box sx={{ paddingLeft: '0.6em' }}>
            <Text type='h6' styles={{ fontWeight: 'bold' }}>{socialName}</Text>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
