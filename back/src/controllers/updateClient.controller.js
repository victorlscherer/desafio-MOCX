import Client from "../models";
import validateCPF from "../utils";

const updateClient = async (req, res) => {
    const { name, cpf, age } = req.body;
    const { findCpf } = req.params;

    if (cpf && !validateCPF(cpf)) {
        return res.status(400).json({
            error: "Invalid CPF"
        });
    }

    const foundCpf = await Client.find({ cpf });

    if (foundCpf) {
        return res.status(400).json({
            error: "CPF already exists"
        });
    }

    const client = await Client.find({ findCpf });

    if (!client) {
        return res.status(400).json({
            error: "Client not found"
        });
    }

    try {
        const client = await Client.updateOne({ findCpf }, {
            name,
            cpf,
            age
        });
        return res.status(200).send(client);
    }

    catch (error) {
        return res.status(400).send({
            error: error.message
        });
    }
}

export default updateClient;
