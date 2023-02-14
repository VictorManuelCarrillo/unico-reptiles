// MUI components
import {
  Backdrop,
  Box,
  Modal,
  Paper
  } from '@mui/material'
// React components
import { Fragment, useState } from 'react'

const ModalImg = ( props) =>{

  const [ openModal, setOpenModal ] = useState( false)
  const handleOpen = () => setOpenModal( true)
  const handleClose = () => setOpenModal( false)

  return (

    <Fragment>
      <Box
        onClick={ handleOpen}
        sx={{
          width: '100%',
          height: '40vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center  20%',
          backgroundImage: `url(${ props.image})`,
          '&:hover': {
            cursor: 'pointer'}}}>
      </Box>

      <Modal
        open={ openModal}
        onClose={ handleClose}
        BackdropComponent={ Backdrop}
        BackdropProps={{ timeout: 500 }}>

        <Paper sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate( -50%, -50%)',
          boxShadow: 15,
          width: props.modalWidth,
          height: props.modalHeight,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${ props.image})`
        }}>
        </Paper>
      </Modal>
    </Fragment>
  )
}

export default ModalImg

// component props values

// image = 'string'