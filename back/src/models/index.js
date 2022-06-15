import mongoose from "../database";

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
});

const Client = mongoose.model("Client", ClientSchema);

export default Client;