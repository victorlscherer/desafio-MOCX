import { Typography, Card, CardActions, CardContent, Button } from "@mui/material";
import { toast } from 'react-toastify';
import api from "../../services/api";
import ModalComponent from "../Modal";

const style = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2rem',
        width: '400px',
    },
}

const ClientCard = ({ client, getClients }) => {

    const { name, cpf, age } = client;

    const handleDelete = () => {

        api.delete(`/delete/${cpf}`)
            .then(() => {
                toast('Cliente deletado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                getClients()
            }
            ).catch(err => {
                console.log(err);
                toast(`${err.response.data.error}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            );
    }

    return (
        <Card sx={style.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body4" component="p">
                    CPF: {cpf}
                </Typography>
                <Typography variant="body4" component="p">
                    Idade: {age}
                </Typography>
            </CardContent>
            <CardActions>
                <ModalComponent type={"edit"} cpf={cpf} getClients={getClients} />
                <Button size="small" variant="contained" sx={{ marginLeft: "10px" }} color="error" onClick={() => handleDelete()}>Excluir</Button>
            </CardActions>
        </Card>
    )
}

export default ClientCard;