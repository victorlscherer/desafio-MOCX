const validateCPF = (cpf) => {
    if (cpf.length != 11) {
        return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        return false;
    }

    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let rest = sum % 11;

    let digit = 11 - rest;

    if (digit > 9) {
        digit = 0;
    }

    if (digit != parseInt(cpf.charAt(9))) {
        return false;
    }

    sum = 0;

    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    rest = sum % 11;

    digit = 11 - rest;

    if (digit > 9) {
        digit = 0;
    }

    if (digit != parseInt(cpf.charAt(10))) {
        return false;
    }


    return true;

}
export default validateCPF;