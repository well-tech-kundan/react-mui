
import { useCallback, useState } from "react";

/**
 * This function enable a dialog box open close functionality
 * @param {*} Component 
 * @returns 
 */
function useDialogModal(Component) {
    const [open, setOpen] = useState(false);

    const openDialog = useCallback(() => {
        setOpen(true);
    }, []);

    const onClose = () => { setOpen(false) };

    const DialogComponent = useCallback(
        ({ ...props }) => {
            if (!open) return null;

            if (Component) {
                return (
                    <Component open={open} onClose={onClose} {...props} />
                );
            }
        },
        [open, Component]
    );

    return [DialogComponent, openDialog];
}

export default useDialogModal;