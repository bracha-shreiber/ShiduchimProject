// // // import { useContext } from "react";
// // // import { useForm } from "react-hook-form";
// // // import axios from "axios";
// // // import { Box, TextField, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
// // // import { IsLoggedIn, url, userContext } from "../../App";
// // // import { setError } from "../../store/ErrorSlice";
// // // import { useDispatch } from "react-redux";
// // // import { User, UserLogin } from "../../types/user";
// // // import store, { AppDispatch } from "../../store/store";
// // // import { loginUser } from "../../store/userStore";

// // // export default ({ setClose }: {setClose: Function }) => {
// // //     const { user, userDispatch } = useContext(userContext);
// // //     const { setLoggedIn } = useContext(IsLoggedIn);
// // //     const { register, handleSubmit, formState: { errors } } = useForm();
// // //     const dispatch = useDispatch<AppDispatch>();

// // //     const onSubmit = async (userData: any) => {
// // //         try {

// // //             // const str = url + '/Auth/' + (state === true ? "login" : "register");

// // //             // Create the data object based on the state
// // //             const postData: UserLogin = {
// // //                 email: userData.email,
// // //                 password: userData.password, // Ensure this is the correct property name
// // //             };

// // //             // Include additional fields only if state is false (for registration)
// // //             // if (!state) {
// // //             //     postData.username = userData.username;
// // //             //     postData.phone = userData.phone;
// // //             //     postData.address = userData.address;
// // //             // }

// // //             const res = await store.dispatch(loginUser(postData))
// // //             console.log("res.payload:",res.payload);

// // //             if (res.payload) {
// // //                 userDispatch({
// // //                     type: "LOGIN",
// // //                     data: res.payload as User
// // //                 });
// // //                 setLoggedIn(true);
// // //             } 

// // //         } catch (error) {
// // //             if (axios.isAxiosError(error)) {
// // //                 const status = error.response?.status;
// // //                 switch (status) {
// // //                     case 400:
// // //                         dispatch(setError("Bad Request: The server could not understand the request due to invalid syntax."));
// // //                         break;
// // //                     case 401:
// // //                         dispatch(setError("Unauthorized: Access is denied due to invalid credentials."));
// // //                         break;
// // //                     case 403:
// // //                         dispatch(setError("Forbidden: You do not have permission to access this resource."));
// // //                         break;
// // //                     default:
// // //                         dispatch(setError("An unexpected error occurred."));
// // //                         break;
// // //                 }
// // //             } else {
// // //                 dispatch(setError("An unexpected error occurred."));
// // //             }
// // //         } finally {
// // //             setClose(false);
// // //             console.log("i closed");
// // //         }
// // //     };

// // //     return (
// // //         <Dialog open={true} onClose={() => setClose(false)}>
// // //             <DialogTitle>{"SignIn"}</DialogTitle>
// // //             <DialogContent>
// // //                 <Box sx={{ width: 300, padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
// // //                     <form onSubmit={handleSubmit(onSubmit)}>
// // //                         <TextField
// // //                             variant="outlined"
// // //                             label="Email"
// // //                             type="text"
// // //                             fullWidth
// // //                             margin="normal"
// // //                             {...register("email", { required: true })}
// // //                             error={!!errors.email}
// // //                             helperText={errors.email ? "This field is required" : ""}
// // //                         />
// // //                         <TextField
// // //                             variant="outlined"
// // //                             label="Password"
// // //                             type="password"
// // //                             fullWidth
// // //                             margin="normal"
// // //                             {...register("password", { required: true })}
// // //                             error={!!errors.password}
// // //                             helperText={errors.password ? "This field is required" : ""}
// // //                         />
// // //                         {/* {!state &&
// // //                             <TextField
// // //                                 variant="outlined"
// // //                                 label="Name"
// // //                                 type="name"
// // //                                 fullWidth
// // //                                 margin="normal"
// // //                                 {...register("username", { required: true })}
// // //                                 error={!!errors.name}
// // //                                 helperText={errors.name ? "This field is required" : ""}
// // //                             />} */}
// // //                         {/* {!state &&
// // //                             <TextField
// // //                                 variant="outlined"
// // //                                 label="Phone"
// // //                                 type="phone"
// // //                                 fullWidth
// // //                                 margin="normal"
// // //                                 {...register("phone", { required: true })}
// // //                                 error={!!errors.phone}
// // //                                 helperText={errors.phone ? "This field is required" : ""}
// // //                             />}
// // //                         {!state &&
// // //                             <TextField
// // //                                 variant="outlined"
// // //                                 label="Address"
// // //                                 type="text"
// // //                                 fullWidth
// // //                                 margin="normal"
// // //                                 {...register("address", { required: true })}
// // //                                 error={!!errors.address}
// // //                                 helperText={errors.address ? "This field is required" : ""}
// // //                             />} */}

