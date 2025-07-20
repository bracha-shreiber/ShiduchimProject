// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { AppDispatch, RootState } from '../../store/store';
// // import { fetchFilesByUserId, downloadFile } from '../../store/filesStore';
// // import { FileData } from '../../types/fileData';
// // import Header from '../header';

// // const UserFiles: React.FC = () => {
// //   const dispatch = useDispatch<AppDispatch>();
// //   const userId = sessionStorage.getItem("userId");

// //   const files = useSelector((state: RootState) => state.files.files);
// //   const error = useSelector((state: RootState) => state.files.error);

// //   const [expandedFileIds, setExpandedFileIds] = useState<number[]>([]);

// //   useEffect(() => {
// //     if (userId) {
// //       dispatch(fetchFilesByUserId(Number(userId)));
// //     }
// //   }, [dispatch, userId]);

// //   const handleDownload = (fileName: string) => {
// //     dispatch(downloadFile(fileName));
// //   };

// //   const handleViewOriginal = (fileId: number) => {
// //     console.log(`Viewing original file with ID: ${fileId}`);
// //   };

// //   const toggleExpand = (fileId: number) => {
// //     setExpandedFileIds((prev) =>
// //       prev.includes(fileId) ? prev.filter((id) => id !== fileId) : [...prev, fileId]
// //     );
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div style={styles.header}>
// //         <h2 style={styles.title}>ניהול קבצים</h2>
// //         <p style={styles.subtitle}>צפייה וניהול פרופילים של משתמשים</p>
// //       </div>
// //       <div style={styles.container}>
// //         {error && (
// //           <div style={styles.errorContainer}>
// //             <p style={styles.errorText}>שגיאה: {error}</p>
// //           </div>
// //         )}

// //         {files.length === 0 ? (
// //           <div style={styles.emptyState}>
// //             <div style={styles.emptyStateIcon}>📁</div>
// //             <p style={styles.emptyStateText}>לא נמצאו קבצים</p>
// //             <p style={styles.emptyStateSubtext}>העלה קבצים חדשים כדי שיופיעו כאן</p>
// //           </div>
// //         ) : (
// //           <div style={styles.fileGrid}>
// //             {files.map((file: FileData) => {
// //               const isExpanded = expandedFileIds.includes(file.id);
// //               return (
// //                 <div key={file.id} style={styles.fileCard}>
// //                   <div style={styles.fileCardHeader}>
// //                     <h3 style={styles.fileName}>{file.fileName}</h3>
// //                     <button
// //                       onClick={() => toggleExpand(file.id)}
// //                       style={{
// //                         background: 'none',
// //                         border: 'none',
// //                         cursor: 'pointer',
// //                         fontSize: '1.2rem',
// //                         color: '#555',
// //                       }}
// //                     >
// //                       {isExpanded ? '▲' : '▼'}
// //                     </button>
// //                   </div>

// //                   {isExpanded && (
// //                     <>
// //                       <div style={styles.fileDetails}>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם פרטי:</span><span style={styles.detailValue}>{file.firstName}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם משפחה:</span><span style={styles.detailValue}>{file.lastName}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם האב:</span><span style={styles.detailValue}>{file.fatherName}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>שם האם:</span><span style={styles.detailValue}>{file.motherName}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>כתובת:</span><span style={styles.detailValue}>{file.address}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>גיל:</span><span style={styles.detailValue}>{file.age}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>גובה:</span><span style={styles.detailValue}>{file.height}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>עיסוק:</span><span style={styles.detailValue}>{file.occupation}</span></div>
// //                         <div style={styles.detailItem}><span style={styles.detailLabel}>מקום לימודים:</span><span style={styles.detailValue}>{file.placeOfStudy}</span></div>
// //                       </div>

