import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchOpenResumes, showFile, downloadFile } from '../../store/filesStore';
import { IsLoggedIn } from '../../App';
import Sidebar from '../sideBar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import SearchComponent from './search';
import Header from '../header';

const OpenResumes: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { LoggedIn } = useContext(IsLoggedIn);
  const { openResumes, loading } = useSelector((state: RootState) => state.files);

  useEffect(() => {
    dispatch(fetchOpenResumes());
  }, [dispatch]);

  const handleView = (fileName: string) => {
    dispatch(showFile(fileName));
  };

  const handleDownload = (fileName: string) => {
    dispatch(downloadFile(fileName));
  };

  return (
    <>
      {LoggedIn && <Sidebar />}
      {!LoggedIn && <Header/>}
      <div style={styles.container}>
        <h2 style={styles.title}>Open Resumes</h2>
        <SearchComponent />

        {loading ? (
          <div style={styles.loading}>
            <img src="/images/loading.gif" alt="Loading..." style={{ width: 90 }} />
          </div>
        ) : openResumes.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyStateIcon}>📁</div>
            <p style={styles.emptyStateText}>No files to display.</p>
          </div>
        ) : (
          <div style={styles.fileGrid}>
            {openResumes.map((file) => (
              <div key={file.id} style={styles.card}>
                <h3 style={styles.fileName}>{file.fileName}</h3>
                
                <div style={styles.details}>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Created At:</span>
                    <span style={styles.detailValue}>
                      {new Date(file.createdAt).toLocaleDateString('en-GB')}
                    </span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Time:</span>
                    <span style={styles.detailValue}>
                      {new Date(file.createdAt).toLocaleTimeString('en-GB', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                  {file.firstName && (
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>First Name:</span>
                      <span style={styles.detailValue}>{file.firstName}</span>
                    </div>
                  )}
                  {file.lastName && (
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Last Name:</span>
                      <span style={styles.detailValue}>{file.lastName}</span>
                    </div>
                  )}
                   {file.fatherName && (
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Father's Name:</span>
                      <span style={styles.detailValue}>{file.fatherName}</span>
                    </div>
                  )}
                    {file.motherName && (
                        <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Mother's Name:</span>
                        <span style={styles.detailValue}>{file.motherName}</span>
                        </div>
                    )}
                    {file.address && (
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>Address:</span>
                            <span style={styles.detailValue}>{file.address}</span>
                        </div>
                    )}
                    {file.placeOfStudy && (
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>Place of Study:</span>
                            <span style={styles.detailValue}>{file.placeOfStudy}</span>
                        </div>
                    )}
                    {file.height && (
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>Height:</span>
                            <span style={styles.detailValue}>{file.height}</span>
                        </div>
                    )}
                    
                    {file.age && (
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>Age:</span>
                            <span style={styles.detailValue}>{file.age}</span>
                        </div>
                  )}
                  {file.occupation && (
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Occupation:</span>
                      <span style={styles.detailValue}>{file.occupation}</span>
                    </div>
                  )}
                </div>

                <div style={styles.actions}>
                  <button onClick={() => handleView(file.fileName)} style={styles.iconBtn} title="View File">
                    <VisibilityIcon style={styles.icon} />
                  </button>
                  <button onClick={() => handleDownload(file.fileName)} style={styles.iconBtn} title="Download File">
                    <DownloadIcon style={styles.icon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed',
    top: 100,
    left: 300,
    right: 0,
    padding: '1rem 2rem',
    maxHeight: 'calc(100vh - 150px)',
    overflowY: 'auto',
    background: '#fff',
    direction: 'ltr',
  },
  title: {
    fontSize: '2rem',
    color: '#5D2E46',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem 2rem',
    color: '#7b6ca8',
    fontWeight: '600',
    fontSize: '1.3rem',
    userSelect: 'none',
  },
  emptyStateIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  emptyStateText: {
    marginBottom: '0.3rem',
  },
  fileGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginTop: '0.5rem',
  },
  card: {
    width: '340px',
    border: '2px solid #722F37',
    borderRadius: 10,
    padding: '1rem',
    background: '#fff',
    boxShadow: '0 3px 8px rgba(114,47,55,0.1)',
  },
  fileName: {
    fontSize: '1.2rem',
    color: '#5D2E46',
    margin: '0 0 1rem 0',
    fontWeight: 'bold',
  },
  details: {
    fontSize: '0.9rem',
    color: '#333',
    lineHeight: 1.4,
    marginBottom: '1rem',
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.45rem',
    fontSize: '1rem',
    color: '#5b5b5b',
    lineHeight: '1.3',
  },
  detailLabel: {
    fontWeight: '600',
    color: '#6b5b75',
    flexBasis: '42%',
  },
  detailValue: {
    flexBasis: '58%',
    textAlign: 'left',
    fontWeight: '400',
    color: '#453749',
  },
  actions: {
    marginTop: '0.8rem',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '0.8rem',
    borderTop: '1px solid #e0e0e0',
  },
  iconBtn: {
    all: 'unset' as const,
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
  },
  icon: {
    color: '#722F37',
    fontSize: '1.6rem',
  },
};

export default OpenResumes;
