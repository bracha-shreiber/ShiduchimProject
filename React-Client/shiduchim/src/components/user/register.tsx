// import { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { Box, TextField, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
// import { IsLoggedIn, userContext } from "../../App";
// import { setError } from "../../store/ErrorSlice";
// import { useDispatch } from "react-redux";
// import { User } from "../../types/user";
// import store, { AppDispatch } from "../../store/store";
// import { addUser } from "../../store/userStore";
// // import { Register_Login_Response } from "../../types/register_login";
// import { useNavigate } from "react-router-dom";
// import Header from "../header";

// export default () => {
//     const { userDispatch } = useContext(userContext);
//     const { LoggedIn, setLoggedIn } = useContext(IsLoggedIn);
//       const [close, setClose] = useState<boolean>(true)
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigate = useNavigate();
//     const dispatch = useDispatch<AppDispatch>();
//     useEffect(() => {
//         if (!close) {
//           navigate("/");
//         }
//       }, [close, navigate]);
//     // const onSubmit = async (userData: any) => {
//     //     try {

//     //         // const str = url + '/Auth/' + (state === true ? "login" : "register");

//     //         // Create the data object based on the state
//     //         const postData: Partial<User> = {
//     //             email: userData.email,
//     //             passwordHash: userData.password,
//     //             username: userData.username,
//     //             phone: userData.phone,
//     //             address: userData.address
//     //         }


//     //         // Include additional fields only if state is false (for registration)
//     //         const res = await store.dispatch(addUser(postData)) as { payload: Register_Login_Response };

//     //         if (!res || !res.payload || !res.payload.user || res.payload.user.id === 0) {
//     //             // console.log(res);
//     //             // console.log(res.payload);
//     //             // console.log(res.payload.user);
//     //             // console.log(res.payload.user.id);
//     //             console.error("Registration failed: Invalid response: missing or invalid user.id");
//     //             return;
//     //           }

//     //         if (addUser.fulfilled.match(res)) {
//     //             // It's a success
//     //             userDispatch({
//     //                 type: "LOGIN",
//     //                 data: { ...postData }
//     //             });
//     //             setLoggedIn(true);
//     //         } else {
//     //             console.error("Registration failed:", res.payload); // This could be the string: "Cannot read properties..."
//     //         }
// const onSubmit = async (userData: any) => {
//   try {
//     const postData: Partial<User> = {
//       email: userData.email,
//       passwordHash: userData.password,
//       username: userData.username,
//       phone: userData.phone,
//       address: userData.address
//     };

//     // Unwrap will return the actual payload or throw an error if rejected
//     const response = await store.dispatch(addUser(postData)).unwrap();

//     if (!response.user || response.user.id === 0) {
//       console.error("Registration failed: Invalid user ID");
//       return;
//     }

//     // Success: update user state and set logged in
//     userDispatch({
//       type: "LOGIN",
//       data: response.user, // or postData if you prefer
//     });
//     setLoggedIn(true);
// }
// //   } catch (error) {
// //     console.error("Registration failed:", error);
// //   }




//             // const res = await store.dispatch(addUser(postData))
//             // console.log("res:", res);
//             // if (res) {
//             //     console.log("------");

//             //     userDispatch({
//             //         type: "LOGIN",
//             //         data: {
//             //             ...postData,
//             //         }
//             //     });

//             //     setLoggedIn(true);
//             //     console.log("loggenIn", LoggedIn);
//             //     console.log("loggenIn", LoggedIn);
//             // }
//          catch (error) {
//             if (axios.isAxiosError(error)) {
//                 const status = error.response?.status;
//                 switch (status) {
//                     case 400:
//                         dispatch(setError("Bad Request: The server could not understand the request due to invalid syntax."));
//                         break;
//                     case 401:
//                         dispatch(setError("Unauthorized: Access is denied due to invalid credentials."));
//                         break;
//                     case 403:
//                         dispatch(setError("Forbidden: You do not have permission to access this resource."));
//                         break;
//                     default:
//                         dispatch(setError("An unexpected error occurred."));
//                         break;
//                 }
//             } else {
//                 dispatch(setError("An unexpected error occurred."));
//             }
//         } finally {
//             setClose(false);
//             console.log("i closed");
//         }
//     };


