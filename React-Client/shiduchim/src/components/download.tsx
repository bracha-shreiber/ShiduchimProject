import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { downloadFile } from '../store/filesStore';

const DownloadFile: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
//   const error = useSelector((state: RootState) => state.files.error);

  const handleDownload = () => {
    if (!fileName) {
      alert('File name is required.');
      return;
    }
    dispatch(downloadFile(fileName));
  };

  return (
    <div>
      <h2>Download File</h2>
      <input
        type="text"
        placeholder="Enter file name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
};

export default DownloadFile;