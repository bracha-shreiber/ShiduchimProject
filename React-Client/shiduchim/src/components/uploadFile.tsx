// // // React Component
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const FileUploader = () => {
// //   const [file, setFile] = useState<File | null>(null);
// //   const [progress, setProgress] = useState(0);

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files) {
// //       setFile(e.target.files[0]);
// //     }
// //   };
// //   const saveindb = async () => {
// //     try {
// //       if (!file) {
// //         throw new Error("No file selected");
// //       }

// //       const formData = new FormData();
// //       formData.append("ResumeFile", file);
// //       formData.append("Extention", "docx"); 
// //       formData.append("UserId", JSON.stringify(sessionStorage.getItem('userId')));


// //       const response = await axios.post("http://localhost:5076/api/AIResponse", formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data', // Set the content type
// //         },
// //       });

// //       console.log(response);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };



// //   const handleUpload = async () => {
// //     if (!file) return;

// //     try {
// //       // שלב 1: קבלת Presigned URL מהשרת
// //       const response = await axios.get('http://localhost:5076/api/upload/presigned-url', {
// //         params: { fileName: file.name }
// //       });

// //       const presignedUrl = response.data.url;

// //       // שלב 2: העלאת הקובץ ישירות ל-S3
// //       await axios.put(presignedUrl, file, {
// //         headers: {
// //           'Content-Type': file.type,
// //         },
// //         onUploadProgress: (progressEvent) => {
// //           const percent = Math.round(
// //             (progressEvent.loaded * 100) / (progressEvent.total || 1)
// //           );
// //           setProgress(percent);
// //         },
// //       });

// //       alert('הקובץ הועלה בהצלחה!');
// //       saveindb();
// //     } catch (error) {
// //       console.error('שגיאה בהעלאה:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input type="file" onChange={handleFileChange}
// //       // accept='.pdf'
// //       />
// //       <button onClick={handleUpload}>העלה קובץ</button>
// //       {progress > 0 && <div>התקדמות: {progress}%</div>}
// //     </div>
// //   );
// // };

// // export default FileUploader;
// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const FileUploader = () => {
// // //   const [file, setFile] = useState<File | null>(null);
// // //   const [progress, setProgress] = useState(0);

// // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     if (e.target.files) {
// // //       setFile(e.target.files[0]);
// // //     }
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) return;

// // //     try {
// // //       // שלב 1: קבלת Presigned URL מהשרת
// // //       const response = await axios.get('http://localhost:5076/api/upload/presigned-url', {
// // //         params: { fileName: file.name }
// // //       });

// // //       const presignedUrl = response.data.url;

// // //       // שלב 2: העלאת הקובץ ישירות ל-S3
// // //       debugger
// // //       await axios.put(presignedUrl, file, {
// // //         headers: {
// // //           'Content-Type': file.type,
// // //         },
// // //         onUploadProgress: (progressEvent) => {
// // //           const percent = Math.round(
// // //             (progressEvent.loaded * 100) / (progressEvent.total || 1)
// // //           );
// // //           setProgress(percent);
// // //         },
// // //       });

// // //       alert('הקובץ הועלה בהצלחה!');
// // //     } catch (error) {
// // //       console.error('שגיאה בהעלאה:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <input type="file" onChange={handleFileChange} />
// // //       <button onClick={handleUpload}>העלה קובץ</button>
// // //       {progress > 0 && <div>התקדמות: {progress}%</div>}
// // //     </div>
// // //   );
// // // };

// // // export default FileUploader;
// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUploader = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [progress, setProgress] = useState(0);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     debugger
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   // const saveindb = async (fileUrl: string) => {
//   //   try {
//   //     if (!file) {
//   //       throw new Error("No file selected");
//   //     }

//   //     const formData = new FormData();
//   //     formData.append("ResumeFile", file);
//   //     formData.append("Extention", "docx"); // תוודא שאתה שולח את הסיומת הנכונה
//   //     formData.append("UserId", sessionStorage.getItem('userId')); // קבלת userId מה-Session

