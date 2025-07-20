// // // import React, { useState } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { AppDispatch } from '../../store/store';
// // // import { shareFile } from '../../store/filesStore';

// // // interface SharingComponentProps {
// // //   resumeFileId: number;
// // //   onClose: () => void;
// // // }

// // // const SharingComponent: React.FC<SharingComponentProps> = ({ resumeFileId, onClose }) => {
// // //   const [shareAll, setShareAll] = useState(false);
// // //   const [targetEmail, setTargetEmail] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const dispatch = useDispatch<AppDispatch>();

// // //   const validateEmail = (email: string) => {
// // //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// // //   };

// // //   const handleShare = async () => {
// // //     if (!shareAll && !validateEmail(targetEmail)) {
// // //       setMessage('אנא הזן כתובת אימייל תקינה.');
// // //       return;
// // //     }

// // //     const result = await dispatch(
// // //       shareFile({
// // //         resumeFileId,
// // //         targetEmail: shareAll ? undefined : targetEmail,
// // //         shareAll,
// // //       })
// // //     );

// // //     if (shareFile.fulfilled.match(result)) {
// // //       setMessage('הקובץ שותף בהצלחה!');
// // //       setTargetEmail('');
// // //       setTimeout(() => {
// // //         setMessage('');
// // //         onClose();
// // //       }, 2000);
// // //     } else {
// // //       setMessage('שגיאה בשיתוף הקובץ.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4 border rounded-lg shadow max-w-md mx-auto bg-white">
// // //       <h2 className="text-lg font-semibold mb-4">שיתוף קובץ</h2>

// // //       <label className="block mb-2 cursor-pointer">
// // //         <input
// // //           type="radio"
// // //           checked={shareAll}
// // //           onChange={() => setShareAll(true)}
// // //           className="mr-2"
// // //         />
// // //         שתף את הקובץ עם כל המשתמשים
// // //       </label>

// // //       <label className="block mb-4 cursor-pointer">
// // //         <input
// // //           type="radio"
// // //           checked={!shareAll}
// // //           onChange={() => setShareAll(false)}
// // //           className="mr-2"
// // //         />
// // //         שתף עם משתמש ספציפי (הזן אימייל)
// // //       </label>

// // //       {!shareAll && (
// // //         <input
// // //           type="email"
// // //           placeholder="הזן אימייל"
// // //           value={targetEmail}
// // //           onChange={(e) => setTargetEmail(e.target.value)}
// // //           className="border p-2 w-full mb-4 rounded"
// // //         />
// // //       )}

// // //       <button
// // //         onClick={handleShare}
// // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
// // //       >
// // //         שתף
// // //       </button>

// // //       {message && <p className="mt-2 text-sm text-center">{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default SharingComponent;
// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { AppDispatch } from '../../store/store';
// // import { shareFile } from '../../store/filesStore';
// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Button,
// //   Radio,
// //   RadioGroup,
// //   FormControlLabel,
// //   TextField,
// //   Typography,
// //   Box,
// // } from '@mui/material';

// // interface SharingComponentProps {
// //   userId?: number; // Assuming userId is passed as a prop
// //   resumeFileId: number;
// //   open: boolean;
// //   onClose: () => void;
// // }

// // const SharingComponent: React.FC<SharingComponentProps> = ({ resumeFileId, open, onClose }) => {
// //   const [shareAll, setShareAll] = useState(false);
// //   const [targetEmail, setTargetEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const dispatch = useDispatch<AppDispatch>();
// //   const userId = sessionStorage.getItem('userId') ? parseInt(sessionStorage.getItem('userId')!) : 0;

// //   const validateEmail = (email: string) => {
// //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// //   };

// //   // const handleShare = async () => {
// //   //   if (!shareAll && !validateEmail(targetEmail)) {
// //   //     setMessage('אנא הזן כתובת אימייל תקינה.');
// //   //     return;
// //   //   }

// //   //   const result = await dispatch(
// //   //     shareFile({
// //   //       resumeFileId,
// //   //       targetEmail: shareAll ? undefined : targetEmail,
// //   //       shareAll,
// //   //     })
// //   //   );

// //   //   if (shareFile.fulfilled.match(result)) {
// //   //     setMessage('הקובץ שותף בהצלחה!');
// //   //     setTargetEmail('');
// //   //     setTimeout(() => {
// //   //       setMessage('');
// //   //       onClose();
// //   //     }, 2000);
// //   //   } else {
// //   //     setMessage('שגיאה בשיתוף הקובץ.');
// //   //   }
// //   // };

// //   const handleClose = () => {
    
// //     setMessage('');
// //     setTargetEmail('');
// //     setShareAll(false);
// //     onClose();
// //   };

// //   const handleShare = async () => {
// //   if (!shareAll && !validateEmail(targetEmail)) {
// //     setMessage('אנא הזן כתובת אימייל תקינה.');
// //     return;
// //   }

