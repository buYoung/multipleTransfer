export const enum PopupType {
    ADDFILE = 'ADD_FILE',
}

export interface PopupState {
    popupList: PopupType[];
}

export interface PopupAction {
    openPopup: (popup: PopupType) => void;
    closePopup: (popup: PopupType) => void;
    closeAllPopup: () => void;
}

export interface PopupStore extends PopupState, PopupAction {}
