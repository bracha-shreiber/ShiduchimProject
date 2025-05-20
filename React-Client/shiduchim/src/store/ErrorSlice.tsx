import { createSlice } from "@reduxjs/toolkit";

export const ErrorMessage = createSlice({
    name: 'ErrorMessage',
    initialState: { error: '' },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        }
    },
})
export const { setError } = ErrorMessage.actions;
export default ErrorMessage.reducer;