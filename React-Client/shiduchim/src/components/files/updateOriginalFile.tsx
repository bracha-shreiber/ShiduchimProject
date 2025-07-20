import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CircularProgress, // 👈 בטל את ההערה כאן
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { downloadFile, fetchFilesByUserId } from '../../store/filesStore';
import { FileData } from '../../types/fileData';
import axios from 'axios';
import { url } from '../../App';

interface Props {
  open: boolean;
  onClose: () => void;
  file: FileData | null;
}

const UpdateOriginalDialog: React.FC<Props> = ({ open, onClose, file }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const userId = sessionStorage.getItem("userId");

  const handleDownload = () => {
    if (file?.fileName) {
      dispatch(downloadFile(file.fileName));
    }
  };

  const saveindb = async (file: File) => {
    try {
      if (!userId) throw new Error("Missing userId in session storage");

      const formData = new FormData();
      formData.append("ResumeFile", file);
      formData.append("UserId", userId);

      const response = await axios.post(`${url}/AIResponse`, formData);
      sessionStorage.setItem("uploaded", "true");
      console.log("Response from DB save:", response.data);
    } catch (error) {
      console.error("Error saving file data:", error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    if (!uploaded || !file || !userId) return;

    setSelectedFile(uploaded);
    setLoading(true);

    try {
      const presignResponse = await axios.get(`${url}/upload/presigned-url`, {
        params: { fileName: uploaded.name },
      });

      const presignedUrl = presignResponse.data.url;

      await axios.put(presignedUrl, uploaded, {
        headers: {
          'Content-Type': uploaded.type,
        },
      });

      await saveindb(uploaded);
      await dispatch(fetchFilesByUserId(Number(userId)));

      onClose();
    } catch (err) {
      console.error('Update failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold', color: '#722F37' }}>
        Update Resume File
      </DialogTitle>

      <DialogContent dividers>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="150px">
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <>
            <Typography variant="body1" mb={2}>
              Current File: <strong>{file?.fileName}</strong>
            </Typography>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{ color: '#722F37', borderColor: '#722F37' }}
              >
                Download Current
              </Button>

              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
                sx={{
                  backgroundColor: '#722F37',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#8B3A42',
                  },
                }}
                disabled={loading}
              >
                Upload New
                <input
                  type="file"
                  hidden
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </Button>
            </Box>

            {selectedFile && (
              <Typography variant="subtitle2" color="textSecondary">
                Selected: {selectedFile.name}
              </Typography>
            )}
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: '#722F37',
            color: 'white',
            '&:hover': {
              backgroundColor: '#8B3A42',
            },
          }}
          disabled={loading}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateOriginalDialog;
