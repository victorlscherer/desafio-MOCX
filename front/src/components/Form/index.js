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

const Form = ({ handleClose, getClients }) => {

    const schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        cpf: yup.string().required('O CPF é obrigatório').matches(/^[0-9]{11}$/, 'O CPF deve conter apenas números'),
        age: yup.number().required('A idade é obrigatória').positive().integer(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleForm = (data) => {
        api.post('/registration/', data)
            .then(response => {
                toast('Cliente cadastrado com sucesso', {
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
                toast('Erro ao cadastrar cliente', {
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
                    <TextField margin='normal' label="Nome" name="name" {...register("name")} error={!!errors.name} helperText={errors.name?.message} />
                    <TextField margin='normal' label="CPF" name="cpf" {...register("cpf")} error={!!errors.cpf} helperText={errors.cpf?.message} />
                    <TextField margin='normal' label="Idade" name="age" {...register("age")} error={!!errors.age} helperText={errors.age?.message} />
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

export default Form;