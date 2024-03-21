export interface FileData {
    fileName: string;
    path: string;
    size: number;
    sizeHumanReadable: string;
    permission: Permission[];
    permissionHumanReadable: string;
}

export const enum Permission {
    Read = 'READ',
    Write = 'WRITE',
    Execute = 'EXECUTE'
}

export interface FileState {
    fileList: FileData[];
    selectedFileList: FileData[];
}

export interface FileAction {
    setFileList: (fileList: FileData[]) => void;
    selectFile: (file: FileData) => void;
    selectFileList: (fileList: FileData[]) => void;
    toggleAll: (checked?: boolean) => void;
    removeFile: (file: FileData) => void;
    updateFile: (file: FileData) => void;
}

export interface FileStore extends FileState, FileAction {}

