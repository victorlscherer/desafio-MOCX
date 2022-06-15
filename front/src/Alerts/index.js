import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import { CloseIcon } from "@mui/icons";

const Alerts = ({ type }) => {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}>
            </IconButton>
        </>
    )

    return (
        <div>

        </div>
    )
}

export default Alerts;