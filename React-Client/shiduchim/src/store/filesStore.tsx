import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../App";
import { FileData } from "../types/fileData";

export const downloadFile = createAsyncThunk(
  'Download_ShowFiles/download-url',
  async (fileName: string, thunkAPI) => {
    try {
      // Fetch the pre-signed URL from the server
      const response = await axios.get<{ url: string }>(`${url}/Download_ShowFiles/download-url`, {
        params: { fileName },
      });

      const { url: fileUrl } = response.data;

      // Trigger the file download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return fileName; // Return the file name as the result
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred while downloading the file.');
    }
  }
);
export const fetchFilesByUserId = createAsyncThunk(
  'files/fetchFilesByUserId',
  async (userId: number, thunkAPI) => {
    try {
      const response = await axios.get<FileData[]>(`${url}/AIResponse/${userId}/userId`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch files.');
    }
  }
);


const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: [] as FileData[], // You can define a type for AIResponse if you want
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilesByUserId.fulfilled, (state, action) => {
        state.files = action.payload;
        state.error = null;
      })
      .addCase(fetchFilesByUserId.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(downloadFile.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(downloadFile.fulfilled, (state) => {
        state.error = null;
      });
  },
});


export default filesSlice.reducer;