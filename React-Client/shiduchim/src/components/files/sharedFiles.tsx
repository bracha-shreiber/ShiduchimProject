import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchSharedFilesByUserId, deleteSharedFile } from '../../store/filesStore';
import { downloadFile, showFile } from '../../store/filesStore';
import { IsLoggedIn } from '../../App';
import Sidebar from '../sideBar';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

const SharedFiles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { LoggedIn } = useContext(IsLoggedIn);
  const sharedFiles = useSelector((state: RootState) => state.files.sharedFiles);
  const loading = useSelector((state: RootState) => state.files.loading);
  const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      dispatch(fetchSharedFilesByUserId(+userId));
    }
  }, [dispatch, userId]);

  const handleViewFile = async (fileName: string) => {
    const result = await dispatch(showFile(fileName) as any);
    if (result.payload) {
      setViewingFileUrl(result.payload);
    }
  };

  const handleDownload = (fileName: string) => {
    dispatch(downloadFile(fileName));
  };

  const handleDelete = (shareId: number) => {
    dispatch(deleteSharedFile(shareId));
  };

  // Group by SharedAt date
  const groupedFiles = sharedFiles.reduce((acc, sharing) => {
    const date = new Date(sharing.sharedAt).toISOString().split('T')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(sharing);
    return acc;
  }, {} as Record<string, typeof sharedFiles[0][]>);

  const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <>
      {LoggedIn && <Sidebar />}
      <div style={styles.container}>
        <h2 style={styles.title}>Shared With Me</h2>
        {loading ? (
          <p>Loading...</p>
        ) : sortedDates.length === 0 ? (
          <p>No shared files found.</p>
        ) : (
          sortedDates.map(date => (
            <div key={date}>
              <h3 style={styles.dateHeader}>Date: {date}</h3>
              <div style={styles.fileGrid}>
                {groupedFiles[date].map(sharing => {
                  const file = sharing.resumefile;
                  return (
                    <div key={sharing.shareID} style={styles.card}>
                      <div style={styles.fileName}>{file.fileName}</div>
                      <div style={styles.actions}>
                        <button onClick={() => handleViewFile(file.fileName)} title="View">
                          <VisibilityIcon style={styles.icon} />
                        </button>
                        <button onClick={() => handleDownload(file.fileName)} title="Download">
                          <DownloadIcon style={styles.icon} />
                        </button>
                        <button onClick={() => handleDelete(sharing.shareID)} title="Delete sharing">
                          <DeleteIcon style={styles.icon} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {viewingFileUrl && (
        <div style={styles.overlay}>
          <div style={styles.preview}>
            <button style={styles.close} onClick={() => setViewingFileUrl(null)}>✖</button>
            <iframe src={viewingFileUrl} width="100%" height="100%" title="Preview" />
          </div>
        </div>
      )}
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginLeft: 300,
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#5D2E46',
    marginBottom: '1rem',
  },
  dateHeader: {
    fontSize: '1.2rem',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    color: '#722F37',
  },
  fileGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  card: {
    width: '280px',
    border: '2px solid #722F37',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  fileName: {
    fontWeight: 600,
    color: '#333',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    color: '#722F37',
    cursor: 'pointer',
    fontSize: '1.6rem',
  },
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: '85%',
    height: '85%',
    backgroundColor: 'white',
    borderRadius: '10px',
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: '#5D2E46',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: 32,
    height: 32,
    cursor: 'pointer',
  },
};

export default SharedFiles;
