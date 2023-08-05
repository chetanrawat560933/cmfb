import React from 'react';
import SnackbarMaterial from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Snackbar({ open, message, onClose, severity }) {
  return (
    <SnackbarMaterial open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </SnackbarMaterial>
  );
}

export default Snackbar;
