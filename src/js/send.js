import { validarEmail } from "../validators/email.js";
import { validarSenha } from "../validators/senha.js";

const myForm = document.getElementById("myForm");
const inputEmail = document.querySelector(".fieldset_email");
const inputSenha = document.querySelector(".fieldset_senha");
const spanEmail = document.querySelector(".legend_email");
const spanSenha = document.querySelector(".legend_senha");

myForm.addEventListener("submit", ($event) => {

    const email = myForm.email.value;
    const senha = myForm.senha.value;

    if (email == '' && senha == '') {
        spanEmail.style.display = 'block';
        spanSenha.style.display = 'block';
        inputEmail.style.borderBottom = '2px solid #E87C03';
        inputSenha.style.borderBottom = '2px solid #E87C03';

        $event.preventDefault();

        return;

    }

    if (!validarEmail(email)) {
        spanEmail.style.display = 'block';
        inputEmail.style.borderBottom = '2px solid #E87C03';

        $event.preventDefault();

        return;

    } else {
        spanEmail.style.display = 'none';
        inputEmail.style.border = 'none';

    }

    if (!validarSenha(senha)) {
        spanSenha.style.display = 'block';
        inputSenha.style.borderBottom = '2px solid #E87C03';

        $event.preventDefault();

        return;

    } else {
        spanSenha.style.display = 'none';
        inputSenha.style.border = 'none';
    }

    return alert("Login efetuado com sucesso!");

});