// //  return (
// //     <>
// //       <Header />
// //       <Dialog
// //         open={!LoggedIn && close}
// //         onClose={() => setClose(false)}
// //         PaperProps={{
// //           sx: {
// //             borderRadius: 2,
// //             boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
// //             overflow: "hidden",
// //           },
// //         }}
// //       >
// //         <DialogTitle
// //           sx={{
// //             backgroundColor: "#722F37",
// //             color: "white",
// //             fontWeight: "bold",
// //             padding: "16px 24px",
// //           }}
// //         >
// //           {"Sign Up"}
// //         </DialogTitle>
// //         <DialogContent sx={{ padding: 0 }}>
// //           <Box
// //             sx={{
// //               width: 350,
// //               padding: 3,
// //               backgroundColor: "white",
// //             }}
// //           >
// //             <form onSubmit={handleSubmit(onSubmit)}>
// //                 <TextField
// //                 variant="outlined"
// //                 label="Name"
// //                 type="name"
// //                 fullWidth
// //                 margin="normal"
// //                 {...register("name", { required: true })}
// //                 error={!!errors.name}
// //                 helperText={errors.name ? "This field is required" : ""}
// //                 InputProps={{
// //                   sx: {
// //                     borderRadius: 1.5,
// //                     "&.Mui-focused": {
// //                       "& .MuiOutlinedInput-notchedOutline": {
// //                         borderColor: "#722F37",
// //                       },
// //                     },
// //                   },
// //                 }}
// //                 InputLabelProps={{
// //                   sx: {
// //                     "&.Mui-focused": {
// //                       color: "#722F37",
// //                     },
// //                   },
// //                 }}
// //               />
// //               <TextField
// //                 variant="outlined"
// //                 label="Email"
// //                 type="email"
// //                 fullWidth
// //                 margin="normal"
// //                 {...register("email", { required: true })}
// //                 error={!!errors.email}
// //                 helperText={errors.email ? "This field is required" : ""}
// //                 InputProps={{
// //                   sx: {
// //                     borderRadius: 1.5,
// //                     "&.Mui-focused": {
// //                       "& .MuiOutlinedInput-notchedOutline": {
// //                         borderColor: "#722F37",
// //                       },
// //                     },
// //                   },
// //                 }}
// //                 InputLabelProps={{
// //                   sx: {
// //                     "&.Mui-focused": {
// //                       color: "#722F37",
// //                     },
// //                   },
// //                 }}
// //               />
// //               <TextField
// //                 variant="outlined"
// //                 label="Password"
// //                 type="password"
// //                 fullWidth
// //                 margin="normal"
// //                 {...register("password", { required: true })}
// //                 error={!!errors.password}
// //                 helperText={errors.password ? "This field is required" : ""}
// //                 InputProps={{
// //                   sx: {
// //                     borderRadius: 1.5,
// //                     "&.Mui-focused": {
// //                       "& .MuiOutlinedInput-notchedOutline": {
// //                         borderColor: "#722F37",
// //                       },
// //                     },
// //                   },
// //                 }}
// //                 InputLabelProps={{
// //                   sx: {
// //                     "&.Mui-focused": {
// //                       color: "#722F37",
// //                     },
// //                   },
// //                 }}
// //               />
// //               <p>
// //                 Already have an account?{" "}
// //                 <a href="/signin" style={{ color: 'red', cursor: 'pointer' }}>Sign In</a>
// //               </p>

// //               <Button
// //                 type="submit"
// //                 variant="contained"
// //                 fullWidth
// //                 sx={{
// //                   mt: 3,
// //                   mb: 1,
// //                   backgroundColor: "#722F37",
// //                   color: "white",
// //                   borderRadius: 1.5,
// //                   padding: "12px 0",
// //                   textTransform: "none",
// //                   fontWeight: "bold",
// //                   fontSize: "1rem",
// //                   "&:hover": {
// //                     backgroundColor: "#cc0000",
// //                   },
// //                 }}
// //               >
// //                 Register
// //               </Button>
// //             </form>
// //           </Box>
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   )
// // }

//     return (
//         <>
//         {/* <Header />
//          <Dialog open={close&&!LoggedIn} onClose={() => setClose(false)}>
//             <DialogTitle>{"SignUp"}</DialogTitle>
//             <DialogContent>
//                 <Box sx={{ width: 300, padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <TextField
//                             variant="outlined"
//                             label="Email"
//                             type="text"
//                             fullWidth
//                             margin="normal"
//                             {...register("email", { required: true })}
//                             error={!!errors.email}
//                             helperText={errors.email ? "This field is required" : ""}
//                         />
//                         <TextField
//                             variant="outlined"
//                             label="Password"
//                             type="password"
//                             fullWidth
//                             margin="normal"
//                             {...register("password", { required: true })}
//                             error={!!errors.password}
//                             helperText={errors.password ? "This field is required" : ""}
//                         />

