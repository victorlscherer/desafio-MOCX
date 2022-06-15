import { Box, Button, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import Form from '../Form';

const style = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '400px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid #eaeaea',
        boxshadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#545d5e'
    }
}

const ModalComponent = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" sx={style.button} onClick={handleOpen}>+ Cliente</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Box p={1} sx={style.modal}>
                    <Typography variant="h4" id="modal-title">
                        Cadastro de cliente
                    </Typography>
                    <Form handleClose={handleClose} />
                </Box>
            </Modal>

        </div>
    )

};

export default ModalComponent;