import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import styles from './Modal.module.scss';

interface IModalProps { 
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
}

export const Modal = (props: IModalProps) => {
  const { showModal, setShowModal, children } = props;
  return (
    <>
      {showModal &&
        <Box className = { styles.modalBackground } onClick={() => setShowModal(false)} >
          <Box className={styles.modalContainer}>
            {children}
          </Box>
        </Box >
      }
    </>
  )
 }