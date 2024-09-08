import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

interface AutohideSnackbarProps {
  isOpen: boolean,
  message?: string,
  onEvent?: (isOpen: boolean) => void
  backgroundColor?: string
}

export default function AutohideSnackbar({ isOpen, message, onEvent, backgroundColor } : AutohideSnackbarProps) {

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
        ContentProps={{
          sx: { background: backgroundColor}
        }}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={isOpen}
        autoHideDuration={5000}
        onClose={(_, reason) => handleClose(reason)}
        message={message!}
      />
    </div>
  );
}
