import { create } from 'zustand'
import { FileStore } from "@/features/file/fileStore.type.ts";

export const useFileStore = create<FileStore>((set,get) => ({
    fileList: [],
    selectedFileList: [],
    setFileList: (fileList) => set({fileList}),
    selectFile: (file) => set({selectedFileList: [...get().selectedFileList, file]}),
    selectFileList: (fileList) => set({selectedFileList: fileList}),
    toggleAll: (checked) => {
        if (checked !== undefined) {
            set({selectedFileList: get().fileList})
        } else {
            const fileList = get().fileList;
            const selectedFileList = get().selectedFileList;

            if (selectedFileList.length >= 1) {
                set({selectedFileList: []})
            } else {
                set({selectedFileList: fileList})
            }
        }
    }
}))