// // //                         <Button
// // //                             type="submit"
// // //                             variant="contained"
// // //                             color="primary"
// // //                             fullWidth
// // //                             sx={{ mt: 2 }}
// // //                         >
// // //                             Login
// // //                         </Button>
// // //                     </form>
// // //                 </Box>
// // //             </DialogContent>
// // //         </Dialog>
// // //     );
// // // }

// // import { useContext } from "react";
// // import { useForm, SubmitHandler } from "react-hook-form"; // Add SubmitHandler
// // import axios from "axios";
// // import { Box, TextField, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
// // import { IsLoggedIn, url, userContext } from "../../App";
// // import { setError } from "../../store/ErrorSlice";
// // import { useDispatch } from "react-redux";
// // import { UserLogin } from "../../types/user";
// // import { loginUser } from "../../store/userStore";
// // import { AppDispatch } from "../../store/store";

// // export default ({ setClose }: {setClose: Function }) => {
// //     const { userDispatch } = useContext(userContext);
// //     const { setLoggedIn } = useContext(IsLoggedIn);
// //     const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>(); // Use UserLogin type here
// //     const dispatch = useDispatch<AppDispatch>();

// //     // Correctly type the onSubmit handler
// //     const onSubmit: SubmitHandler<UserLogin> = async (userData) => {
// //         try {
// //             // Send user credentials to the login API
// //             const res = await dispatch(loginUser(userData));

// //             // Check if login is successful
// //             if (res.payload) {
// //                 userDispatch({
// //                     type: "LOGIN",
// //                     data: res.payload,
// //                 });
// //                 setLoggedIn(true);
// //             }
// //         } catch (error) {
// //             if (axios.isAxiosError(error)) {
// //                 const status = error.response?.status;
// //                 switch (status) {
// //                     case 400:
// //                         dispatch(setError("Bad Request: Invalid syntax."));
// //                         break;
// //                     case 401:
// //                         dispatch(setError("Unauthorized: Invalid credentials."));
// //                         break;
// //                     case 403:
// //                         dispatch(setError("Forbidden: Permission denied."));
// //                         break;
// //                     default:
// //                         dispatch(setError("Unexpected error occurred."));
// //                         break;
// //                 }
// //             } else {
// //                 dispatch(setError("Unexpected error occurred."));
// //             }
// //         } finally {
// //             setClose(false);
// //         }
// //     };

// //     return (
// //         <Dialog open={true} onClose={() => setClose(false)}>
// //             <DialogTitle>{"Sign In"}</DialogTitle>
// //             <DialogContent>
// //                 <Box sx={{ width: 300, padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
// //                     <form onSubmit={handleSubmit(onSubmit)}>
// //                         <TextField
// //                             variant="outlined"
// //                             label="Email"
// //                             type="email"
// //                             fullWidth
// //                             margin="normal"
// //                             {...register("email", { required: true })}
// //                             error={!!errors.email}
// //                             helperText={errors.email ? "This field is required" : ""}
// //                         />
// //                         <TextField
// //                             variant="outlined"
// //                             label="Password"
// //                             type="password"
// //                             fullWidth
// //                             margin="normal"
// //                             {...register("password", { required: true })}
// //                             error={!!errors.password}
// //                             helperText={errors.password ? "This field is required" : ""}
// //                         />
// //                         <Button
// //                             type="submit"
// //                             variant="contained"
// //                             color="primary"
// //                             fullWidth
// //                             sx={{ mt: 2 }}
// //                         >
// //                             Login
// //                         </Button>
// //                     </form>
// //                 </Box>
// //             </DialogContent>
// //         </Dialog>
// //     );
// // };
// import { useContext } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from "axios";
// import {
//     Box, TextField, Button, Dialog, DialogTitle, DialogContent
// } from "@mui/material";
// import { IsLoggedIn, url, userContext } from "../../App";
// import { setError } from "../../store/ErrorSlice";
// import { useDispatch } from "react-redux";
// import { UserLogin } from "../../types/user";
// import { loginUser } from "../../store/userStore";
// import { AppDispatch } from "../../store/store";

// export default ({ setClose }: { setClose: Function }) => {
//     const { userDispatch } = useContext(userContext);
//     const { setLoggedIn } = useContext(IsLoggedIn);
//     const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>();
//     const dispatch = useDispatch<AppDispatch>();

//     const onSubmit: SubmitHandler<UserLogin> = async (userData) => {
//         try {
//             const res = await dispatch(loginUser(userData));
//             console.log("Login response payload:", res.payload);

//             if (res.payload && typeof res.payload === 'object' && 'id' in res.payload) {
//                 const user = res.payload as any;

