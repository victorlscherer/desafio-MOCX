import { Typography, Card, CardActions, CardContent, Button, Snackbar } from "@mui/material";
import api from "../../services/api";

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

const ClientCard = ({ client }) => {

    const { id, name, cpf, age } = client;

    const handleDelete = () => {
        api.delete(`/delete/${id}`)
            .then(() => {
                console.log('Cliente deletado com sucesso!');
            }
            ).catch(err => {
                console.log(err);
            }
            );
    }

    const handleEdit = () => {

        <Snackbar open={true} autoHideDuration={2000} message="Cliente editado com sucesso!" />

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
                <Button size="small" variant="contained" color="success" onClick={() => handleEdit()}>Editar</Button>
                <Button size="small" variant="contained" color="error">Excluir</Button>
            </CardActions>
        </Card>
    )
}

export default ClientCard;