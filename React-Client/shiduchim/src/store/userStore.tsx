// // import axios from "axios";
// // import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import { User, UserLogin } from "../types/user";
// // import { url } from "../App";

// // export const loginUser = createAsyncThunk('Auth/login', async (userData:UserLogin, thunkAPI) => {
// //     try {
// //         console.log(userData);
// //         const response = await axios.post<{user:User,token:string}>(url+"/Auth/login",userData)
// //         const { user, token } = response.data;
// //         sessionStorage.setItem('token', token); 
// //         sessionStorage.setItem('userId',user.id.toString()); 
// //         return user;
// //     }
// //     catch (error) {
// //         return thunkAPI.rejectWithValue((error as Error).message);
// //     }
// // })

// // export const addUser = createAsyncThunk('Auth/register', async (userData:Partial<User>, thunkAPI) => {
// //     try {
// //         console.log(userData);
// //         const response = await axios.post<{user:User,token:string}>(url+"/Auth/register",userData)
// //         //     {
// //         //         username:userData.username,
// //         //         email:userData.email,
// //         //         password:userData.passwordHash,
// //         //         address:userData.address,
// //         //         phone:userData.phone
// //         //     }
// //         // )
// //         const { user, token } = response.data;
// //         sessionStorage.setItem('token', token); 
// //         sessionStorage.setItem('userId',user.id.toString()); 
// //         return user;
// //     }
// //     catch (error) {
// //         return thunkAPI.rejectWithValue((error as Error).message);
// //     }
// // })
// // const userSlice = createSlice({
// //     name: 'user',
// //     initialState: {
// //         user: {} as User, loading: true
// //     },
// //     reducers: {},
// //     extraReducers: (builder) => {
// //         builder
// //         .addCase(loginUser.fulfilled, (state, action) => {
// //             state.user = action.payload as User;
// //             state.loading = false;
// //           //  state.msg = ''; // נקה את המסר במקרה של הצלחה
// //         })
// //         .addCase(loginUser.rejected, (state, action) => {
// //             state.loading = false;
// //            // state.msg = action.payload as string || "Login failed"; // עדכן את המסר במקרה של שגיאה
// //         })
// //         .addCase(loginUser.pending, (state) => {
// //             state.loading = true;
// //         })
// //         .addCase(addUser.fulfilled, (state, action) => {
// //             state.user = action.payload as User;
// //             state.loading = false;
           
// //         })
// //         .addCase(addUser.rejected, (state, action) => {
// //             state.loading = false;
// //            // state.msg = action.payload as string || "Registration failed"; // עדכן את המסר במקרה של שגיאה
// //         })
// //         .addCase(addUser.pending, (state) => {
// //             state.loading = true;
// //         });
        
            
// //       }
// // })
// // export default userSlice.reducer;
// import axios from "axios";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { User, UserLogin } from "../types/user";
// import { url } from "../App";

// export const loginUser = createAsyncThunk('Auth/login', async (userData: UserLogin, thunkAPI) => {
//     try {
//         const response = await axios.post<{ user: User, token: string }>(`${url}/Auth/login`, userData);
//         const { user, token } = response.data;
//         sessionStorage.setItem('token', token);
//         sessionStorage.setItem('userId', user.id.toString());
//         return user;
//     } catch (error: any) {
//         let message = "An unknown error occurred";
    
//         if (error.response && error.response.data) {
//             message = error.response.data.message || JSON.stringify(error.response.data);
//         } else if (error.message) {
//             message = error.message;
//         }
    
//         return thunkAPI.rejectWithValue(message);
//     }
    
// });

// export const addUser = createAsyncThunk('Auth/register', async (userData: Partial<User>, thunkAPI) => {
//     try {
//         const response = await axios.post<{ user: User, token: string }>(`${url}/Auth/register`, userData);
//         const { user, token } = response.data;
//         sessionStorage.setItem('token', token);
//         sessionStorage.setItem('userId', user.id.toString());
//         return user;
//     } catch (error: any) {
//         let message = "An unknown error occurred";
    
//         if (error.response && error.response.data) {
//             message = error.response.data.message || JSON.stringify(error.response.data);
//         } else if (error.message) {
//             message = error.message;
//         }
    
//         return thunkAPI.rejectWithValue(message);
//     }
    
// });

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         user: {} as User,
//         loading: false,
//         error: null as string | null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.user = action.payload;
//                 state.loading = false;
//                 state.error = null;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             })
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(addUser.fulfilled, (state, action) => {
//                 state.user = action.payload;
//                 state.loading = false;
//                 state.error = null;
//             })
//             .addCase(addUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             })
//             .addCase(addUser.pending, (state) => {
//                 state.loading = true;
//             });
//     }
// });

// export default userSlice.reducer;
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserLogin } from "../types/user";
import { url } from "../App";

export const loginUser = createAsyncThunk('Auth/login', async (userData: UserLogin, thunkAPI) => {
    try {
        
        const response = await axios.post<{ user: User, token: string }>(`${url}/Auth/login`, userData);
        const { user, token } = response.data;
        console.log("LOGIN RESPONSE:", response);
        console.log("url:", url);
        console.log("userData:", userData);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userId', user.id.toString());
        return user;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message); // Changed to error.message
    }
});

// export const addUser = createAsyncThunk('Auth/register', async (userData: Partial<User>, thunkAPI) => {
//     try {
//         const response = await axios.post<{ user: User, token: string }>(`${url}/Auth/register`, userData);
//         const { user, token } = response.data;
//         sessionStorage.setItem('token', token);
//         sessionStorage.setItem('userId', user.id.toString());
//         return user;
//     } catch (error: any) {
//         return thunkAPI.rejectWithValue(error.response?.data?.message || error.message); // Added safer error access
//     }
// });
export const addUser = createAsyncThunk('Auth/register', async (userData: Partial<User>, thunkAPI) => {
    try {
        const response = await axios.post<{ user: User, token: string }>(`${url}/Auth/register`, userData);
        console.log("REGISTER RESPONSE:", response);

        const { user, token } = response.data;

        if (!user || !user.id) {
            return thunkAPI.rejectWithValue("Invalid response: missing user or user.id");
        }

        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userId', user.id.toString());

        return {user, token};
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
    }
});


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {} as User,
        token: null as string | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.loading = false;
                state.error = null;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addUser.pending, (state) => {
                state.loading = true;
            });
    }
});

export default userSlice.reducer;