// //                       <div style={styles.fileActions}>
// //                         <button  onClick={() => handleViewOriginal(file.id)} ><img src="./././images/icons8-eye.gif" alt="View"/></button>
// //                         <button onClick={() => handleDownload(file.fileName)}><img src="./././images/icons8-download-32.png" alt="View"/></button>
// //                       </div>
// //                     </>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     padding: '2rem',
// //     maxWidth: '100vw',
// //     marginTop: '5rem',
// //     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
// //     direction: 'rtl',
// //   },
// //   header: {
// //     marginTop: '6rem',
// //     marginBottom: '1rem',
// //     textAlign: 'right',
// //     marginLeft: '65vw',
// //     maxWidth: '50vw',
// //     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
// //   },
// //   title: {
// //     fontSize: '2rem',
// //     fontWeight: 'bold',
// //     color: '#333',
// //     margin: 0,
// //     marginBottom: '0.5rem',
// //   },
// //   subtitle: {
// //     fontSize: '1rem',
// //     color: '#666',
// //     margin: 0,
// //   },
// //   errorContainer: {
// //     backgroundColor: '#ffeeee',
// //     borderRadius: '8px',
// //     padding: '1rem',
// //     marginBottom: '2rem',
// //     borderLeft: '4px solid #722F37',
// //   },
// //   errorText: {
// //     color: '#d32f2f',
// //     margin: 0,
// //   },
// //   emptyState: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: '4rem 2rem',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '8px',
// //     border: '1px dashed #ddd',
// //   },
// //   emptyStateIcon: {
// //     fontSize: '3rem',
// //     marginBottom: '1rem',
// //     color: '#ccc',
// //   },
// //   emptyStateText: {
// //     fontSize: '1.2rem',
// //     fontWeight: 'bold',
// //     color: '#555',
// //     margin: '0.5rem 0',
// //   },
// //   emptyStateSubtext: {
// //     fontSize: '0.9rem',
// //     color: '#888',
// //     margin: 0,
// //   },
// //   fileGrid: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1.5rem',
// //     justifyContent: 'flex-end',
// //     flexDirection: 'row-reverse',
// //   },
// //   fileCard: {
// //     width: '350px',
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     overflow: 'hidden',
// //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// //     border: '1px solid #f0f0f0',
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   fileCardHeader: {
// //     backgroundColor: '#f8f9fa',
// //     padding: '1rem',
// //     borderBottom: '1px solid #eee',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   fileName: {
// //     fontSize: '1rem',
// //     fontWeight: 'bold',
// //     margin: 0,
// //     color: '#333',
// //     overflow: 'hidden',
// //     textOverflow: 'ellipsis',
// //     whiteSpace: 'nowrap',
// //     maxWidth: '80%',
// //   },
// //   fileDate: {
// //     fontSize: '0.8rem',
// //     color: '#888',
// //   },
// //   fileDetails: {
// //     padding: '1rem',
// //   },
// //   detailItem: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     marginBottom: '0.5rem',
// //     fontSize: '0.9rem',
// //     borderBottom: '1px dotted #eee',
// //     paddingBottom: '0.5rem',
// //   },
// //   detailLabel: {
// //     fontWeight: 'bold',
// //     color: '#555',
// //     flexBasis: '40%',
// //   },
// //   detailValue: {
// //     color: '#333',
// //     flexBasis: '60%',
// //     textAlign: 'right',
// //   },
// //   fileActions: {
// //     padding: '1rem',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     borderTop: '1px solid #eee',
// //     backgroundColor: '#fafafa',
// //   },
// //   viewButton: {
// //     padding: '0.6rem 1rem',
// //     backgroundColor: 'white',
// //     color: '#555',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '0.85rem',
// //     fontWeight: 500,
// //   },
// //   downloadButton: {
// //     padding: '0.6rem 1.2rem',
// //     backgroundColor: '#722F37',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '0.85rem',
// //     fontWeight: 500,
// //     boxShadow: '0 4px 12px rgba(255, 0, 0, 0.2)',
// //   },
// // };

// // export default UserFiles;
// import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { fetchFilesByUserId, downloadFile, showFile } from '../../store/filesStore';
// import { FileData } from '../../types/fileData';
// import SearchComponent from '../files/search';
// import ShareIcon from '@mui/icons-material/Share';
// import SharingComponent from '../files/shareFiles';
// import { IsLoggedIn } from '../../App';
// import Sidebar from '../sideBar';

// const UserFiles: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const userId = sessionStorage.getItem("userId");
//   const { LoggedIn } = useContext(IsLoggedIn);
//   const files = useSelector((state: RootState) => state.files.files);
//   const error = useSelector((state: RootState) => state.files.error);
//   const [share,setShare] = useState<boolean>(false);
//   const [shareFileId, setShareFileId] = useState<number | null>(null);

//   // const [ setExpandedFileIds] = useState<number[]>([]);
//   const [expandedDateGroups, setExpandedDateGroups] = useState<string[]>([]);

//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchFilesByUserId(Number(userId)));
//     }
//   }, [dispatch, userId]);

//   const handleDownload = (fileName: string) => {
//     dispatch(downloadFile(fileName));
//   };

//   // const handleViewOriginal = async (fileName: string) => {
//   //   try {
//   //     const resultAction = await dispatch(showFile(fileName) as any);
//   //     console.log("resultAction", resultAction);

//   //     const fileUrl = resultAction.payload;
//   //     console.log("fileUrl", fileUrl);


//   //     if (fileUrl) {
//   //       const extension = fileName.split('.').pop()?.toLowerCase();
//   //       if (extension === "pdf") {

//   //       }

//   //       // <img src={fileUrl} alt="Original" style={{ maxWidth: "100%"}} />
//   //       <iframe src={fileUrl} width="100%" height="600px"></iframe>
//   //       console.log(`Viewing original file: ${fileName}`);
//   //     } else {
//   //       console.error("Failed to get file URL.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error viewing file:", error);
//   //   }
//   // };
//   const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);

//   const handleViewOriginal = async (fileName: string) => {
//     try {
//       const resultAction = await dispatch(showFile(fileName) as any);
//       const fileUrl = resultAction.payload;

//       if (fileUrl) {
//         setViewingFileUrl(fileUrl);
//       } else {
//         console.error("Failed to get file URL.");
//       }
//     } catch (error) {
//       console.error("Error viewing file:", error);
//     }
//   };


//   // const toggleExpandFile = (fileId: number) => {
//   //   setExpandedFileIds((prev) =>
//   //     prev.includes(fileId) ? prev.filter((id) => id !== fileId) : [...prev, fileId]
//   //   );
//   // };

//   const toggleExpandDateGroup = (date: string) => {
//     setExpandedDateGroups((prev) =>
//       prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
//     );
//   };

//   // Group files by createdAt date (formatted to 'YYYY-MM-DD')
//   const groupedFiles: Record<string, FileData[]> = files.reduce((acc, file) => {
//     // const date = new Date(file.createdAt).toISOString().split('T')[0]; // YYYY-MM-DD
//     const dateObj = new Date(file.createdAt);
//     const date = dateObj.getFullYear() + '-' +
//       String(dateObj.getMonth() + 1).padStart(2, '0') + '-' +
//       String(dateObj.getDate()).padStart(2, '0');

//     if (!acc[date]) acc[date] = [];
//     acc[date].push(file);
//     return acc;
//   }, {} as Record<string, FileData[]>);

//   const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

//   return (
//     <>
//     {/* {!LoggedIn && <Header/>} */}
//     {LoggedIn && <Sidebar/>}
//       <div style={styles.header}>
//         <h2 style={styles.title}>קבצים</h2>
//         <p style={styles.subtitle}>צפייה בקבצי הרזומה האישיים</p>
//       </div>
//       <div style={styles.container}>
//         {error && (
//           <div style={styles.errorContainer}>
//             <p style={styles.errorText}>שגיאה: {error}</p>
//           </div>
//         )}
//         <SearchComponent />

//         {files.length === 0 ? (
//           <div style={styles.emptyState}>
//             <div style={styles.emptyStateIcon}>📁</div>
//             <p style={styles.emptyStateText}>לא נמצאו קבצים</p>
//             <p style={styles.emptyStateSubtext}>העלה קבצים חדשים כדי שיופיעו כאן</p>
//           </div>
//         ) : (
//           sortedDates.map((date) => {
//             const isGroupExpanded = expandedDateGroups.includes(date);
//             return (
//               <div key={date}>
//                 <div
//                   style={{
//                     cursor: 'pointer',
//                     fontWeight: 'bold',
//                     fontSize: '1.1rem',
//                     marginBottom: '0.5rem',
//                     // marginTop: '2rem',
//                     // borderBottom: '1px solid #ddd',
//                     paddingBottom: '0.5rem',
//                   }}
//                   onClick={() => toggleExpandDateGroup(date)}
//                 >
//                   {isGroupExpanded ? '▼' : '▶'} תאריך: {date}
//                 </div>

//                 {isGroupExpanded && (
//                   <div style={styles.fileGrid}>
//                     {groupedFiles[date].map((file: FileData) => {
//                       // const isExpanded = expandedFileIds.includes(file.id);
//                       return (
//                         <div key={file.id} style={styles.fileCard}>
//                           <div style={styles.fileCardHeader}>
//                             <h3 style={styles.fileName}>{file.fileName}</h3>
//                             {/* <button
//                               onClick={() => toggleExpandFile(file.id)}
//                               style={{
//                                 background: 'none',
//                                 border: 'none',
//                                 cursor: 'pointer',
//                                 fontSize: '1.2rem',
//                                 color: '#555',
//                               }}
//                             >
//                               {isExpanded ? '▲' : '▼'}
//                             </button> */}
//                           </div>


//                           <div style={styles.fileDetails}>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם פרטי:</span><span style={styles.detailValue}>{file.firstName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם משפחה:</span><span style={styles.detailValue}>{file.lastName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם האב:</span><span style={styles.detailValue}>{file.fatherName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם האם:</span><span style={styles.detailValue}>{file.motherName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>כתובת:</span><span style={styles.detailValue}>{file.address}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>גיל:</span><span style={styles.detailValue}>{file.age}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>גובה:</span><span style={styles.detailValue}>{file.height}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>עיסוק:</span><span style={styles.detailValue}>{file.occupation}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>מקום לימודים:</span><span style={styles.detailValue}>{file.placeOfStudy}</span></div>
//                           </div>

//                           <div style={styles.fileActions}>
//                             <button onClick={() => handleViewOriginal(file.fileName)} title="צפה בקובץ">
//                               <img src="/images/icons8-eye.gif" alt="צפה" />
//                             </button>
//                             <button onClick={() => handleDownload(file.fileName)} title="הורד קובץ">
//                               <img src="/images/icons8-download-32.png" alt="הורד" />
//                             </button>
//                             <button onClick={()=>{setShareFileId(file.id);setShare(true)}}>
//                               <ShareIcon style={{ verticalAlign: 'middle', marginLeft: 4 }} />
//                               שתף
//                             </button>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })
//         )}
//       </div>
//       {viewingFileUrl && (
//         <div style={{
//           position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
//           backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center',
//           zIndex: 1000,
//         }}>
//           <div style={{ position: 'relative', width: '80%', height: '80%', backgroundColor: 'white', borderRadius: 8 }}>
//             <button
//               onClick={() => setViewingFileUrl(null)}
//               style={{ position: 'absolute', top: 1, right: 10, cursor: 'pointer' }}
//             >
//               סגור ✖
//             </button>
//             <iframe src={viewingFileUrl} width="100%" height="100%" title="File preview" />
//           </div>
//         </div>
//       )}
//       {share && shareFileId !== null && <SharingComponent resumeFileId={shareFileId} />}
//     </>
//   );
// };


// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     position:'fixed',
//     top:150,
//     right:250,
//     // padding: '2rem',
//     maxWidth: '100vw',
//     // marginTop: '1rem',
//     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
//     direction: 'rtl',
//   },
//   header: {
//     position:'fixed',
//     top:50,
//     //marginTop: '2rem',
//     marginBottom: '1rem',
//     textAlign: 'right',
//     marginLeft: '65vw',
//     maxWidth: '50vw',
//     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
//   },
//   title: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#722F37',
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
//     // borderBottom: '1px solid #eee',
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
//     // borderBottom: '1px dotted #eee',
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
// import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { fetchFilesByUserId, downloadFile, showFile } from '../../store/filesStore';
// import { FileData } from '../../types/fileData';
// import SearchComponent from '../files/search';
// import ShareIcon from '@mui/icons-material/Share';
// import SharingComponent from '../files/shareFiles';
// import { IsLoggedIn } from '../../App';
// import Sidebar from '../sideBar';

// const UserFiles: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const userId = sessionStorage.getItem("userId");
//   const { LoggedIn } = useContext(IsLoggedIn);
//   const files = useSelector((state: RootState) => state.files.files);
//   const error = useSelector((state: RootState) => state.files.error);

//   const [loading, setLoading] = useState(true);
//   const [share, setShare] = useState<boolean>(false);
//   const [shareFileId, setShareFileId] = useState<number | null>(null);
//   const [expandedDateGroups, setExpandedDateGroups] = useState<string[]>([]);
//   const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);

//   useEffect(() => {
//     if (userId) {
//       setLoading(true);
//       dispatch(fetchFilesByUserId(Number(userId)))
//         .finally(() => setLoading(false));
//     } else {
//       setLoading(false);
//     }
//   }, [dispatch, userId]);

//   const handleDownload = (fileName: string) => {
//     dispatch(downloadFile(fileName));
//   };

//   const handleViewOriginal = async (fileName: string) => {
//     try {
//       const resultAction = await dispatch(showFile(fileName) as any);
//       const fileUrl = resultAction.payload;

//       if (fileUrl) {
//         setViewingFileUrl(fileUrl);
//       } else {
//         console.error("Failed to get file URL.");
//       }
//     } catch (error) {
//       console.error("Error viewing file:", error);
//     }
//   };

//   const toggleExpandDateGroup = (date: string) => {
//     setExpandedDateGroups((prev) =>
//       prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
//     );
//   };

//   // Group files by createdAt date (formatted to 'YYYY-MM-DD')
//   const groupedFiles: Record<string, FileData[]> = files.reduce((acc, file) => {
//     const dateObj = new Date(file.createdAt);
//     const date = dateObj.getFullYear() + '-' +
//       String(dateObj.getMonth() + 1).padStart(2, '0') + '-' +
//       String(dateObj.getDate()).padStart(2, '0');

//     if (!acc[date]) acc[date] = [];
//     acc[date].push(file);
//     return acc;
//   }, {} as Record<string, FileData[]>);

//   const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

//   return (
//     <>
//       {LoggedIn && <Sidebar />}
//       <div style={styles.header}>
//         <h2 style={styles.title}>Files</h2>
//         <p style={styles.subtitle}>Viewing Personal Resume Files</p>
//       </div>
//       <div style={styles.container}>
//         {/* {error && (
//           <div style={styles.errorContainer}>
//             <p style={styles.errorText}>שגיאה: {error}</p>
//           </div>
//         )} */}
//         {error && (
//           <div style={styles.errorContainer}>
//             <p style={styles.errorText}>
//               שגיאה: {typeof error === 'string' ? error : (JSON.stringify(error))}
//             </p>
//           </div>
//         )}

//         <SearchComponent />

//         {loading ? (
//           <div style={styles.loadingContainer}>
//             <img src="/images/loading.gif" alt="טוען נתונים..." style={styles.loadingGif} />
//             <p>טוען נתונים...</p>
//           </div>
//         ) : files.length === 0 ? (
//           <div style={styles.emptyState}>
//             <div style={styles.emptyStateIcon}>📁</div>
//             <p style={styles.emptyStateText}>לא נמצאו קבצים</p>
//             <p style={styles.emptyStateSubtext}>העלה קבצים חדשים כדי שיופיעו כאן</p>
//           </div>
//         ) : (
//           sortedDates.map((date) => {
//             const isGroupExpanded = expandedDateGroups.includes(date);
//             return (
//               <div key={date}>
//                 <div
//                   style={{
//                     cursor: 'pointer',
//                     fontWeight: 'bold',
//                     fontSize: '1.1rem',
//                     marginBottom: '0.5rem',
//                     paddingBottom: '0.5rem',
//                     color: '#722F37',
//                   }}
//                   onClick={() => toggleExpandDateGroup(date)}
//                 >
//                   {isGroupExpanded ? '▼' : '▶'} Date: {date}
//                 </div>

//                 {isGroupExpanded && (
//                   <div style={styles.fileGrid}>
//                     {groupedFiles[date].map((file: FileData) => {
//                       return (
//                         <div key={file.id} style={styles.fileCard}>
//                           <div style={styles.fileCardHeader}>
//                             <h3 style={styles.fileName}>{file.fileName}</h3>
//                           </div>

//                           <div style={styles.fileDetails}>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם פרטי:</span><span style={styles.detailValue}>{file.firstName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם משפחה:</span><span style={styles.detailValue}>{file.lastName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם האב:</span><span style={styles.detailValue}>{file.fatherName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>שם האם:</span><span style={styles.detailValue}>{file.motherName}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>כתובת:</span><span style={styles.detailValue}>{file.address}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>גיל:</span><span style={styles.detailValue}>{file.age}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>גובה:</span><span style={styles.detailValue}>{file.height}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>עיסוק:</span><span style={styles.detailValue}>{file.occupation}</span></div>
//                             <div style={styles.detailItem}><span style={styles.detailLabel}>מקום לימודים:</span><span style={styles.detailValue}>{file.placeOfStudy}</span></div>
//                           </div>

//                           <div style={styles.fileActions}>
//                             <button onClick={() => handleViewOriginal(file.fileName)} title="צפה בקובץ">
//                               <img src="/images/icons8-eye.gif" alt="צפה" />
//                             </button>
//                             <button onClick={() => handleDownload(file.fileName)} title="הורד קובץ">
//                               <img src="/images/icons8-download-32.png" alt="הורד" />
//                             </button>
//                             <button onClick={() => { setShareFileId(file.id); setShare(true); }}>
//                               <ShareIcon style={{ verticalAlign: 'middle', marginLeft: 4 }} />
//                               שתף
//                             </button>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })
//         )}
//       </div>

//       {viewingFileUrl && (
//         <div style={{
//           position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
//           backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center',
//           zIndex: 1000,
//         }}>
//           <div style={{ position: 'relative', width: '80%', height: '80%', backgroundColor: 'white', borderRadius: 8 }}>
//             <button
//               onClick={() => setViewingFileUrl(null)}
//               style={{ position: 'absolute', top: 1, right: 10, cursor: 'pointer' }}
//             >
//               סגור ✖
//             </button>
//             <iframe src={viewingFileUrl} width="100%" height="100%" title="File preview" />
//           </div>
//         </div>
//       )}
//       {share && shareFileId !== null && <SharingComponent resumeFileId={shareFileId} />}
//     </>
//   );
// };

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     position: 'fixed',
// //     top: 150,
// //     right: 250,
// //     maxWidth: '100vw',
// //     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
// //     direction: 'rtl',
// //   },
// //   header: {
// //     position: 'fixed',
// //     top: 50,
// //     marginBottom: '1rem',
// //     textAlign: 'right',
// //     marginLeft: '65vw',
// //     maxWidth: '50vw',
// //     fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
// //   },
// //   title: {
// //     fontSize: '2rem',
// //     fontWeight: 'bold',
// //     color: '#722F37',
// //     margin: 0,
// //     marginBottom: '0.5rem',
// //   },
// //   subtitle: {
// //     fontSize: '1rem',
// //     color: '#666',
// //     margin: 0,
// //   },
// //   errorContainer: {
// //     backgroundColor: '#ffeeee',
// //     borderRadius: '8px',
// //     padding: '1rem',
// //     marginBottom: '2rem',
// //     borderLeft: '4px solid #722F37',
// //   },
// //   errorText: {
// //     color: '#d32f2f',
// //     margin: 0,
// //   },
// //   loadingContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: '3rem',
// //     color: '#555',
// //   },
// //   loadingGif: {
// //     width: '80px',
// //     height: '80px',
// //     marginBottom: '1rem',
// //   },
// //   emptyState: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: '4rem 2rem',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '8px',
// //     border: '1px dashed #ddd',
// //   },
// //   emptyStateIcon: {
// //     fontSize: '3rem',
// //     marginBottom: '1rem',
// //     color: '#ccc',
// //   },
// //   emptyStateText: {
// //     fontSize: '1.2rem',
// //     fontWeight: 'bold',
// //     color: '#555',
// //     margin: '0.5rem 0',
// //   },
// //   emptyStateSubtext: {
// //     fontSize: '0.9rem',
// //     color: '#888',
// //     margin: 0,
// //   },
// //   fileGrid: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1.5rem',
// //     justifyContent: 'flex-end',
// //     flexDirection: 'row-reverse',
// //   },
// //   fileCard: {
// //     width: '350px',
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     overflow: 'hidden',
// //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// //     border: '1px solid #f0f0f0',
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   fileCardHeader: {
// //     backgroundColor: '#f8f9fa',
// //     padding: '1rem',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   fileName: {
// //     fontSize: '1rem',
// //     fontWeight: 'bold',
// //     margin: 0,
// //     color: '#333',
// //     overflow: 'hidden',
// //     textOverflow: 'ellipsis',
// //     whiteSpace: 'nowrap',
// //     maxWidth: '80%',
// //   },
// //   detailItem: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     marginBottom: '0.5rem',
// //     fontSize: '0.9rem',
// //     paddingBottom: '0.5rem',
// //   },
// //   detailLabel: {
// //     fontWeight: 'bold',
// //     color: '#555',
// //     flexBasis: '40%',
// //   },
// //   detailValue: {
// //     color: '#333',
// //     flexBasis: '60%',
// //     textAlign: 'right',
// //   },
// //   fileActions: {
// //     padding: '1rem',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     borderTop: '1px solid #eee',
// //     backgroundColor: '#fafafa',
// //   },
// // };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     position: 'fixed',
//     top: 150,
//     right: 250,
//     maxWidth: '100vw',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     direction: 'rtl',
//     padding: '1rem 2rem',
//     maxHeight: 'calc(100vh - 200px)',
//     overflowY: 'auto',
//   },
//   header: {
//     position: 'fixed',
//     top: 50,
//     right: 250,
//     textAlign: 'right',
//     padding: '0 2rem',
//     width: '400px',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     zIndex: 100,
//   },
//   title: {
//     fontSize: '2.4rem',
//     fontWeight: '700',
//     color: '#5D2E46',
//     margin: '0.3rem 0',
//     letterSpacing: '0.05em',
//   },
//   subtitle: {
//     fontSize: '1.1rem',
//     color: '#8C7A86',
//     marginBottom: '0.5rem',
//   },
//   errorContainer: {
//     padding: '1rem 1.5rem',
//     marginBottom: '1.5rem',
//     color: '#a94442',
//     fontWeight: '600',
//     fontSize: '1rem',
//   },
//   loadingContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '4rem',
//     color: '#888',
//     fontSize: '1.1rem',
//     fontWeight: '500',
//   },
//   loadingGif: {
//     width: '90px',
//     height: '90px',
//     marginBottom: '1.5rem',
//   },
//   emptyState: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '5rem 2rem',
//     color: '#7b6ca8',
//     fontWeight: '600',
//     fontSize: '1.3rem',
//     userSelect: 'none',
//   },
//   emptyStateIcon: {
//     fontSize: '4rem',
//     marginBottom: '1rem',
//   },
//   emptyStateText: {
//     marginBottom: '0.3rem',
//   },
//   emptyStateSubtext: {
//     fontWeight: '400',
//     fontSize: '1rem',
//     color: '#9e9e9e',
//   },
//   fileGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1.8rem',
//     justifyContent: 'flex-end',
//     flexDirection: 'row-reverse',
//   },
//   fileCard: {
//     width: '360px',
//     display: 'flex',
//     flexDirection: 'column',
//     cursor: 'default',
//   },
//   fileCardHeader: {
//     padding: '1.3rem 1.5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   fileName: {
//     fontSize: '1.2rem',
//     fontWeight: '700',
//     margin: 0,
//     color: '#5D2E46',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//     maxWidth: '80%',
//   },
//   detailItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '0.45rem',
//     fontSize: '1rem',
//     padding: '0 1.2rem',
//     color: '#5b5b5b',
//     lineHeight: '1.3',
//   },
//   detailLabel: {
//     fontWeight: '600',
//     color: '#6b5b75',
//     flexBasis: '42%',
//   },
//   detailValue: {
//     flexBasis: '58%',
//     textAlign: 'right',
//     fontWeight: '400',
//     color: '#453749',
//   },
//   fileActions: {
//     padding: '1rem 1.5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   actionButton: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     color: '#7f5a83',
//     padding: '6px 14px',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontWeight: '600',
//     fontSize: '0.9rem',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5px',
//     transition: 'color 0.3s ease',
//   },
//   actionButtonHover: {
//     color: '#a174b9',
//   },
//   iconButton: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     padding: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'transform 0.2s ease',
//   },
//   iconButtonHover: {
//     transform: 'scale(1.15)',
//   },
//   viewingFileOverlay: {
//     position: 'fixed',
//     top: 0, left: 0,
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: 'rgba(29, 29, 29, 0.85)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 2000,
//   },
//   viewingFileContainer: {
//     position: 'relative',
//     width: '85%',
//     height: '85%',
//     borderRadius: '14px',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '10px',
//     right: '15px',
//     backgroundColor: '#5D2E46',
//     color: 'white',
//     border: 'none',
//     borderRadius: '50%',
//     width: '34px',
//     height: '34px',
//     fontSize: '1.3rem',
//     cursor: 'pointer',
//     boxShadow: '0 0 10px rgba(0,0,0,0.15)',
//     transition: 'background-color 0.3s ease',
//   },
//   closeButtonHover: {
//     backgroundColor: '#7f5a83',
//   },
// };



// export default UserFiles;
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchFilesByUserId, downloadFile, showFile } from '../../store/filesStore';
import { FileData } from '../../types/fileData';
import SearchComponent from './search';
import ShareIcon from '@mui/icons-material/Share';
import SharingComponent from './shareFiles';
import { IsLoggedIn } from '../../App';
import Sidebar from '../sideBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Menu, MenuItem, IconButton, CircularProgress } from '@mui/material';
// import { useNavigate } from "react-router-dom"
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import { deleteResumeFile } from '../../store/filesStore'; // לוודא שזה מאותו קובץ שיש בו thunk של מחיקה
import AIResponseUpdateDialog from './updateFile';
import DownloadIcon from '@mui/icons-material/Download';
import UpdateOriginalDialog from './updateOriginalFile';


// import React from 'react';

const UserFiles: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = sessionStorage.getItem("userId");
  const { LoggedIn } = useContext(IsLoggedIn);
  const files = useSelector((state: RootState) => state.files.files);
  // const error = useSelector((state: RootState) => state.files.error);
  const [loading, setLoading] = useState(true);
  const [share, setShare] = useState<boolean>(false);
  const [shareFileId, setShareFileId] = useState<number | null>(null);
  const [expandedDateGroups, setExpandedDateGroups] = useState<string[]>([]);
  const [viewingFileUrl, setViewingFileUrl] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);
  // const navigate = useNavigate();
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openUpdateOriginalDialog, setOpenUpdateOriginalDialog] = useState<boolean>(false);



  useEffect(() => {
    debugger;
    const uploaded = sessionStorage.getItem("uploaded");
    if (userId && (uploaded === "true" || uploaded === null)) {
      setLoading(true);
      dispatch(fetchFilesByUserId(Number(userId)))
        .finally(() => setLoading(false));
      sessionStorage.removeItem("uploaded");
    } else {
      setLoading(false);
    }
  }, [dispatch, userId]);

  const handleDownload = (fileName: string) => {
    dispatch(downloadFile(fileName));
  };

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

  const toggleExpandDateGroup = (date: string) => {
    setExpandedDateGroups((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>, fileId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedFileId(fileId);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedFileId(null);
  };

  const handleDelete = () => {
  console.log('Clicked delete from menu');
  if (selectedFileId !== null) {
    const file = files.find(f => f.id === selectedFileId);
    setSelectedFileName(file?.fileName || '');
    console.log('Opening confirmation dialog...');
    setConfirmDeleteOpen(true);
  }
  // אל תקרא פה ל-handleCloseMenu!
};

 const handleUpdateOriginal = () => {
    console.log('Clicked update original from menu');
    if (selectedFileId !== null) {
      setOpenUpdateOriginalDialog(true);
    }
  };

const confirmDelete = async () => {
  console.log('Inside confirmDelete');
  console.log(selectedFileId, selectedFileName);
  
  if (selectedFileId !== null) {
    try {
      const result = await dispatch(deleteResumeFile(selectedFileId));
      console.log('Delete result:', result);

      if (deleteResumeFile.fulfilled.match(result)) {
        console.log('File deleted successfully');
        setConfirmDeleteOpen(false);
        setSelectedFileId(null);
        setSelectedFileName(null);
        dispatch(fetchFilesByUserId(Number(userId)));
        handleCloseMenu(); // סגור את התפריט רק אחרי שמחקת
      } else {
        console.error('Delete failed:', result);
      }
    } catch (err) {
      console.error('Error in confirmDelete:', err);
    }
  }
};

  const handleUpdate = () => {
    console.log('Clicked update from menu');
    if (selectedFileId !== null) {
      setOpenUpdateDialog(true);
    }
    
  };

  // Group files by createdAt date (formatted to 'YYYY-MM-DD')
  const groupedFiles: Record<string, FileData[]> = files.reduce((acc, file) => {
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
      {LoggedIn && <Sidebar />}
      <div style={styles.header}>
        <h2 style={styles.title}>Files</h2>
        <p style={styles.subtitle}>Viewing Personal Resume Files</p>
      </div>
      <div style={styles.container}>
        {/* {error && (
          <div style={styles.errorContainer}>
            <p style={styles.errorText}>
              Error: {typeof error === 'string' ? error : JSON.stringify(error)}
            </p>
          </div>
        )} */}

        <SearchComponent />

        {loading ? (
          <div style={styles.loading}>
            {/* <img src="/images/loading.gif" alt="Loading..." style={{ width: 90 }} /> */}
            <CircularProgress style={{ color: '#722F37', left:'0'}} size={70}/>
            <p>Loading data...</p>

          </div>
          // <div style={styles.loadingContainer}>
          //   <img src="/images/loading.gif" alt="Loading data..." style={styles.loadingGif} />
          //   <p>Loading data...</p>
          // </div>
        ) : files.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyStateIcon}>📁</div>
            <p style={styles.emptyStateText}>No files found</p>
            <p style={styles.emptyStateSubtext}>Upload new files to see them here</p>
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
                    paddingBottom: '0.5rem',
                    color: '#722F37',
                  }}
                  onClick={() => toggleExpandDateGroup(date)}
                >
                  {isGroupExpanded ? '▼' : '▶'} Date: {date}
                </div>

                {isGroupExpanded && (
                  <div style={styles.fileGrid}>
                    {groupedFiles[date].map((file: FileData) => {
                      return (
                        <div key={file.id} style={styles.fileCard}>
                          <div style={styles.fileCardHeader}>
                            <h3 style={styles.fileName}>{file.fileName}</h3>
                          </div>

                          <div style={styles.fileDetails}>

                            <div style={styles.detailItem}><span style={styles.detailLabel}>First Name:</span><span style={styles.detailValue}>{file.firstName?file.firstName:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Last Name:</span><span style={styles.detailValue}>{file.lastName?file.lastName:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Father's Name:</span><span style={styles.detailValue}>{file.fatherName?file.fatherName:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Mother's Name:</span><span style={styles.detailValue}>{file.motherName?file.motherName:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Address:</span><span style={styles.detailValue}>{file.address?file.address:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Age:</span><span style={styles.detailValue}>{file.age?file.age:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Height:</span><span style={styles.detailValue}>{file.height?file.height:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Occupation:</span><span style={styles.detailValue}>{file.occupation?file.occupation:""}</span></div>
                            <div style={styles.detailItem}><span style={styles.detailLabel}>Place of Study:</span><span style={styles.detailValue}>{file.placeOfStudy?file.placeOfStudy:""}</span></div>
                          </div>

                          {/* <div style={styles.fileActions}>
                            <button onClick={() => handleViewOriginal(file.fileName)} title="View file">
                              <img src="/images/icons8-eye.gif" alt="View" />
                            </button>
                            <button onClick={() => handleDownload(file.fileName)} title="Download file">
                              <img src="/images/icons8-download-32.png" alt="Download" />
                            </button>
                            <button onClick={() => { setShareFileId(file.id); setShare(true); }} title='Share file'>
                              <ShareIcon style={{ verticalAlign: 'middle', marginLeft: 4 }} />

                            </button>
                          </div> */}
                          <div style={styles.fileActions}>
                            {/* <button onClick={() => handleViewOriginal(file.fileName)} title="View file">
                              <img src="/images/icons8-eye.gif" alt="View" />
                            </button>
                            <button onClick={() => handleDownload(file.fileName)} title="Download file">
                              <img src="/images/icons8-download-32.png" alt="Download" />
                            </button>
                            <button onClick={() => { setShareFileId(file.id); setShare(true); }} title='Share file'>
                              <ShareIcon style={{ verticalAlign: 'middle', marginLeft: 4 }} />
                            </button> */}
                            <button
                              onClick={() => handleViewOriginal(file.fileName)}
                              title="View file"
                              style={{
                                all: 'unset',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {/* <img src="/images/icons8-eye.gif" alt="View" /> */}
                               <VisibilityIcon style={styles.icon} />
                            </button>

                            <button
                              onClick={() => handleDownload(file.fileName)}
                              title="Download file"
                              style={{
                                all: 'unset',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {/* <img src="/images/icons8-download-32.png" alt="Download" /> */}
                              <DownloadIcon style={styles.icon} />
                            </button>

                            <button
                              onClick={() => {
                                setShareFileId(file.id);
                                setShare(true);
                              }}
                              title="Share file"
                              style={{
                                all: 'unset',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <ShareIcon style={styles.icon} />
                            </button>

                            {/* כפתור 3 הנקודות */}
                            <IconButton
                              onClick={(e) => handleMoreClick(e, file.id)}
                              disableRipple
                              disableFocusRipple
                              style={
                                {
                                all: 'unset', // מסיר כל עיצוב ברירת מחדל של כפתור
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                

                              }}
                            >
                              <MoreVertIcon style={styles.icon} />
                            </IconButton>

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
        <div style={styles.viewingFileOverlay}>
          <div style={styles.viewingFileContainer}>
            <button
              onClick={() => setViewingFileUrl(null)}
              style={styles.closeButton}
              aria-label="Close preview"
            >
              ✖
            </button>
            <iframe src={viewingFileUrl} width="100%" height="100%" title="File preview" />
          </div>
        </div>
      )}
      {/* {share && shareFileId !== null && <SharingComponent resumeFileId={shareFileId} />} */}

      {share && shareFileId !== null && (
        <SharingComponent resumeFileId={shareFileId} onClose={() => setShare(false)} open={share} />
      )}
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleDelete}>
          <DeleteIcon  style={styles.icon} />
          Delete
        </MenuItem>
        <MenuItem onClick={handleUpdate}>
          <EditIcon style={styles.icon} />
          Update Details
        </MenuItem>
        <MenuItem onClick={handleUpdateOriginal}>
          <EditIcon style={styles.icon} />
          Update File
        </MenuItem>
      </Menu>
     {/* <DeleteConfirmationDialog
          open={confirmDeleteOpen}
          fileName={selectedFileName || ''}
          onCancel={() => setConfirmDeleteOpen(false)}
          onConfirm={confirmDelete}
        /> */}

      {confirmDeleteOpen && (
        <DeleteConfirmationDialog
  open={confirmDeleteOpen}
  fileName={selectedFileName || ''}
  onCancel={() => {
    setConfirmDeleteOpen(false);
    setSelectedFileId(null);
    setSelectedFileName(null);
    handleCloseMenu(); // גם כאן
  }}
  onConfirm={confirmDelete}
/>
      )}
      {openUpdateDialog && (
  <AIResponseUpdateDialog
    open={openUpdateDialog}
    onClose={() =>{setOpenUpdateDialog(false)
      handleCloseMenu();
    }}
    file={files.find(f => f.id === selectedFileId) || null}
  />
)}
{openUpdateOriginalDialog && (
    <UpdateOriginalDialog
      open={openUpdateOriginalDialog}
      onClose={() => {
        setOpenUpdateOriginalDialog(false);
        handleCloseMenu();
      }}
      file={files.find(f => f.id === selectedFileId) || null}
    />
    )}

      </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    top: 150,
    left: 300,
    right: 0,
    maxWidth: '100vw',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    direction: 'ltr',
    padding: '1rem 2rem',
    maxHeight: 'calc(100vh - 200px)',
    overflowY: 'auto',
  },
  header: {
    position: 'fixed',
    top: 50,
    left: 300,
    right: 0,
    textAlign: 'left',
    padding: '0 2rem',
    width: '400px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    zIndex: 100,
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: '700',
    color: '#5D2E46',
    margin: '0.3rem 0',
    letterSpacing: '0.05em',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#8C7A86',
    marginBottom: '0.5rem',
  },
  errorContainer: {
    padding: '1rem 1.5rem',
    marginBottom: '1.5rem',
    color: '#a94442',
    fontWeight: '600',
    fontSize: '1rem',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem',
    color: '#888',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  loadingGif: {
    width: '90px',
    height: '90px',
    marginBottom: '1.5rem',
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
  emptyStateSubtext: {
    fontWeight: '400',
    fontSize: '1rem',
    color: '#9e9e9e',
  },
  fileGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.8rem',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  // fileCard: {
  //   width: '360px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   cursor: 'default',
  // },
  fileCard: {
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'default',
    border: '2px solid #722F37', // צבע אדום יין
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(114, 47, 55, 0.08)', // אופציונלי: הצללה עדינה
    transition: 'transform 0.2s ease',
  },

  fileCardHeader: {
    padding: '1.3rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileName: {
    fontSize: '1.2rem',
    fontWeight: '700',
    margin: 0,
    color: '#5D2E46',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '80%',
  },
  fileDetails: {
    padding: '0 1rem 1rem',
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
  fileActions: {
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#7f5a83',
    padding: '6px 14px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'color 0.3s ease',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
  },
  viewingFileOverlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(29, 29, 29, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  viewingFileContainer: {
    position: 'relative',
    width: '85%',
    height: '85%',
    borderRadius: '14px',
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    backgroundColor: '#5D2E46',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    fontSize: '1.3rem',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    color: '#722F37',
    fontSize: '1.6rem',
  },
  
};

export default UserFiles;