//                         <TextField
//                             variant="outlined"
//                             label="Name"
//                             type="name"
//                             fullWidth
//                             margin="normal"
//                             {...register("username", { required: true })}
//                             error={!!errors.name}
//                             helperText={errors.name ? "This field is required" : ""}
//                         />
//                         <TextField
//                             variant="outlined"
//                             label="Phone"
//                             type="phone"
//                             fullWidth
//                             margin="normal"
//                             {...register("phone", { required: true })}
//                             error={!!errors.phone}
//                             helperText={errors.phone ? "This field is required" : ""}
//                         />
//                         <TextField
//                             variant="outlined"
//                             label="Address"
//                             type="text"
//                             fullWidth
//                             margin="normal"
//                             {...register("address", { required: true })}
//                             error={!!errors.address}
//                             helperText={errors.address ? "This field is required" : ""}
//                         />
//                         <p>
//                 Already have an account?{" "}
//                 <a href="/signin" style={{ color: 'red', cursor: 'pointer' }}>Sign In</a>
//               </p>
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             sx={{ mt: 2 }}
//                         >
//                             Register
//                         </Button>
//                     </form>
//                 </Box>
//             </DialogContent>
//         </Dialog> */}
//         <Header />
// <Dialog
//   open={close && !LoggedIn}
//   onClose={() => setClose(false)}
//   PaperProps={{
//     sx: {
//       borderRadius: 2,
//       boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
//       overflow: "hidden",
//     },
//   }}
// >
//   <DialogTitle
//     sx={{
//       backgroundColor: "#722F37",
//       color: "white",
//       fontWeight: "bold",
//       padding: "16px 24px",
//     }}
//   >
//     {"Sign Up"}
//   </DialogTitle>
//   <DialogContent sx={{ padding: 0 }}>
//     <Box
//       sx={{
//         width: 350,
//         padding: 3,
//         backgroundColor: "white",
//       }}
//     >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           variant="outlined"
//           label="Email"
//           type="text"
//           fullWidth
//           margin="normal"
//           {...register("email", { required: true })}
//           error={!!errors.email}
//           helperText={errors.email ? "This field is required" : ""}
//           InputProps={{
//             sx: {
//               borderRadius: 1.5,
//               "&.Mui-focused": {
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#722F37",
//                 },
//               },
//             },
//           }}
//           InputLabelProps={{
//             sx: {
//               "&.Mui-focused": {
//                 color: "#722F37",
//               },
//             },
//           }}
//         />
//         <TextField
//           variant="outlined"
//           label="Password"
//           type="password"
//           fullWidth
//           margin="normal"
//           {...register("password", { required: true })}
//           error={!!errors.password}
//           helperText={errors.password ? "This field is required" : ""}
//           InputProps={{
//             sx: {
//               borderRadius: 1.5,
//               "&.Mui-focused": {
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#722F37",
//                 },
//               },
//             },
//           }}
//           InputLabelProps={{
//             sx: {
//               "&.Mui-focused": {
//                 color: "#722F37",
//               },
//             },
//           }}
//         />
//         <TextField
//           variant="outlined"
//           label="Name"
//           type="name"
//           fullWidth
//           margin="normal"
//           {...register("username", { required: true })}
//           error={!!errors.name}
//           helperText={errors.name ? "This field is required" : ""}
//           InputProps={{
//             sx: {
//               borderRadius: 1.5,
//               "&.Mui-focused": {
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#722F37",
//                 },
//               },
//             },
//           }}
//           InputLabelProps={{
//             sx: {
//               "&.Mui-focused": {
//                 color: "#722F37",
//               },
//             },
//           }}
//         />
//         {/* <TextField
//           variant="outlined"
//           label="Phone"
//           type="phone"
//           fullWidth
//           margin="normal"
//           {...register("phone", { required: true })}
//           error={!!errors.phone}
//           helperText={errors.phone ? "This field is required" : ""}
//           InputProps={{
//             sx: {
//               borderRadius: 1.5,
//               "&.Mui-focused": {
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#722F37",
//                 },
//               },
//             },
//           }}
//           InputLabelProps={{
//             sx: {
//               "&.Mui-focused": {
//                 color: "#722F37",
//               },
//             },
//           }}
//         /> */}
//         {/* <TextField
//           variant="outlined"
//           label="Address"
//           type="text"
//           fullWidth
//           margin="normal"
//           {...register("address", { required: true })}
//           error={!!errors.address}
//           helperText={errors.address ? "This field is required" : ""}
//           InputProps={{
//             sx: {
//               borderRadius: 1.5,
//               "&.Mui-focused": {
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#722F37",
//                 },
//               },
//             },
//           }}
//           InputLabelProps={{
//             sx: {
//               "&.Mui-focused": {
//                 color: "#722F37",
//               },
//             },
//           }} */}
//         {/* /> */}
//         <p>
//           Already have an account?{" "}
//           <a href="/signin" style={{ color: "#722F37", cursor: "pointer" }}>Sign In</a>
//         </p>
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{
//             mt: 3,
//             mb: 1,
//             backgroundColor: "#722F37",
//             color: "white",
//             borderRadius: 1.5,
//             padding: "12px 0",
//             textTransform: "none",
//             fontWeight: "bold",
//             fontSize: "1rem",
//             "&:hover": {
//               backgroundColor: "#722F37",
//             },
//           }}
//         >
//           Register
//         </Button>
//       </form>
//     </Box>
//   </DialogContent>
// </Dialog>

//       </>


//     );
// }

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Box, TextField, Button, Dialog, DialogTitle, DialogContent, CircularProgress
} from "@mui/material";
import { IsLoggedIn, userContext } from "../../App";
import { setError } from "../../store/ErrorSlice";
import { useDispatch } from "react-redux";
import { User } from "../../types/user";
import store, { AppDispatch } from "../../store/store";
import { addUser } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import Header from "../header";