//   //     const response = await axios.post("http://localhost:5076/api/AIResponse", formData, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     console.log("Response from DB save:", response);
//   //   } catch (error) {
//   //     console.error("Error saving file data:", error);
//   //   }
//   // };

// const saveindb = async (file: File) => {
//   debugger
//     try {
//         if (!file) {
//             throw new Error("No file selected");
//         }

//         const userId = sessionStorage.getItem('userId');
//         if (!userId) {
//             throw new Error("Missing userId in session storage");
//         }

//         const formData = new FormData();
//         formData.append("ResumeFile", file);
//         formData.append("Extention", "docx"); // ודא שהסיומת נכונה
//         formData.append("UserId", userId);     // שלח כ string, השרת ימיר

//         // Debug: תראה מה באמת נשלח
//         for (let [key, value] of formData.entries()) {
//             console.log(`${key}:`, value);
//         }

//         const response = await axios.post("http://localhost:5076/api/AIResponse", formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         console.log("Response from DB save:", response.data);
//     } catch (error) {
//         console.error("Error saving file data:", error);
//     }
// };


//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       debugger
//       // שלב 1: קבלת Presigned URL מהשרת
//       const response = await axios.get('http://localhost:5076/api/upload/presigned-url', {
//         params: { fileName: file.name }
//       });

//       const presignedUrl = response.data.url;
// console.log(presignedUrl);

//       // שלב 2: העלאת הקובץ ישירות ל-S3
//       await axios.put(presignedUrl, file, {
//         headers: {
//           'Content-Type': file.type,
//         },
//         onUploadProgress: (progressEvent) => {
//           const percent = Math.round(
//             (progressEvent.loaded * 100) / (progressEvent.total || 1)
//           );
//           setProgress(percent);
//         },
//       });

//       alert('הקובץ הועלה בהצלחה!');
//       saveindb(presignedUrl);  // שלח את ה-URL של הקובץ ששודר ל-S3
//     } catch (error) {
//       console.error('שגיאה בהעלאה:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>העלה קובץ</button>
//       {progress > 0 && <div>התקדמות: {progress}%</div>}
//     </div>
//   );
// };

// export default FileUploader;
// "use client"

// import type React from "react"
// import { useContext, useState } from "react"
// import axios from "axios"
// import { Alert, Box, Button, CircularProgress, Fade, LinearProgress, Paper, Typography } from "@mui/material"
// import Header from "./header"
// import Sidebar from "./sideBar"
// import { IsLoggedIn } from "../App"
// import { CheckCircleIcon, CloudUploadIcon } from "lucide-react"

// const FileUploader = () => {
//   const [file, setFile] = useState<File | null>(null)
//   const [progress, setProgress] = useState(0)
//    const { LoggedIn } = useContext(IsLoggedIn)
"use client"

import type React from "react"
import { useContext, useState } from "react"
import axios from "axios"
import { 
  Box, 
  Button, 
  LinearProgress, 
  Typography, 
  Paper,
  Alert,
  Fade,
  CircularProgress
} from "@mui/material"
import { 
  CloudUpload as CloudUploadIcon,
  CheckCircle as CheckCircleIcon,
  // Error as ErrorIcon 
} from "@mui/icons-material"
import Header from "./header"
import Sidebar from "./sideBar"
import { IsLoggedIn, url } from "../App"

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [uploading] = useState(false)
  const [uploadStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage] = useState('')
  const { LoggedIn } = useContext(IsLoggedIn)
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const saveindb = async (file: File) => {
    debugger
    try {
      if (!file) {
        throw new Error("No file selected")
      }

      const userId = sessionStorage.getItem("userId")
      if (!userId) {
        throw new Error("Missing userId in session storage")
      }

      const formData = new FormData()
      formData.append("ResumeFile", file)
      formData.append("UserId", userId) 

      // Debug: תראה מה באמת נשלח
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value)
      }


      const response = await axios.post(`${url}/AIResponse`, formData);
      //   , {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     // 'Content-Disposition': 'inline', 
      //   },
      // })

      console.log("Response from DB save:", response.data)
    } catch (error) {
      console.error("Error saving file data:", error)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      debugger
      // שלב 1: קבלת Presigned URL מהשרת
      const response = await axios.get(`${url}/upload/presigned-url`, {
        params: { fileName: file.name },
      })

      const presignedUrl = response.data.url
      console.log(presignedUrl)

      // שלב 2: העלאת הקובץ ישירות ל-S3
      await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1))
          setProgress(percent)
        },
      })

      alert("הקובץ הועלה בהצלחה!")
      saveindb(file) // שלח את ה-URL של הקובץ ששודר ל-S3
    } catch (error) {
      console.error("שגיאה בהעלאה:", error)
    }
  }

