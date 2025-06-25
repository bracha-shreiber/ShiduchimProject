// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { fetchFilesByUserId, downloadFile } from '../../store/filesStore';
// import { FileData } from '../../types/fileData';
// import Header from '../header';

// const UserFiles: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const userId = sessionStorage.getItem("userId");

//   const files = useSelector((state: RootState) => state.files.files);
//   const error = useSelector((state: RootState) => state.files.error);

//   const [expandedFileIds, setExpandedFileIds] = useState<number[]>([]);

//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchFilesByUserId(Number(userId)));
//     }
//   }, [dispatch, userId]);

//   const handleDownload = (fileName: string) => {
//     dispatch(downloadFile(fileName));
//   };

//   const handleViewOriginal = (fileId: number) => {
//     console.log(`Viewing original file with ID: ${fileId}`);
//   };

//   const toggleExpand = (fileId: number) => {
//     setExpandedFileIds((prev) =>
//       prev.includes(fileId) ? prev.filter((id) => id !== fileId) : [...prev, fileId]
//     );
//   };

//   return (
//     <>
//       <Header />
//       <div style={styles.header}>
//         <h2 style={styles.title}>ניהול קבצים</h2>
//         <p style={styles.subtitle}>צפייה וניהול פרופילים של משתמשים</p>
//       </div>
//       <div style={styles.container}>
//         {error && (
//           <div style={styles.errorContainer}>
//             <p style={styles.errorText}>שגיאה: {error}</p>
//           </div>
//         )}

//         {files.length === 0 ? (
//           <div style={styles.emptyState}>
//             <div style={styles.emptyStateIcon}>📁</div>
//             <p style={styles.emptyStateText}>לא נמצאו קבצים</p>
//             <p style={styles.emptyStateSubtext}>העלה קבצים חדשים כדי שיופיעו כאן</p>
//           </div>
//         ) : (
//           <div style={styles.fileGrid}>
//             {files.map((file: FileData) => {
//               const isExpanded = expandedFileIds.includes(file.id);
//               return (
//                 <div key={file.id} style={styles.fileCard}>
//                   <div style={styles.fileCardHeader}>
//                     <h3 style={styles.fileName}>{file.fileName}</h3>
//                     <button
//                       onClick={() => toggleExpand(file.id)}
//                       style={{
//                         background: 'none',
//                         border: 'none',
//                         cursor: 'pointer',
//                         fontSize: '1.2rem',
//                         color: '#555',
//                       }}
//                     >
//                       {isExpanded ? '▲' : '▼'}
//                     </button>
//                   </div>

//                   {isExpanded && (
//                     <>
//                       <div style={styles.fileDetails}>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם פרטי:</span><span style={styles.detailValue}>{file.firstName}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם משפחה:</span><span style={styles.detailValue}>{file.lastName}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם האב:</span><span style={styles.detailValue}>{file.fatherName}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם האם:</span><span style={styles.detailValue}>{file.motherName}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>כתובת:</span><span style={styles.detailValue}>{file.address}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>גיל:</span><span style={styles.detailValue}>{file.age}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>גובה:</span><span style={styles.detailValue}>{file.height}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>עיסוק:</span><span style={styles.detailValue}>{file.occupation}</span></div>
//                         <div style={styles.detailItem}><span style={styles.detailLabel}>מקום לימודים:</span><span style={styles.detailValue}>{file.placeOfStudy}</span></div>
//                       </div>

//                       <div style={styles.fileActions}>
//                         <button  onClick={() => handleViewOriginal(file.id)} ><img src="./././images/icons8-eye.gif" alt="View"/></button>
//                         <button onClick={() => handleDownload(file.fileName)}><img src="./././images/icons8-download-32.png" alt="View"/></button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     padding: '2rem',
//     maxWidth: '100vw',
//     marginTop: '5rem',
//     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
//     direction: 'rtl',
//   },
//   header: {
//     marginTop: '6rem',
//     marginBottom: '1rem',
//     textAlign: 'right',
//     marginLeft: '65vw',
//     maxWidth: '50vw',
//     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
//   },
//   title: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#333',
//     margin: 0,
//     marginBottom: '0.5rem',
//   },
//   subtitle: {
//     fontSize: '1rem',
//     color: '#666',
//     margin: 0,
//   },
//   errorContainer: {
//     backgroundColor: '#ffeeee',
//     borderRadius: '8px',
//     padding: '1rem',
//     marginBottom: '2rem',
//     borderLeft: '4px solid #722F37',
//   },
//   errorText: {
//     color: '#d32f2f',
//     margin: 0,
//   },
//   emptyState: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '4rem 2rem',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     border: '1px dashed #ddd',
//   },
//   emptyStateIcon: {
//     fontSize: '3rem',
//     marginBottom: '1rem',
//     color: '#ccc',
//   },
//   emptyStateText: {
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     color: '#555',
//     margin: '0.5rem 0',
//   },
//   emptyStateSubtext: {
//     fontSize: '0.9rem',
//     color: '#888',
//     margin: 0,
//   },
//   fileGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1.5rem',
//     justifyContent: 'flex-end',
//     flexDirection: 'row-reverse',
//   },
//   fileCard: {
//     width: '350px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//     border: '1px solid #f0f0f0',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   fileCardHeader: {
//     backgroundColor: '#f8f9fa',
//     padding: '1rem',
//     borderBottom: '1px solid #eee',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   fileName: {
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     margin: 0,
//     color: '#333',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//     maxWidth: '80%',
//   },
//   fileDate: {
//     fontSize: '0.8rem',
//     color: '#888',
//   },
//   fileDetails: {
//     padding: '1rem',
//   },
//   detailItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '0.5rem',
//     fontSize: '0.9rem',
//     borderBottom: '1px dotted #eee',
//     paddingBottom: '0.5rem',
//   },
//   detailLabel: {
//     fontWeight: 'bold',
//     color: '#555',
//     flexBasis: '40%',
//   },
//   detailValue: {
//     color: '#333',
//     flexBasis: '60%',
//     textAlign: 'right',
//   },
//   fileActions: {
//     padding: '1rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     borderTop: '1px solid #eee',
//     backgroundColor: '#fafafa',
//   },
//   viewButton: {
//     padding: '0.6rem 1rem',
//     backgroundColor: 'white',
//     color: '#555',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '0.85rem',
//     fontWeight: 500,
//   },
//   downloadButton: {
//     padding: '0.6rem 1.2rem',
//     backgroundColor: '#722F37',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '0.85rem',
//     fontWeight: 500,
//     boxShadow: '0 4px 12px rgba(255, 0, 0, 0.2)',
//   },
// };