//                 // 🔐 Save token and userId locally (double-check)
//                 if (user.id) {
//                     sessionStorage.setItem('userId', user.id.toString());
//                     if (user.token) {
//                         sessionStorage.setItem('token', user.token);
//                     }
//                     console.log("Saved userId to sessionStorage:", user.id);
//                 } else {
//                     console.warn("User ID not found in payload.");
//                 }

//                 userDispatch({
//                     type: "LOGIN",
//                     data: user,
//                 });
//                 setLoggedIn(true);
//             } else {
//                 dispatch(setError("Login failed: Invalid response from server."));
//             }
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 const status = error.response?.status;
//                 switch (status) {
//                     case 400:
//                         dispatch(setError("Bad Request: Invalid syntax."));
//                         break;
//                     case 401:
//                         dispatch(setError("Unauthorized: Invalid credentials."));
//                         break;
//                     case 403:
//                         dispatch(setError("Forbidden: Permission denied."));
//                         break;
//                     default:
//                         dispatch(setError("Unexpected error occurred."));
//                         break;
//                 }
//             } else {
//                 dispatch(setError("Unexpected error occurred."));
//             }
//         } finally {
//             setClose(false);
//         }
//     };

//     return (
//         <Dialog open={true} onClose={() => setClose(false)}>
//             <DialogTitle>{"Sign In"}</DialogTitle>
//             <DialogContent>
//                 <Box sx={{ width: 300, padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <TextField
//                             variant="outlined"
//                             label="Email"
//                             type="email"
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
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             sx={{ mt: 2 }}
//                         >
//                             Login
//                         </Button>
//                     </form>
//                 </Box>
//             </DialogContent>
//         </Dialog>
//     );
// };
"use client"
import { useContext, useEffect, useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import axios from "axios"
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent } from "@mui/material"
import { IsLoggedIn, userContext } from "../../App"
import { setError } from "../../store/ErrorSlice"
import { useDispatch } from "react-redux"
import type { UserLogin } from "../../types/user"
import { loginUser } from "../../store/userStore"
import type { AppDispatch } from "../../store/store"
import { useNavigate } from "react-router"
import Header from "../header"

export default () => {
  const [close, setClose] = useState<boolean>(true)
  const { userDispatch } = useContext(userContext)
  const navigate = useNavigate();
  const { LoggedIn, setLoggedIn } = useContext(IsLoggedIn)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (!close) {
      navigate("/");
    }
  }, [close, navigate]);

  const onSubmit: SubmitHandler<UserLogin> = async (userData) => {
    try {
      const res = await dispatch(loginUser(userData))
      console.log("Login response payload:", res.payload)

      if (res.payload && typeof res.payload === "object" && "id" in res.payload) {
        const user = res.payload as any

        // 🔐 Save token and userId locally (double-check)
        if (user.id) {
          sessionStorage.setItem("userId", user.id.toString())
          if (user.token) {
            sessionStorage.setItem("token", user.token)
          }
          console.log("Saved userId to sessionStorage:", user.id)
        } else {
          console.warn("User ID not found in payload.")
        }

        userDispatch({
          type: "LOGIN",
          data: user,
        })
        setLoggedIn(true)
      } else {
        dispatch(setError("Login failed: Invalid response from server."))
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status
        switch (status) {
          case 400:
            dispatch(setError("Bad Request: Invalid syntax."))
            break
          case 401:
            dispatch(setError("Unauthorized: Invalid credentials."))
            break
          case 403:
            dispatch(setError("Forbidden: Permission denied."))
            break
          default:
            dispatch(setError("Unexpected error occurred."))
            break
        }
      } else {
        dispatch(setError("Unexpected error occurred."))
      }

    } finally {
      setClose(false)
    }
  }

  return (
    <>
      <Header />
      <Dialog
        open={!LoggedIn && close}
        onClose={() => setClose(false)}
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
          {"Sign In"}
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Box
            sx={{
              width: 350,
              padding: 3,
              backgroundColor: "white",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                {...register("email", { required: true })}
                error={!!errors.email}
                helperText={errors.email ? "This field is required" : ""}
                InputProps={{
                  sx: {
                    borderRadius: 1.5,
                    "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#722F37",
                      },
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
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors.password ? "This field is required" : ""}
                InputProps={{
                  sx: {
                    borderRadius: 1.5,
                    "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#722F37",
                      },
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
              <p>
                Don't have an account?{" "}
                <a href="/signup" style={{ color: 'red', cursor: 'pointer' }}>Sign Up</a>
              </p>

              <Button
                type="submit"
                variant="contained"
                fullWidth
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
                  "&:hover": {
                    backgroundColor: "#cc0000",
                  },
                }}
              >
                Login
              </Button>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}
