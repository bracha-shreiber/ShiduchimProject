
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../App";
import { FileData, SharedFileData, ShareFilePayload } from "../types/fileData";


export const uploadResumeFile = createAsyncThunk<
  void,
  File,
  { rejectValue: string }
>('files/uploadResumeFile', async (file, thunkAPI) => {
  try {
    const userId = sessionStorage.getItem('userId')
    if (!userId) throw new Error('Missing userId in sessionStorage')

    // שלב 1: קבלת כתובת זמנית (Presigned URL)
    const res = await axios.get(`${url}/upload/presigned-url`, {
      params: { fileName: file.name },
    })

    const presignedUrl = res.data.url

    // שלב 2: העלאה ל-S3
    await axios.put(presignedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    })

    // שלב 3: שמירה במסד הנתונים
    const formData = new FormData()
    formData.append('ResumeFile', file)
    formData.append('UserId', userId)

    await axios.post(`${url}/AIResponse`, formData)

    // רענן את הקבצים מהשרת
    thunkAPI.dispatch(fetchFilesByUserId(+userId))
  } catch (error: any) {
    console.error('Error uploading file:', error)
    return thunkAPI.rejectWithValue(
      error?.response?.data || 'Upload failed'
    )
  }
})


// Download file
export const downloadFile = createAsyncThunk(
  'Download_ShowFiles/download-url',
  async (fileName: string, thunkAPI) => {
    try {
      const response = await axios.get<{ url: string }>(`${url}/Download_ShowFiles/download-url`, {
        params: { fileName },
      });

      const { url: fileUrl } = response.data;

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return fileName;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred while downloading the file.');
    }
  }
);

// Fetch files
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

// Show file preview
export const showFile = createAsyncThunk(
  'Download_ShowFiles/show-file-content',
  async (fileName: string, thunkAPI) => {
    try {
      console.log("Fetching file content for:", fileName);
      
      const response = await axios.get<{ url: string }>(
        `${url}/Download_ShowFiles/show-file-content`,
        { params: { fileName } }
      );

      const { url: fileUrl } = response.data;

      if (!fileUrl) {
        return thunkAPI.rejectWithValue("File URL is missing.");
      }

      return fileUrl;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'An error occurred while getting the file URL.'
      );
    }
  }
);



export const searchFiles = createAsyncThunk(
  'ResumeFile/search',
  async (
    {
      userId,
      filters,
    }: {
      userId: number;
      filters: { field: string; value: string }[];
    },
    thunkAPI
  ) => {
    try {
      // הפוך את המערך לאובייקט Dictionary<string, string>
      const filtersObject: Record<string, string> = {};
      filters.forEach(({ field, value }) => {
        if (field && value) {
          filtersObject[field] = value;
        }
      });

      // בנה את גוף הבקשה כך שיכיל filters רק אם יש
      const requestBody: any = { userId };
      if (Object.keys(filtersObject).length > 0) {
        requestBody.filters = filtersObject;
      }

      const response = await axios.post<FileData[]>(`${url}/ResumeFile/search`, requestBody);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Search failed.'
      );
    }
  }
);



// Share file
// export const shareFile = createAsyncThunk(
//   'Sharing/shareFile',
//   async (
//     { resumeFileId, targetEmail }: { resumeFileId: number; targetEmail: string },
//     thunkAPI
//   ) => {
//     try {
//       const response = await axios.post<string>(`${url}/Sharing/share`, {
//         resumeFileId,
//         targetEmail,
//       });

//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data || 'Failed to share file.'
//       );
//     }
//   }
// );



export const shareFile = createAsyncThunk<
  string, // הודעת הצלחה מהשרת
  ShareFilePayload,
  { rejectValue: string }
>(
  'files/shareFile',
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(`${url}/Sharing/share`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });


      if (!response.ok) {
        const errorText = await response.text();
        return thunkAPI.rejectWithValue(errorText);
      }

      const data = await response.json();
      return data.message;
    } catch {
      return thunkAPI.rejectWithValue('Error sharing file');
    }
  }
);

