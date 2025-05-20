// import { combineSlices } from "@reduxjs/toolkit";
// import { ErrorMessage } from "./ErrorSlice";
// import userSlice from "./userStore";

// const store = () =>{
//     {
//         reducer: combineSlices(
//             userSlice,
//             ErrorMessage,
//         )
//     }
// }
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;
import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userStore";
import  ErrorMessage  from "./ErrorSlice";
import  filesReducer  from "./filesStore";

const store = configureStore({
    reducer: {
        // user: userSlice,
        error: ErrorMessage,
        files:filesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
