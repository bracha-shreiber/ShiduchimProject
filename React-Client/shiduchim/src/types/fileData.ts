export type FileData = {
    id: number;
    fileName: string;
    userId: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    address: string;
    age: number;
    height: number;
    createdAt: string;
    updatedAt?: string;
    occupation?: string;
    placeOfStudy?: string; 
    downloadUrl?: string; 
}

export interface ShareFilePayload {
  resumeFileId: number;
  targetEmail?: string;  // אופציונלי, כי כש`shareAll=true` אין צורך
  shareAll: boolean;
  userId?: number;
}

export type SharedFileData = {
  shareID: number;
  resumefileID: number;
  sharedWithUserID: number;
  sharedByUserID: number;
  sharedAt: string; // Date as ISO string
  resumefile: {
    id: number;
    fileName: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    address: string;
    age: number;
    height: number;
    occupation: string;
    placeOfStudy: string;
    createdAt: string;
  };
};
