const usuarioInput = document.getElementById ("usuario");
const Botao = document.getElementById ("botao");
const mensagem = document.getElementById ("mensagem");

const randomNumero = Math.floor (Math.random () * 100) + 1;
let quantidade = 0;

function botao () {

    const userUsuario = parseInt (usuarioInput.value);
    quantidade++;

    if (userUsuario === randomNumero){
        mensagem.textContent = 'Parabens! você acertou em ' + quantidade + ' tentativa.';
        mensagem.style.color = "green";
        usuarioInput.disabled = true;
        Botao.disabled = true;

    }

    else if ( userUsuario < randomNumero) {
        mensagem.textContent = 'tente um número maior';
        mensagem.style.color = "red";
    }

    else {
        mensagem.textContent = 'tente um número menor';
        mensagem.style.color = "red";
    }

}

const correta = document.getElementById ("correta");

function Resposta() {
    correta.textContent = "A resposta é: " + randomNumero;
}
 