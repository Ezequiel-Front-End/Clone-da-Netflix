export const validarSenha = (senha) => {
    if (senha.length > 3) {
        return true;

    }

    return false;
};