const fieldset_senha = document.querySelector('.fieldset_senha');

const showPassword = () => {
    fieldset_senha.type = fieldset_senha.type == 'text' ? 'password' : 'text';
};