//   return (
//     <>
//     {!LoggedIn && <Header/>}
//     {LoggedIn && <Sidebar/>}
//     <Box
//       sx={{
//         padding: 3,
//         borderRadius: 2,
//         backgroundColor: "white",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         width: "100%",
//         maxWidth: 400,
//         margin: "20px 0",
//       }}
//     >
//       <Box sx={{ mb: 2 }}>
//         <Button
//           variant="outlined"
//           component="label"
//           fullWidth
//           sx={{
//             borderColor: "#722F37",
//             color: "#722F37",
//             borderRadius: 2,
//             padding: "10px 0",
//             "&:hover": {
//               borderColor: "#cc0000",
//               backgroundColor: "rgba(255, 0, 0, 0.04)",
//             },
//           }}
//         >
//           Select File
//           <input type="file" onChange={handleFileChange} hidden />
//         </Button>
//         {file && <Box sx={{ mt: 1, fontSize: "0.875rem", color: "text.secondary" }}>Selected: {file.name}</Box>}
//       </Box>

//       <Button
//         onClick={handleUpload}
//         variant="contained"
//         fullWidth
//         disabled={!file}
//         sx={{
//           backgroundColor: "#722F37",
//           color: "white",
//           borderRadius: 2,
//           padding: "10px 0",
//           textTransform: "none",
//           fontWeight: "bold",
//           "&:hover": {
//             backgroundColor: "#cc0000",
//           },
//           "&.Mui-disabled": {
//             backgroundColor: "#ffcccc",
//             color: "#990000",
//           },
//         }}
//       >
//         Upload File
//       </Button>

//       {progress > 0 && (
//         <Box sx={{ mt: 2 }}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Box sx={{ width: "100%", mr: 1 }}>
//               <LinearProgress
//                 variant="determinate"
//                 value={progress}
//                 sx={{
//                   height: 10,
//                   borderRadius: 5,
//                   backgroundColor: "#ffcccc",
//                   "& .MuiLinearProgress-bar": {
//                     backgroundColor: "#722F37",
//                   },
//                 }}
//               />
//             </Box>
//             <Box sx={{ minWidth: 35 }}>
//               <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
//             </Box>
//           </Box>
//           <Typography variant="caption" color="text.secondary">
//             Uploading: {file?.name}
//           </Typography>
//         </Box>
//       )}
//     </Box>
//     </>
//   )
// }

