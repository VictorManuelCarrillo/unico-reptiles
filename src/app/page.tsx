// pages/index.tsx
import React from 'react';
import { PrimaryLayout as Layout } from '@/components/client/templates/PrimaryLayout';
import { Slider } from '@/components/client/organisms/Slider';
import { Text } from '@/components/client/atoms/02_data-display/Text';
import { Container } from '@mui/material';
import { ActionCard } from '@/components/client/molecules/ActionCard';
import { SocialCard } from '@/components/client/molecules/SocialCard';
import { Box } from '@mui/material';
import sBase from '@/styles/base.module.scss';

import { Card } from '@/components/client/molecules/Card';
import { Button } from '@/components/client/atoms/01_inputs/Button';

const images = [
  {
    src: '/images/1.png',
    alt: 'Image 1',
    width: 800,
    height: 800,
  },
  {
    src: '/images/2.png',
    alt: 'Image 2',
    width: 800,
    height: 800,
  },
  {
    src: '/images/3.png',
    alt: 'Image 3',
    width: 800,
    height: 800,
  },
  {
    src: '/images/4.png',
    alt: 'Image 3',
    width: 800,
    height: 800,
  },
  // Agrega más imágenes según sea necesario
];
const categories = [
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
  { imageUrl: '/images/1.png', title: 'reptiles', description: '' },
];
const Home: React.FC = () => {
  return (
    <Layout>
      <Slider
        images={images}
        height={{ xs: '50vh', sm: '10vh', md: '70vh', lg: '60vh' }}
      />
      <Container
        maxWidth='xl'
        className={sBase['container']}>
        <Text type='h4'>CATEGORÍAS</Text>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {categories.map((category) => (
            <Box
              key={category.title}
              sx={{ width: '16vw', py: '2em' }}>
              <ActionCard
                key={category.title}
                imageUrl={category.imageUrl}
                title='Example Title'
                description={category.description}
                aspectRatio={24 / 9} // Puedes cambiar la relación de aspecto aquí
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Container maxWidth='xl'>
        <div style={{ width: '300px' }}>
          <SocialCard
            social='facebook'
            socialName='My Facebook Page'
            aspectRatio={12 / 16}
          />
        </div>
      </Container>
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card
          type='complex'
          title='ola'
          subtitle='ola sub'
          description='Esta es una descripcion que va a ser usada de prueba para verificar que todo vaya correcto y revisar el text overflow hiden y los ellipsis en los estilos de css y ver que mas puede funcionar'
          imageUrl='/images/1.png'
          buttonArea={<Button type='contained'>
            ola
          </Button>}
        />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Home;
