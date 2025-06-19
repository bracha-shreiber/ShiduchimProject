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
"use client"

import type React from "react"
import { useContext, useState } from "react"
import axios from "axios"
import { Box, Button, LinearProgress, Typography } from "@mui/material"
import Header from "./header"
import Sidebar from "./sideBar"
import { IsLoggedIn } from "../App"

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
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

      const response = await axios.post("http://localhost:5076/api/AIResponse", formData);
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
      const response = await axios.get("http://localhost:5076/api/upload/presigned-url", {
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

  return (
    <>
    {!LoggedIn && <Header/>}
    {LoggedIn && <Sidebar/>}
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: 400,
        margin: "20px 0",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{
            borderColor: "#722F37",
            color: "#722F37",
            borderRadius: 2,
            padding: "10px 0",
            "&:hover": {
              borderColor: "#cc0000",
              backgroundColor: "rgba(255, 0, 0, 0.04)",
            },
          }}
        >
          Select File
          <input type="file" onChange={handleFileChange} hidden />
        </Button>
        {file && <Box sx={{ mt: 1, fontSize: "0.875rem", color: "text.secondary" }}>Selected: {file.name}</Box>}
      </Box>

      <Button
        onClick={handleUpload}
        variant="contained"
        fullWidth
        disabled={!file}
        sx={{
          backgroundColor: "#722F37",
          color: "white",
          borderRadius: 2,
          padding: "10px 0",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#cc0000",
          },
          "&.Mui-disabled": {
            backgroundColor: "#ffcccc",
            color: "#990000",
          },
        }}
      >
        Upload File
      </Button>

      {progress > 0 && (
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#ffcccc",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#722F37",
                  },
                }}
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Uploading: {file?.name}
          </Typography>
        </Box>
      )}
    </Box>
    </>
  )
}

export default FileUploader
