import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { shareFile } from '../../store/filesStore';

interface SharingComponentProps {
  resumeFileId: number;
}

const SharingComponent: React.FC<SharingComponentProps> = ({ resumeFileId }) => {
  const [targetEmail, setTargetEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.files.error);

  const handleShare = async () => {
    if (!targetEmail) {
      setMessage('Please enter an email.');
      return;
    }

    const result = await dispatch(shareFile({ resumeFileId, targetEmail }));

    if (shareFile.fulfilled.match(result)) {
      setMessage(result.payload); // success message from backend
      setTargetEmail('');
    } else {
      setMessage('Failed to share file.');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Share File</h2>
      <input
        type="email"
        className="border p-2 w-full mb-2 rounded"
        placeholder="Enter email"
        value={targetEmail}
        onChange={(e) => setTargetEmail(e.target.value)}
      />
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Share
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
      {error && <p className="mt-2 text-red-600 text-sm">Error: {error}</p>}
    </div>
  );
};

export default SharingComponent;
