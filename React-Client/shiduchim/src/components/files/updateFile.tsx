import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateResumeFile } from '../../store/filesStore';
import { FileData } from '../../types/fileData';

interface Props {
  open: boolean;
  onClose: () => void;
  file: FileData | null;
}

const AIResponseUpdateDialog: React.FC<Props> = ({ open, onClose, file }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    if (file) {
      reset(file); // preload current file values
    }
  }, [file, reset]);

  const onSubmit = async (data: any) => {
    if (file?.id) {
      await dispatch(updateResumeFile({ id: file.id, updates: data }));
    }
    onClose();
  };

  if (!file) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "#722F37",
          color: "white",
          fontWeight: "bold",
          padding: "16px 24px",
          fontSize: '1.25rem',
        }}
      >
        Update File
      </DialogTitle>
      <DialogContent sx={{ padding: 3, backgroundColor: "white" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {[
            { label: "First Name", name: "firstName" },
            { label: "Father Name", name: "fatherName" },
            { label: "Mother Name", name: "motherName" },
            { label: "Last Name", name: "lastName" },
            { label: "Address", name: "address" },
            { label: "Place of Study", name: "placeOfStudy" },
            { label: "Occupation", name: "occupation" },
            { label: "Height", name: "height" },
            { label: "Age", name: "age" },
          ].map(({ label, name }) => (
            <TextField
              key={name}
              label={label}
              variant="outlined"
              fullWidth
              {...register(name)}
              InputLabelProps={{
                sx: {
                  color: "#722F37",
                  "&.Mui-focused": { color: "#722F37" },
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: 1.5,
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#722F37",
                  },
                },
              }}
            />
          ))}
          <DialogActions sx={{ padding: 0, mt: 2 }}>
            <Button
              onClick={onClose}
              sx={{
                color: "#722F37",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: 1.5,
                padding: "8px 20px",
                "&:hover": { backgroundColor: "rgba(114, 47, 55, 0.1)" },
              }}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                backgroundColor: "#722F37",
                color: "white",
                borderRadius: 1.5,
                padding: "8px 24px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#722F37" },
                "&.Mui-disabled": {
                  backgroundColor: "#722F37",
                  color: "white",
                },
              }}
            >
              {isSubmitting ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Save"}
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AIResponseUpdateDialog;