export const fetchSharedFilesByUserId = createAsyncThunk<
  SharedFileData[], // טיפוס התוצאה (מערך של אובייקטי שיתוף)
  number,    // הפרמטר שנשלח (userId)
  { rejectValue: string }
>('sharing/fetchByUserId', async (userId, thunkAPI) => {
  try {
    const response = await axios.get<SharedFileData[]>(`${url}/Sharing/${userId}`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch shared files');
  }
});

export const deleteSharedFile = createAsyncThunk<
  number,          // נחזיר את ה-ID שנמחק
  number,          // הפרמטר שנשלח - shareId
  { rejectValue: string }
>(
  'sharing/delete-shared-file',
  async (shareId, thunkAPI) => {
    try {
      await axios.delete(`${url}/Sharing/${shareId}`);
      return shareId;  // נחזיר את ה-ID כדי לעדכן את ה-state
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete shared file');
    }
  }
);

export const deleteResumeFile = createAsyncThunk<
  number,          // נחזיר את ה-ID שנמחק
  number,          // הפרמטר שנשלח - resumeFileId
  { rejectValue: string }
>(
  'aiResponse/delete-resume-file',
  async (aiResponseId, thunkAPI) => {
    try {
      await axios.delete(`${url}/AIResponse/${aiResponseId}`);
      return aiResponseId;  // נחזיר את ה-ID כדי לעדכן את ה-state
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to delete AI response');
    }
  }
);

export const updateResumeFile = createAsyncThunk<
  FileData,                            // הערך שמוחזר
  { id: number; updates: Partial<FileData> },  // הפרמטר שנשלח
  { rejectValue: string }
>(
  'aiResponse/update',
  async ({ id, updates }, thunkAPI) => {
    try {
      const response = await axios.patch<FileData>(`${url}/AIResponse/${id}`, updates);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Failed to update AI response'
      );
    }
  }
);

// fetchOpenResumes.ts
export const fetchOpenResumes = createAsyncThunk<
  FileData[],
  void,
  { rejectValue: string }
>('files/fetchOpenResumes', async (_, thunkAPI) => {
  try {
    const response = await axios.get<FileData[]>(`${url}/ResumeFile/OpenResumes`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch open resumes');
  }
});


// Slice
const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: [] as FileData[],
    openResumes: [] as FileData[],
    sharedFiles: [] as SharedFileData[],
    error: null as string | null,
    loading: false, // ✅ added loading
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(uploadResumeFile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(uploadResumeFile.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(uploadResumeFile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      // fetchFilesByUserId
      .addCase(fetchFilesByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilesByUserId.fulfilled, (state, action) => {
        state.files = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFilesByUserId.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // downloadFile
      .addCase(downloadFile.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(downloadFile.fulfilled, (state) => {
        state.error = null;
      })

      // searchFiles
      .addCase(searchFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFiles.fulfilled, (state, action) => {
        state.files = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchFiles.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(fetchSharedFilesByUserId.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchSharedFilesByUserId.fulfilled, (state, action) => {
      state.sharedFiles = action.payload;
      state.loading = false;
    })
    .addCase(fetchSharedFilesByUserId.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
    .addCase(deleteResumeFile.fulfilled, (state, action) => {
  state.files = state.files.filter(file => file.id !== action.payload);
})
.addCase(deleteResumeFile.rejected, (state, action) => {
  state.error = action.payload as string;
})
.addCase(updateResumeFile.fulfilled, (state, action) => {
  const index = state.files.findIndex(file => file.id === action.payload.id);
  if (index !== -1) {
    state.files[index] = action.payload;
  }
})
.addCase(updateResumeFile.rejected, (state, action) => {
  state.error = action.payload as string;
})
 .addCase(fetchOpenResumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOpenResumes.fulfilled, (state, action) => {
        state.openResumes = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOpenResumes.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });


  },
});

export default filesSlice.reducer;
