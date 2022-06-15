import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import ModalComponent from "../Modal";

const style = {
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={style.toolbar}>
                    <Typography variant="h6">
                        MOCX - Clientes
                    </Typography>
                    <ModalComponent />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;