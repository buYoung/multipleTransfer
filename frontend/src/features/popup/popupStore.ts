import { create } from "zustand";
import { PopupStore } from "@/features/popup/popupStore.type.ts";

export const usePopupStore = create<PopupStore>((set,get) => ({
    popupList: [],
    openPopup: (popup) => set({popupList: [...get().popupList, popup]}),
    closePopup: (popup) => set({popupList: get().popupList.filter((p) => p !== popup)}),
    closeAllPopup: () => set({popupList: []})
}));