export default () => {
  const { userDispatch } = useContext(userContext);
  const { LoggedIn, setLoggedIn } = useContext(IsLoggedIn);
  const [close, setClose] = useState(true);
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!close) navigate("/");
  }, [close, navigate]);

  const onSubmit = async (userData: any) => {
    try {
      setLoading(true); // ✅ Start loading
      const postData: Partial<User> = {
        email: userData.email,
        passwordHash: userData.password,
        username: userData.username,
        phone: userData.phone,
        address: userData.address
      };

      const response = await store.dispatch(addUser(postData)).unwrap();

      if (!response.user || response.user.id === 0) {
        console.error("Registration failed: Invalid user ID");
        return;
      }

      userDispatch({ type: "LOGIN", data: response.user });
      setLoggedIn(true);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        switch (status) {
          case 400: dispatch(setError("Bad Request")); break;
          case 401: dispatch(setError("Unauthorized")); break;
          case 403: dispatch(setError("Forbidden")); break;
          default: dispatch(setError("Unexpected error")); break;
        }
      } else {
        dispatch(setError("Unexpected error occurred."));
      }
    } finally {
      setLoading(false); // ✅ Stop loading
      setClose(false);
    }
  };

  return (
    <>
      <Header />
      <Dialog
        open={close && !LoggedIn}
        onClose={() => setClose(false)}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#722F37", color: "white", fontWeight: "bold", padding: "16px 24px" }}>
          {"Sign Up"}
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Box sx={{ width: 350, padding: 3, backgroundColor: "white" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                variant="outlined"
                label="Email"
                type="text"
                fullWidth
                margin="normal"
                {...register("email", { required: true })}
                error={!!errors.email}
                helperText={errors.email ? "This field is required" : ""}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors.password ? "This field is required" : ""}
              />
              <TextField
                variant="outlined"
                label="Name"
                type="name"
                fullWidth
                margin="normal"
                {...register("username", { required: true })}
                error={!!errors.username}
                helperText={errors.username ? "This field is required" : ""}
              />
              <p>Already have an account?{" "}
                <a href="/signin" style={{ color: "#722F37", cursor: "pointer" }}>Sign In</a>
              </p>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  mt: 3,
                  mb: 1,
                  backgroundColor: "#722F37",
                  color: "white",
                  borderRadius: 1.5,
                  padding: "12px 0",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#722F37" },
                  "&.Mui-disabled": {
                    backgroundColor: "#722F37",
                    color: "white",
                  },
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Register"}
              </Button>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
