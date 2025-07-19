// // import React, { useEffect, useState, useContext } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { AppDispatch, RootState } from '../../store/store';
// // import { fetchSharedFilesByUserId, deleteSharedFile } from '../../store/filesStore';
// // import { downloadFile, showFile } from '../../store/filesStore';
// // import { IsLoggedIn } from '../../App';
// // import Sidebar from '../sideBar';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import VisibilityIcon from '@mui/icons-material/Visibility';
// // import DownloadIcon from '@mui/icons-material/Download';

// // const SharedFiles: React.FC = () => {
// //   const dispatch = useDispatch<AppDispatch>();
// //   const { LoggedIn } = useContext(IsLoggedIn);
// //   const sharedFiles = useSelector((state: RootState) => state.files.sharedFiles);
// //   const loading = useSelector((state: RootState) => state.files.loading);
// //   const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);

// //   const userId = sessionStorage.getItem("userId");

// //   useEffect(() => {
// //     if (userId) {
// //       dispatch(fetchSharedFilesByUserId(+userId));
// //     }
// //   }, [dispatch, userId]);

// //   const handleViewFile = async (fileName: string) => {
// //     const result = await dispatch(showFile(fileName) as any);
// //     if (result.payload) {
// //       setViewingFileUrl(result.payload);
// //     }
// //   };

// //   const handleDownload = (fileName: string) => {
// //     dispatch(downloadFile(fileName));
// //   };

// //   const handleDelete = (shareId: number) => {
// //     dispatch(deleteSharedFile(shareId));
// //   };

// //   // Group by SharedAt date
// //   const groupedFiles = sharedFiles.reduce((acc, sharing) => {
// //     const date = new Date(sharing.sharedAt).toISOString().split('T')[0];
// //     if (!acc[date]) acc[date] = [];
// //     acc[date].push(sharing);
// //     return acc;
// //   }, {} as Record<string, typeof sharedFiles[0][]>);

// //   const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

