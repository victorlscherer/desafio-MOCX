import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from "@mui/material";
import { toast } from 'react-toastify';
import api from '../../services/api';

const style = {
    boxButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    boxForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2rem',
    }

}

const FormUpdate = ({ handleClose, cpf, getClients }) => {

    const schema = yup.object().shape({
        name: yup.string(),
        age: yup.string(),
    });

    const {
        register,
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    const handleForm = (data) => {

        if (data.name === '' && data.age === '') {
            toast('Nenhum valor passado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleClose();
            return;
        }

        if (data.name === '') {
            data = { age: data.age }
        } else if (data.age === '') {
            data = { name: data.name }
        }


        api.patch(`/update/${cpf}/`, data)
            .then(response => {
                toast('Cliente atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                getClients()
            })
            .catch(error => {
                console.log(error);
                toast(`${error.response.data.error}`, {
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
        handleClose();

    };


    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <Box sx={style.boxForm}>
                    <TextField margin='normal' label="Nome" name="name" {...register("name")} />
                    <TextField margin='normal' label="Idade" name="age" {...register("age")} />
                </Box>
                <Box sx={style.boxButton}>
                    <Button type="submit" variant='contained' color='success' >Enviar</Button>
                    <Button variant="contained" color="error" onClick={() => handleClose()}>
                        Fechar
                    </Button>
                </Box>
            </form >
        </div >
    )
}

export default FormUpdate;