// //   const result = await dispatch(
// //     shareFile({
// //       userId,
// //       resumeFileId,
// //       targetEmail: shareAll ? undefined : targetEmail,
// //       shareAll,
// //     })
// //   );

// //   if (shareFile.fulfilled.match(result)) {
// //     setMessage(result.payload); // הצגת הודעת ההצלחה מהשרת
// //     setTargetEmail('');
// //     setTimeout(() => {
// //       setMessage('');
// //       onClose();
// //     }, 2000);
// //   } else if (shareFile.rejected.match(result)) {
// //     setMessage(result.payload || 'שגיאה בשיתוף הקובץ.');
// //   }
// // };

// //   return (
// //     <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
// //       <DialogTitle>שיתוף קובץ</DialogTitle>
// //       <DialogContent>
// //         <RadioGroup
// //           value={shareAll ? 'all' : 'email'}
// //           onChange={(e) => setShareAll(e.target.value === 'all')}
// //         >
// //           <FormControlLabel
// //             value="all"
// //             control={<Radio />}
// //             label="שתף את הקובץ עם כל המשתמשים"
// //           />
// //           <FormControlLabel
// //             value="email"
// //             control={<Radio />}
// //             label="שתף עם משתמש ספציפי (הזן אימייל)"
// //           />
// //         </RadioGroup>

// //         {!shareAll && (
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             label="אימייל"
// //             type="email"
// //             fullWidth
// //             variant="outlined"
// //             value={targetEmail}
// //             onChange={(e) => setTargetEmail(e.target.value)}
// //             error={!!message && !validateEmail(targetEmail)}
// //             helperText={!!message && !validateEmail(targetEmail) ? message : ''}
// //           />
// //         )}

// //         {!!message && shareAll && (
// //           <Box mt={2}>
// //             <Typography color={message.includes('שגיאה') ? 'error' : 'primary'} align="center">
// //               {message}
// //             </Typography>
// //           </Box>
// //         )}
// //       </DialogContent>
// //       <DialogActions sx={{ px: 3, pb: 2 }}>
// //         <Button onClick={handleClose} color="inherit">
// //           ביטול
// //         </Button>
// //         <Button onClick={handleShare} variant="contained" color="primary">
// //           שתף
// //         </Button>
// //       </DialogActions>
// //     </Dialog>
// //   );
// // };

// // export default SharingComponent;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../store/store';
// import { shareFile } from '../../store/filesStore';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Box,
// } from '@mui/material';

// interface SharingComponentProps {
//   resumeFileId: number;
//   open: boolean;
//   onClose: () => void;
// }



// const SharingComponent: React.FC<SharingComponentProps> = ({ resumeFileId, open, onClose }) => {
//   const [shareAll, setShareAll] = useState(false);
//   const [targetEmail, setTargetEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState<"success" | "error" | null>(null); // for color
//   const dispatch = useDispatch<AppDispatch>();

//   const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleClose = () => {
//     setMessage('');
//     setMessageType(null);
//     setTargetEmail('');
//     setShareAll(false);
//     onClose();
//   };

//   const handleShare = async () => {
//     if (!shareAll && !validateEmail(targetEmail)) {
//       setMessage('Please enter a valid email address.');
//       setMessageType('error');
//       return;
//     }

//     const result = await dispatch(
//       shareFile({
//         resumeFileId,
//         targetEmail: shareAll ? undefined : targetEmail,
//         shareAll,
//       })
//     );

//     if (shareFile.fulfilled.match(result)) {
//       setMessage(result.payload || 'File shared successfully!');
//       setMessageType('success');
//       setTargetEmail('');
//       setTimeout(() => {
//         setMessage('');
//         setMessageType(null);
//         onClose();
//       }, 2000);
//     } else {
//       setMessage(result.payload || 'Error sharing the file.');
//       setMessageType('error');
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       maxWidth="xs"
//       fullWidth
//       PaperProps={{
//         sx: {
//           borderRadius: 2,
//           boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
//           overflow: "hidden",
//         },
//       }}
//     >
//       <DialogTitle
//         sx={{
//           backgroundColor: "#722F37",
//           color: "white",
//           fontWeight: "bold",
//           padding: "16px 24px",
//         }}
//       >
//         Share File
//       </DialogTitle>

//       <DialogContent sx={{ padding: 3, backgroundColor: "white" }}>
//         <RadioGroup
//           value={shareAll ? 'all' : 'email'}
//           onChange={(e) => setShareAll(e.target.value === 'all')}
//           sx={{ mb: 2 }}
//         >
//           <FormControlLabel
//             value="all"
//             control={<Radio sx={{ color: '#722F37', '&.Mui-checked': { color: '#722F37' } }} />}
//             label="Share with all users"
//             sx={{ mb: 1 }}
//           />
//           <FormControlLabel
//             value="email"
//             control={<Radio sx={{ color: '#722F37', '&.Mui-checked': { color: '#722F37' } }} />}
//             label="Share with a specific user (email)"
//           />
//         </RadioGroup>