// //   return (
// //     <>
// //       {LoggedIn && <Sidebar />}
// //       <div style={styles.container}>
// //         <h2 style={styles.title}>Shared With Me</h2>
// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : sortedDates.length === 0 ? (
// //           <p>No shared files found.</p>
// //         ) : (
// //           sortedDates.map(date => (
// //             <div key={date}>
// //               <h3 style={styles.dateHeader}>Date: {date}</h3>
// //               <div style={styles.fileGrid}>
// //                 {groupedFiles[date].map(sharing => {
// //                   const file = sharing.resumefile;
// //                   return (
// //                     <div key={sharing.shareID} style={styles.card}>
// //                       <div style={styles.fileName}>{file.fileName}</div>
// //                       <div style={styles.actions}>
// //                         <button onClick={() => handleViewFile(file.fileName)} title="View">
// //                           <VisibilityIcon style={styles.icon} />
// //                         </button>
// //                         <button onClick={() => handleDownload(file.fileName)} title="Download">
// //                           <DownloadIcon style={styles.icon} />
// //                         </button>
// //                         <button onClick={() => handleDelete(sharing.shareID)} title="Delete sharing">
// //                           <DeleteIcon style={styles.icon} />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       {viewingFileUrl && (
// //         <div style={styles.overlay}>
// //           <div style={styles.preview}>
// //             <button style={styles.close} onClick={() => setViewingFileUrl(null)}>✖</button>
// //             <iframe src={viewingFileUrl} width="100%" height="100%" title="Preview" />
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     marginLeft: 300,
// //     padding: '2rem',
// //     fontFamily: 'Segoe UI, sans-serif',
// //   },
// //   title: {
// //     fontSize: '2rem',
// //     color: '#5D2E46',
// //     marginBottom: '1rem',
// //   },
// //   dateHeader: {
// //     fontSize: '1.2rem',
// //     marginTop: '1.5rem',
// //     marginBottom: '0.8rem',
// //     color: '#722F37',
// //   },
// //   fileGrid: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1rem',
// //   },
// //   card: {
// //     width: '280px',
// //     border: '2px solid #722F37',
// //     borderRadius: '8px',
// //     padding: '1rem',
// //     backgroundColor: '#fff',
// //     boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
// //   },
// //   fileName: {
// //     fontWeight: 600,
// //     color: '#333',
// //     marginBottom: '0.5rem',
// //     textAlign: 'center',
// //   },
// //   actions: {
// //     display: 'flex',
// //     justifyContent: 'space-around',
// //     alignItems: 'center',
// //   },
// //   icon: {
// //     color: '#722F37',
// //     cursor: 'pointer',
// //     fontSize: '1.6rem',
// //   },
// //   overlay: {
// //     position: 'fixed',
// //     top: 0, left: 0,
// //     width: '100vw', height: '100vh',
// //     backgroundColor: 'rgba(0,0,0,0.8)',
// //     zIndex: 999,
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   preview: {
// //     width: '85%',
// //     height: '85%',
// //     backgroundColor: 'white',
// //     borderRadius: '10px',
// //     position: 'relative',
// //   },
// //   close: {
// //     position: 'absolute',
// //     top: 10,
// //     right: 15,
// //     backgroundColor: '#5D2E46',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '50%',
// //     width: 32,
// //     height: 32,
// //     cursor: 'pointer',
// //   },
// // };

// // export default SharedFiles;


// import React, { useEffect, useState, useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { fetchSharedFilesByUserId, deleteSharedFile, showFile, downloadFile } from '../../store/filesStore';
// import { IsLoggedIn } from '../../App';
// import Sidebar from '../sideBar';
// import DeleteIcon from '@mui/icons-material/Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DownloadIcon from '@mui/icons-material/Download';

// const SharedFiles: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { LoggedIn } = useContext(IsLoggedIn);
//   const sharedFiles = useSelector((state: RootState) => state.files.sharedFiles);
//   const loading = useSelector((state: RootState) => state.files.loading);
//   const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);
//   const userId = sessionStorage.getItem("userId");

//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchSharedFilesByUserId(+userId));
//     }
//   }, [dispatch, userId]);

//   const handleViewFile = async (fileName: string) => {
//     const result = await dispatch(showFile(fileName) as any);
//     if (result.payload) {
//       setViewingFileUrl(result.payload);
//     }
//   };

//   const handleDownload = (fileName: string) => {
//     dispatch(downloadFile(fileName));
//   };

//   const handleDelete = (shareId: number) => {
//     dispatch(deleteSharedFile(shareId));
//   };

//   const groupedFiles = sharedFiles.reduce((acc, sharing) => {
//     const date = new Date(sharing.sharedAt).toISOString().split('T')[0];
//     if (!acc[date]) acc[date] = [];
//     acc[date].push(sharing);
//     return acc;
//   }, {} as Record<string, typeof sharedFiles[0][]>);

//   const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

//   return (
//     <>
//       {LoggedIn && <Sidebar />}
//       <div style={styles.container}>
//         <h2 style={styles.title}>Shared With Me</h2>

//         {loading ? (
//           <p>Loading...</p>
//         ) : sortedDates.length === 0 ? (
//           <p>No shared files found.</p>
//         ) : (
//           sortedDates.map(date => (
//             <div key={date}>
//               <div style={styles.dateHeader}>Date: {date}</div>
//               <div style={styles.fileGrid}>
//                 {groupedFiles[date].map(sharing => {
//                   const file = sharing.resumefile;
//                   return (
//                     <div key={sharing.shareID} style={styles.fileCard}>
//                       <div style={styles.fileCardHeader}>
//                         <h3 style={styles.fileName}>{file.fileName}</h3>
//                       </div>

//                       <div style={styles.fileActions}>
//                         <button onClick={() => handleViewFile(file.fileName)} title="View file" style={styles.iconButton}>
//                           <VisibilityIcon style={styles.icon} />
//                         </button>
//                         <button onClick={() => handleDownload(file.fileName)} title="Download file" style={styles.iconButton}>
//                           <DownloadIcon style={styles.icon} />
//                         </button>
//                         <button onClick={() => handleDelete(sharing.shareID)} title="Delete sharing" style={styles.iconButton}>
//                           <DeleteIcon style={styles.icon} />
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {viewingFileUrl && (
//         <div style={styles.overlay}>
//           <div style={styles.preview}>
//             <button style={styles.close} onClick={() => setViewingFileUrl(null)}>✖</button>
//             <iframe src={viewingFileUrl} width="100%" height="100%" title="Preview" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     marginLeft: 300,
//     padding: '2rem',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   title: {
//     fontSize: '2.4rem',
//     fontWeight: '700',
//     color: '#5D2E46',
//     marginBottom: '1.2rem',
//   },
//   dateHeader: {
//     fontSize: '1.1rem',
//     fontWeight: 'bold',
//     color: '#722F37',
//     marginBottom: '0.5rem',
//   },
//   fileGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1.8rem',
//     justifyContent: 'flex-start',
//   },
//   fileCard: {
//     width: '360px',
//     display: 'flex',
//     flexDirection: 'column',
//     border: '2px solid #722F37',
//     borderRadius: '10px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 12px rgba(114, 47, 55, 0.08)',
//   },
//   fileCardHeader: {
//     padding: '1.3rem 1.5rem',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fileName: {
//     fontSize: '1.2rem',
//     fontWeight: '700',
//     color: '#5D2E46',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//   },
//   fileActions: {
//     padding: '1rem 1.5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   iconButton: {
//     all: 'unset',
//     cursor: 'pointer',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     color: '#722F37',
//     fontSize: '1.6rem',
//   },
//   overlay: {
//     position: 'fixed',
//     top: 0, left: 0,
//     width: '100vw', height: '100vh',
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     zIndex: 999,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   preview: {
//     width: '85%',
//     height: '85%',
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     position: 'relative',
//   },
//   close: {
//     position: 'absolute',
//     top: 10,
//     right: 15,
//     backgroundColor: '#5D2E46',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     cursor: 'pointer',
//   },
// };

// export default SharedFiles;

import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchSharedFilesByUserId, deleteSharedFile, showFile, downloadFile } from '../../store/filesStore';
import { IsLoggedIn } from '../../App';
import Sidebar from '../sideBar';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import { SharedFileData } from '../../types/fileData';
import SearchComponent from './search';


const SharedFiles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { LoggedIn } = useContext(IsLoggedIn);
  const sharedFiles = useSelector((state: RootState) => state.files.sharedFiles) as SharedFileData[];
  const loading = useSelector((state: RootState) => state.files.loading);
  const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);
  const [expandedDates, setExpandedDates] = useState<string[]>([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (userId) dispatch(fetchSharedFilesByUserId(+userId));
  }, [dispatch, userId]);

  const handleViewFile = async (fileName: string) => {
    const result = await dispatch(showFile(fileName) as any);
    if (result.payload) setViewingFileUrl(result.payload);
  };

  const handleDownload = (fileName: string) => dispatch(downloadFile(fileName));
  const handleDelete = (shareId: number) => dispatch(deleteSharedFile(shareId));
  const toggleDate = (date: string) => {
    setExpandedDates(exp =>
      exp.includes(date) ? exp.filter(d => d !== date) : [...exp, date]
    );
  };

  const grouped = sharedFiles.reduce((acc, s) => {
    const d = s.sharedAt.split('T')[0];
    if (!acc[d]) acc[d] = [];
    acc[d].push(s);
    return acc;
  }, {} as Record<string, SharedFileData[]>);

  const dates = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1));

  return (
    <>
      {LoggedIn && <Sidebar />}
      <div style={styles.container}>
        <h2 style={styles.title}>Shared With Me</h2>
<SearchComponent />
        {loading ? (
          <div style={styles.loading}>
            <img src="/images/loading.gif" alt="Loading..." style={{ width: 90 }} />
          </div>
        ) : dates.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyStateIcon}>📁</div>
            <p style={styles.emptyStateText}>No shared files found.</p>
          </div>
          // <div style={styles.empty}>
          //   <img src="/images/empty-folder.png" alt="No files" style={{ width: 100 }} />
          //   <p>No shared files found.</p>
          // </div>
        ) : (
          dates.map(date => {
            const expanded = expandedDates.includes(date);
            return (
              <div key={date}>
                <div style={styles.dateHeader} onClick={() => toggleDate(date)}>
                  {expanded ? '▼' : '▶'} Date: {date}
                </div>
                {expanded && (
                  <div style={styles.fileGrid}>
                    {grouped[date].map(s => {
                      const f = s.resumefile;
                      debugger;
                      console.log(s);
                      console.log(f);
                      return (
                        <div key={s.shareID} style={styles.card}>
                          <h3 style={styles.fileName}>{f.fileName ? f.fileName : ''}</h3>
                          <p><span style={styles.detailLabel}>Shared by:</span><span style={styles.detailValue}>{s.sharedByUserEmail ? s.sharedByUserEmail : ''}</span></p>
                          <div style={styles.details}>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>First Name:</span><span style={styles.detailValue}>{f.firstName ? f.firstName : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Last Name:</span><span style={styles.detailValue}>{f.lastName ? f.lastName : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Father's Name:</span><span style={styles.detailValue}>{f.fatherName ? f.fatherName : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Mother's Name:</span><span style={styles.detailValue}>{f.motherName ? f.motherName : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Address:</span><span style={styles.detailValue}>{f.address ? f.address : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Age:</span><span style={styles.detailValue}>{f.age ? f.age : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Height:</span><span style={styles.detailValue}>{f.height ? f.height : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Occupation:</span><span style={styles.detailValue}>{f.occupation ? f.occupation : ''}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Place of Study:</span><span style={styles.detailValue}>{f.placeOfStudy ? f.placeOfStudy : ''}</span></div>
                          </div>
                          <div style={styles.actions}>
                            <button onClick={() => handleViewFile(f.fileName)} style={styles.iconBtn}>
                              <VisibilityIcon style={styles.icon} />
                            </button>
                            <button onClick={() => handleDownload(f.fileName)} style={styles.iconBtn}>
                              <DownloadIcon style={styles.icon} />
                            </button>
                            <button onClick={() => handleDelete(s.shareID)} style={styles.iconBtn}>
                              <DeleteIcon style={styles.icon} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
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

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed', top: 100, left: 300,right: 0,
    padding: '1rem 2rem', maxHeight: 'calc(100vh - 150px)',
    overflowY: 'auto', background: '#fff'
  },
  title: { fontSize: '2rem', color: '#5D2E46', marginBottom: '1rem' },
  loading: { display: 'flex', justifyContent: 'center', padding: '2rem' },
  // empty: { textAlign: 'center', padding: '2rem', color: '#777' },
  dateHeader: {
    fontSize: '1.1rem', fontWeight: 'bold', color: '#722F37',
    marginTop: '1rem', cursor: 'pointer'
  },
  fileGrid: { display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '0.5rem' },
  card: {
    width: '340px', border: '2px solid #722F37', borderRadius: 10,
    padding: '1rem', background: '#fff', boxShadow: '0 3px 8px rgba(114,47,55,0.1)'
  },
  fileName: { fontSize: '1.2rem', color: '#5D2E46', margin: 0 },
  details: { fontSize: '0.9rem', color: '#333', lineHeight: 1.4 },
  actions: { marginTop: '0.8rem', display: 'flex', justifyContent: 'space-around' },
  iconBtn: { all: 'unset', cursor: 'pointer' },
  icon: { color: '#722F37', fontSize: '1.6rem' },
  overlay: { position: 'fixed', top: 0, left: 0,
    width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999
  },
  preview: { width: '85%', height: '85%', background: '#fff', position: 'relative', borderRadius: 10 },
  close: {
    position: 'absolute', top: 10, right: 15,
    background: '#5D2E46', color: '#fff', border: 'none',
    width: 32, height: 32, borderRadius: '50%', cursor: 'pointer'
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
};

export default SharedFiles;
