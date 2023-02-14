// components
import NavBar from '../04-surfaces/appbar/NavBar';
import Footer from './Footer';
// react components
import { Fragment } from 'react';
// next components
import Head from 'next/head';
// MUI components
import { Box } from '@mui/material';

interface Props {
  titlePage: string,
  children: React.ReactNode,
}

const Layout = ({titlePage, children}: Props) => {
  return(
    <Fragment>
      <Head>
        <title>Único Reptiles | {titlePage}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='author' content='Victor Manuel Carrillo Rojas'/>
        <meta name='keywords' content=''/>
      </Head>

      {/* NavBar component */}
      <NavBar />
      <Box sx={{height: 60}}></Box>

      {/* children prop component */}
      {children}

      {/* Footer component */}
      <Footer />
    </Fragment>
  )
}

export default Layout