//         {!shareAll && (
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             value={targetEmail}
//             onChange={(e) => setTargetEmail(e.target.value)}
//             error={!!message && !validateEmail(targetEmail)}
//             helperText={!!message && !validateEmail(targetEmail) ? message : ''}
//             InputProps={{
//               sx: {
//                 borderRadius: 1.5,
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#722F37",
//                 },
//               },
//             }}
//             InputLabelProps={{
//               sx: {
//                 "&.Mui-focused": {
//                   color: "#722F37",
//                 },
//               },
//             }}
//           />
//         )}

//         {!!message && (
//   <Box mt={2}>
//     <Typography
//       align="center"
//       sx={{
//         fontWeight: 'bold',
//         color:
//           messageType === 'success'
//             ? '#722F37'
//             : messageType === 'error'
//             ? 'error.main'
//             : 'text.primary',
//       }}
//     >
//       {message}
//     </Typography>
//   </Box>
// )}

    
//       </DialogContent>

//       <DialogActions sx={{ px: 3, pb: 2 }}>
//         <Button onClick={handleClose} color="inherit">
//           Cancel
//         </Button>
//         <Button
//           onClick={handleShare}
//           variant="contained"
//           sx={{
//             backgroundColor: "#722F37",
//             color: "white",
//             borderRadius: 1.5,
//             paddingX: 3,
//             paddingY: 1,
//             textTransform: "none",
//             fontWeight: "bold",
//             "&:hover": {
//               backgroundColor: "#5e252d",
//             },
//           }}
//         >
//           Share
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default SharingComponent;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { shareFile } from '../../store/filesStore';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';

interface SharingComponentProps {
  resumeFileId: number;
  open: boolean;
  onClose: () => void;
}

const SharingComponent: React.FC<SharingComponentProps> = ({ resumeFileId, open, onClose }) => {
  const [shareAll, setShareAll] = useState(false);
  const [targetEmail, setTargetEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false); // ← LOADING STATE

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleClose = () => {
    setMessage('');
    setMessageType(null);
    setEmailError(false);
    setTargetEmail('');
    setShareAll(false);
    onClose();
  };

  const handleShare = async () => {
  if (!shareAll && !validateEmail(targetEmail)) {
    setEmailError(true);
    setMessage('Please enter a valid email address.');
    setMessageType('error');
    return;
  }

  setEmailError(false);
  setLoading(true); // ← START LOADING

  const result = await dispatch(
    shareFile({
      userId: sessionStorage.getItem('userId') ? parseInt(sessionStorage.getItem('userId')!) : 0,
      resumeFileId,
      targetEmail: shareAll ? undefined : targetEmail,
      shareAll,
    })
  );

  if (shareFile.fulfilled.match(result)) {
    setMessage(result.payload || 'File shared successfully!');
    setMessageType('success');

    if (!shareAll) {
      setTargetEmail('');
    }

    setTimeout(() => {
      setMessage('');
      setMessageType(null);
      setLoading(false); // ← STOP LOADING
      onClose();
    }, 1500);
  } else {
    setMessage(result.payload || 'Error sharing the file.');
    setMessageType('error');
    setLoading(false); // ← STOP LOADING
  }
};

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
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
        }}
      >
        Share File
      </DialogTitle>

      <DialogContent sx={{ padding: 3, backgroundColor: "white" }}>
        <RadioGroup
          value={shareAll ? 'all' : 'email'}
          onChange={(e) => setShareAll(e.target.value === 'all')}
          sx={{ mb: 2 }}
        >
          <FormControlLabel
            value="all"
            control={<Radio sx={{ color: '#722F37', '&.Mui-checked': { color: '#722F37' } }} />}
            label="Share with all users"
            sx={{ mb: 1 }}
          />
          <FormControlLabel
            value="email"
            control={<Radio sx={{ color: '#722F37', '&.Mui-checked': { color: '#722F37' } }} />}
            label="Share with a specific user (email)"
          />
        </RadioGroup>

        {!shareAll && (
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={targetEmail}
            onChange={(e) => setTargetEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? message : ''}
            InputProps={{
              sx: {
                borderRadius: 1.5,
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#722F37",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "#722F37",
                },
              },
            }}
          />
        )}

        {!!message && !emailError && (
          <Box mt={2}>
            <Typography
              align="center"
              sx={{
                fontWeight: 'bold',
                color:
                  messageType === 'success'
                    ? '#722F37'
                    : messageType === 'error'
                    ? 'error.main'
                    : 'text.primary',
              }}
            >
              {message}
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleShare}
          variant="contained"
          sx={{
            backgroundColor: "#722F37",
            color: "white",
            borderRadius: 1.5,
            paddingX: 3,
            paddingY: 1,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#5e252d",
            },
          }}
        >
          
           {loading ? (
    <CircularProgress size={24} sx={{ color: "white" }} />
  ) : (
    "Share"
  )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SharingComponent;
