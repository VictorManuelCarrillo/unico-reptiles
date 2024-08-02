'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from '@/styles/components/client/organisms/slider.module.scss';

interface ImageProps {
  src: string;
  alt: string;
}

interface SliderProps {
  images: ImageProps[];
  height: any;
}

export const Slider: React.FC<SliderProps> = ({ images, height }) => {
  //> Bullets styling ___________________________________________________________________ >>
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} ${s['custom-bullet']}"></span>`;
    },
  };

  return (
    <Box sx={{ height }}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            height: '100%',
            backgroundColor: 'black',
            padding: '0.3em 0 1.6em 0',
          } as React.CSSProperties
        }
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={true}
        speed={1500}
        loop={true}
        pagination={pagination}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
