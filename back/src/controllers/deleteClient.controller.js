import Client from "../models";

const deleteClient = async (req, res) => {
    const { findCpf } = req.params;

    const client = await Client.find({ findCpf });

    if (!client) {
        return res.status(400).json({
            error: "Client not found"
        });
    }

    try {
        const client = await Client.deleteOne({ findCpf });
        return res.status(204).send();
    }

    catch (error) {
        return res.status(400).send({
            error: error.message
        });
    }
}

export default deleteClient;