import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

interface Props {
  open: boolean;
  fileName?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationDialog: React.FC<Props> = ({
  open,
  fileName,
  onCancel,
  onConfirm,
}) => {
  return (
  <Dialog open={open} onClose={onCancel}>
    <DialogTitle>Delete Confirmation</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to delete the file <strong>{fileName}</strong>? This action cannot be undone.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="inherit">
        Cancel
      </Button>
      <Button
        onClick={onConfirm}
        variant="contained"
        sx={{
          backgroundColor: '#722F37',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#5a232c',
          },
        }}
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

  
};

export default DeleteConfirmationDialog;
