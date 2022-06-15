import Client from "../models";
import validateCPF from "../utils";

const updateClient = async (req, res) => {
    const { findCpf } = req.params;


    const client = await Client.find({ cpf: findCpf });

    if (!client) {
        return res.status(400).json({
            error: "Client not found"
        });
    }

    try {
        const client = await Client.updateOne({ cpf: findCpf }, req.body);
        return res.status(200).send(client);
    }

    catch (error) {
        return res.status(400).send({
            error: error.message
        });
    }
}

export default updateClient;
