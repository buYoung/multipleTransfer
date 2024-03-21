import { usePopupStore } from "@/features/popup/popupStore.ts";
import { Fragment } from "react";
import { useShallow } from "zustand/react/shallow";

export function PopupLayer() {
    const [popupList] = usePopupStore(useShallow((state) => [state.popupList]));
    const [] = usePopupStore(useShallow((state) => [state.openPopup, state.closePopup, state.closeAllPopup]));

    return (
        <Fragment key="popup">
            {
                popupList.map((popup) => {
                    return (
                        <div key={popup}>
                            {popup}
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
