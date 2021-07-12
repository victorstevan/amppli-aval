import React from 'react';

import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataForm } from './DataForm';





export const ModalForm = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


 
  return (
    
    <div>
   
    
      <IconButton onClick={handleOpen}>
        <FontAwesomeIcon icon={faPlus} color='white' />
      </IconButton>
      <Modal
 
        open={open}
        onClose={handleClose}

      >
        <div><DataForm handleClose={handleClose} /></div>
        
      </Modal>
    </div>
  );
}