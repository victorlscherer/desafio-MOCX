import validateCPF from "../utils"

const validateCpf = (req, res, next) => {
    const { cpf } = req.body;
    if (!validateCPF(cpf)) {
        return res.status(400).json({
            error: "Invalid CPF"
        });
    }
    next();
}

export default validateCpf;