import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useEffect, useState  } from 'react';


interface AutohideSnackbarProps {
  isOpen: boolean,
  message?: string,
  onEvent?: (isOpen: boolean) => void
}

export default function AutohideSnackbar({ isOpen, message, onEvent } : AutohideSnackbarProps) {

  const handleClose = (
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    onEvent!(isOpen)
  };

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={5000}
        onClose={(_, reason) => handleClose(reason)}
        message={message!}
      />
    </div>
  );
}
