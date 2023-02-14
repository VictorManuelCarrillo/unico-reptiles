// MUI components
import {
  SpeedDial,
  SpeedDialAction,
  IconButton,
  keyframes
  } from '@mui/material'
//MUI Icon
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
// React component
import { Fragment } from 'react'
// Next component
import Link from 'next/link'

// MUI keyframes animation
const shakeAnimation = keyframes`
0% { transform: rotate(0deg) scale(1)}
2% { transform: rotate(10deg) scale(1.1); box-shadow: 0px 0px 0px 10px #1e9c1e90}
4% { transform: rotate(-20deg) scale(1); box-shadow: 0px 0px 0px 0px #1e9c1e50}
6% { transform: rotate(35deg) scale(1.2); box-shadow: 0px 0px 0px 10px #1e9c1e90}
8% { transform: rotate(-45deg) scale(1); box-shadow: 0px 0px 0px 0px #1e9c1e50}
10% { transform: rotate(35deg) scale(1.1); box-shadow: 0px 0px 0px 10px #1e9c1e90}
12% { transform: rotate(-20deg) scale(1); box-shadow: 0px 0px 0px 5px #1e9c1e50}
14% { transform: rotate(10deg)}
16% { transform: rotate(-20deg)}
18% { transform: rotate(10deg)}
20% { transform: rotate(0deg); box-shadow: 0px 0px 0px 5px #1e9c1e20}
100% { transform: rotate(0deg)}
`

// SpeedDial actions array
const actions = [

  {
    icon: <AddLocationAltIcon />,
    name: 'Maps',
    color: '#DB4437',
    hover: '#b32c20',
    href: 'https://goo.gl/maps/uDjDHmsdb37pa2f26'
  }, {
    icon: <PhoneIcon />,
    name: 'Teléfono',
    color: '#F4B400',
    hover: '#dba202',
    href: 'tel:3319147923'
  }, {
    icon: <FacebookOutlinedIcon />,
    name: 'Facebook',
    color: '#4267B2',
    hover: '#2e5094',
    href: 'https://www.facebook.com/kaled.coyula'
  }, {
    icon: <WhatsAppIcon />,
    name: 'WhatsApp',
    color: '#25D366',
    hover: '#16b551',
    href: 'https://wa.link/yupydt'
  }
]


const SpeedDialBtn = () => {

  return (

    <Fragment>

      <SpeedDial
        ariaLabel='speed dial'
        icon={ <SpeedDialIcon />}
        sx={{
          position: 'fixed',
          bottom: '2em',
          right: '2em',
        }}
        FabProps={{
          sx: {
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark'
            }
          }
        }}>

        { actions.map( ( action, idx) => (

          <SpeedDialAction
            key={ idx}
            icon={ action.icon}
            tooltipTitle={ action.name}
            href={ action.href}
            target='_blank'
            sx={{
              color: 'white',
              background: action.color,
              '&:hover': {
                background: action.hover
              }}}/>

        )) }
      </SpeedDial>

      <Link href='https://wa.link/yupydt'>
      
        <IconButton size='large' sx={{
          zIndex: 2,
          color: 'white',
          position: 'fixed',
          bottom: '1.2em',
          right: '4em',
          bgcolor: '#25D366',
          animation: `${ shakeAnimation} 5s infinite`,
          '&:hover': {
            bgcolor: '#16b551'
          }}}>
          <WhatsAppIcon/>
        </IconButton>
      </Link>
    </Fragment>

  )
}

export default SpeedDialBtn