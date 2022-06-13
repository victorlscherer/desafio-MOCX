import Client from "../models";

const clientRegistration = async (req, res) => {
    const { name, cpf, age } = req.body;

    const client = await Client.find({ cpf });

    if (client.length) {
        return res.status(400).json({ "error": "Client already exists" });
    }

    try {
        const client = await Client.create({
            name,
            cpf,
            age
        });
        return res.status(201).send(client);
    }
    catch (error) {
        return res.status(400).send({ "error": error.message });
    }
}

export default clientRegistration;