// export default FileUploader
const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar and Header */}
      {LoggedIn && <Sidebar />}
      {!LoggedIn && <Header />}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: LoggedIn ? '280px' : '0',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
          transition: 'margin-left 0.3s ease',
          '@media (max-width: 960px)': {
            marginLeft: '0',
          },
        }}
      >
        <Paper
          elevation={8}
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: "white",
            width: "100%",
            maxWidth: 500,
            boxShadow: "0 12px 40px rgba(114, 47, 55, 0.15)",
            border: '1px solid rgba(114, 47, 55, 0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CloudUploadIcon 
              sx={{ 
                fontSize: 48, 
                color: '#722F37', 
                mb: 2,
                opacity: 0.8 
              }} 
            />
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#722F37',
                mb: 1 
              }}
            >
              Upload Resume
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontSize: '1.1rem' 
              }}
            >
              Select your resume file to get started
            </Typography>
          </Box>

          {/* Upload Area */}
          <Box sx={{ mb: 3 }}>
            <input
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <Button
                variant="outlined"
                component="span"
                fullWidth
                startIcon={<CloudUploadIcon />}
                sx={{
                  borderColor: "#722F37",
                  color: "#722F37",
                  borderRadius: 3,
                  padding: "16px 24px",
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  borderStyle: 'dashed',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderColor: "#8B3A42",
                    backgroundColor: "rgba(114, 47, 55, 0.04)",
                    borderStyle: 'solid',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(114, 47, 55, 0.15)',
                  },
                }}
              >
                Choose File
              </Button>
            </label>

            {/* File Info */}
            {file && (
              <Fade in={true}>
                <Box 
                  sx={{ 
                    mt: 2, 
                    p: 2, 
                    backgroundColor: 'rgba(114, 47, 55, 0.05)',
                    borderRadius: 2,
                    border: '1px solid rgba(114, 47, 55, 0.1)'
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#722F37' }}>
                    Selected File:
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 0.5 }}>
                    {file.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Size: {formatFileSize(file.size)}
                  </Typography>
                </Box>
              </Fade>
            )}
          </Box>

          {/* Upload Button */}
          <Button
            onClick={handleUpload}
            variant="contained"
            fullWidth
            disabled={!file || uploading}
            startIcon={
              uploading ? <CircularProgress size={20} color="inherit" /> : 
              uploadStatus === 'success' ? <CheckCircleIcon /> : 
              <CloudUploadIcon />
            }
            sx={{
              backgroundColor: "#722F37",
              color: "white",
              borderRadius: 3,
              padding: "16px 24px",
              fontSize: '1.1rem',
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: '0 8px 25px rgba(114, 47, 55, 0.3)',
              transition: 'all 0.3s ease',
              "&:hover": {
                backgroundColor: "#8B3A42",
                boxShadow: '0 12px 35px rgba(114, 47, 55, 0.4)',
                transform: 'translateY(-2px)',
              },
              "&:active": {
                transform: 'translateY(0)',
              },
              "&.Mui-disabled": {
                backgroundColor: "#cccccc",
                color: "#888888",
                boxShadow: 'none',
              },
            }}
          >
            {uploading ? 'Uploading...' : 
             uploadStatus === 'success' ? 'Upload Complete!' : 
             'Upload File'}
          </Button>

          {/* Progress Bar */}
          {progress > 0 && progress < 100 && (
            <Fade in={true}>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: "rgba(114, 47, 55, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#722F37",
                          borderRadius: 6,
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#722F37", 
                        fontWeight: 'bold' 
                      }}
                    >
                      {`${Math.round(progress)}%`}
                    </Typography>
                  </Box>
                </Box>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    display: 'block',
                    textAlign: 'center' 
                  }}
                >
                  Uploading: {file?.name}
                </Typography>
              </Box>
            </Fade>
          )}

          {/* Status Messages */}
          {uploadStatus === 'success' && (
            <Fade in={true}>
              <Alert 
                severity="success" 
                sx={{ 
                  mt: 3,
                  borderRadius: 2,
                  '& .MuiAlert-icon': {
                    color: '#722F37'
                  }
                }}
              >
                File uploaded successfully!
              </Alert>
            </Fade>
          )}

          {uploadStatus === 'error' && (
            <Fade in={true}>
              <Alert 
                severity="error" 
                sx={{ 
                  mt: 3,
                  borderRadius: 2 
                }}
              >
                {errorMessage}
              </Alert>
            </Fade>
          )}

          {/* Decorative Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: 'rgba(114, 47, 55, 0.05)',
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: 'rgba(114, 47, 55, 0.03)',
              zIndex: -1,
            }}
          />
        </Paper>
      </Box>
    </Box>
  )
}

export default FileUploader