// export default UserFiles;
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchFilesByUserId, downloadFile, showFile } from '../../store/filesStore';
import { FileData } from '../../types/fileData';
import SearchComponent from '../files/search';
import ShareIcon from '@mui/icons-material/Share';
import SharingComponent from '../files/shareFiles';
import { IsLoggedIn } from '../../App';
import Sidebar from '../sideBar';

const UserFiles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = sessionStorage.getItem("userId");
  const { LoggedIn } = useContext(IsLoggedIn);
  const files = useSelector((state: RootState) => state.files.files);
  const error = useSelector((state: RootState) => state.files.error);
  const [share,setShare] = useState<boolean>(false);
  const [shareFileId, setShareFileId] = useState<number | null>(null);

  // const [ setExpandedFileIds] = useState<number[]>([]);
  const [expandedDateGroups, setExpandedDateGroups] = useState<string[]>([]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchFilesByUserId(Number(userId)));
    }
  }, [dispatch, userId]);

  const handleDownload = (fileName: string) => {
    dispatch(downloadFile(fileName));
  };

  // const handleViewOriginal = async (fileName: string) => {
  //   try {
  //     const resultAction = await dispatch(showFile(fileName) as any);
  //     console.log("resultAction", resultAction);

  //     const fileUrl = resultAction.payload;
  //     console.log("fileUrl", fileUrl);


  //     if (fileUrl) {
  //       const extension = fileName.split('.').pop()?.toLowerCase();
  //       if (extension === "pdf") {

  //       }

  //       // <img src={fileUrl} alt="Original" style={{ maxWidth: "100%"}} />
  //       <iframe src={fileUrl} width="100%" height="600px"></iframe>
  //       console.log(`Viewing original file: ${fileName}`);
  //     } else {
  //       console.error("Failed to get file URL.");
  //     }
  //   } catch (error) {
  //     console.error("Error viewing file:", error);
  //   }
  // };
  const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);

  const handleViewOriginal = async (fileName: string) => {
    try {
      const resultAction = await dispatch(showFile(fileName) as any);
      const fileUrl = resultAction.payload;

      if (fileUrl) {
        setViewingFileUrl(fileUrl);
      } else {
        console.error("Failed to get file URL.");
      }
    } catch (error) {
      console.error("Error viewing file:", error);
    }
  };


  // const toggleExpandFile = (fileId: number) => {
  //   setExpandedFileIds((prev) =>
  //     prev.includes(fileId) ? prev.filter((id) => id !== fileId) : [...prev, fileId]
  //   );
  // };

  const toggleExpandDateGroup = (date: string) => {
    setExpandedDateGroups((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  // Group files by createdAt date (formatted to 'YYYY-MM-DD')
  const groupedFiles: Record<string, FileData[]> = files.reduce((acc, file) => {
    // const date = new Date(file.createdAt).toISOString().split('T')[0]; // YYYY-MM-DD
    const dateObj = new Date(file.createdAt);
    const date = dateObj.getFullYear() + '-' +
      String(dateObj.getMonth() + 1).padStart(2, '0') + '-' +
      String(dateObj.getDate()).padStart(2, '0');

    if (!acc[date]) acc[date] = [];
    acc[date].push(file);
    return acc;
  }, {} as Record<string, FileData[]>);

  const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <>
    {/* {!LoggedIn && <Header/>} */}
    {LoggedIn && <Sidebar/>}
      <div style={styles.header}>
        <h2 style={styles.title}>קבצים</h2>
        <p style={styles.subtitle}>צפייה בקבצי הרזומה האישיים</p>
      </div>
      <div style={styles.container}>
        {error && (
          <div style={styles.errorContainer}>
            <p style={styles.errorText}>שגיאה: {error}</p>
          </div>
        )}
        <SearchComponent />

        {files.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyStateIcon}>📁</div>
            <p style={styles.emptyStateText}>לא נמצאו קבצים</p>
            <p style={styles.emptyStateSubtext}>העלה קבצים חדשים כדי שיופיעו כאן</p>
          </div>
        ) : (
          sortedDates.map((date) => {
            const isGroupExpanded = expandedDateGroups.includes(date);
            return (
              <div key={date}>
                <div
                  style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    // marginTop: '2rem',
                    // borderBottom: '1px solid #ddd',
                    paddingBottom: '0.5rem',
                  }}
                  onClick={() => toggleExpandDateGroup(date)}
                >
                  {isGroupExpanded ? '▼' : '▶'} תאריך: {date}
                </div>

                {isGroupExpanded && (
                  <div style={styles.fileGrid}>
                    {groupedFiles[date].map((file: FileData) => {
                      // const isExpanded = expandedFileIds.includes(file.id);
                      return (
                        <div key={file.id} style={styles.fileCard}>
                          <div style={styles.fileCardHeader}>
                            <h3 style={styles.fileName}>{file.fileName}</h3>
                            {/* <button
                              onClick={() => toggleExpandFile(file.id)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1.2rem',
                                color: '#555',
                              }}
                            >
                              {isExpanded ? '▲' : '▼'}
                            </button> */}
                          </div>


                          <div style={styles.fileDetails}>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>שם פרטי:</span><span style={styles.detailValue}>{file.firstName}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>שם משפחה:</span><span style={styles.detailValue}>{file.lastName}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>שם האב:</span><span style={styles.detailValue}>{file.fatherName}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>שם האם:</span><span style={styles.detailValue}>{file.motherName}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>כתובת:</span><span style={styles.detailValue}>{file.address}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>גיל:</span><span style={styles.detailValue}>{file.age}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>גובה:</span><span style={styles.detailValue}>{file.height}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>עיסוק:</span><span style={styles.detailValue}>{file.occupation}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>מקום לימודים:</span><span style={styles.detailValue}>{file.placeOfStudy}</span></div>
                          </div>

                          <div style={styles.fileActions}>
                            <button onClick={() => handleViewOriginal(file.fileName)} title="צפה בקובץ">
                              <img src="/images/icons8-eye.gif" alt="צפה" />
                            </button>
                            <button onClick={() => handleDownload(file.fileName)} title="הורד קובץ">
                              <img src="/images/icons8-download-32.png" alt="הורד" />
                            </button>
                            <button onClick={()=>{setShareFileId(file.id);setShare(true)}}>
                              <ShareIcon style={{ verticalAlign: 'middle', marginLeft: 4 }} />
                              שתף
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
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{ position: 'relative', width: '80%', height: '80%', backgroundColor: 'white', borderRadius: 8 }}>
            <button
              onClick={() => setViewingFileUrl(null)}
              style={{ position: 'absolute', top: 1, right: 10, cursor: 'pointer' }}
            >
              סגור ✖
            </button>
            <iframe src={viewingFileUrl} width="100%" height="100%" title="File preview" />
          </div>
        </div>
      )}
      {share && shareFileId !== null && <SharingComponent resumeFileId={shareFileId} />}
    </>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position:'fixed',
    top:150,
    right:250,
    // padding: '2rem',
    maxWidth: '100vw',
    // marginTop: '1rem',
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    direction: 'rtl',
  },
  header: {
    position:'fixed',
    top:50,
    //marginTop: '2rem',
    marginBottom: '1rem',
    textAlign: 'right',
    marginLeft: '65vw',
    maxWidth: '50vw',
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#722F37',
    margin: 0,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  },
  errorContainer: {
    backgroundColor: '#ffeeee',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '2rem',
    borderLeft: '4px solid #722F37',
  },
  errorText: {
    color: '#d32f2f',
    margin: 0,
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px dashed #ddd',
  },
  emptyStateIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#ccc',
  },
  emptyStateText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#555',
    margin: '0.5rem 0',
  },
  emptyStateSubtext: {
    fontSize: '0.9rem',
    color: '#888',
    margin: 0,
  },
  fileGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  },
  fileCard: {
    width: '350px',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
  },
  fileCardHeader: {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    // borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '80%',
  },
  fileDate: {
    fontSize: '0.8rem',
    color: '#888',
  },
  fileDetails: {
    padding: '1rem',
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    // borderBottom: '1px dotted #eee',
    paddingBottom: '0.5rem',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#555',
    flexBasis: '40%',
  },
  detailValue: {
    color: '#333',
    flexBasis: '60%',
    textAlign: 'right',
  },
  fileActions: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #eee',
    backgroundColor: '#fafafa',
  },
  viewButton: {
    padding: '0.6rem 1rem',
    backgroundColor: 'white',
    color: '#555',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  downloadButton: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#722F37',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 500,
    boxShadow: '0 4px 12px rgba(255, 0, 0, 0.2)',
  },
};

export default UserFiles;
