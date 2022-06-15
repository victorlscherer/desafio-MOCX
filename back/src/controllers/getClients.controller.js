import Client from "../models";

const getClients = async (req, res) => {
    try {
        const clients = await Client.find().lean().exec();
        res.status(200).send(clients);
    }
    catch (error) {
        res.status(500).send({ "error": error.message });
    }
}

export default getClients;