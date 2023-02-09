const form = document.getElementById('form-validacao');
const campo_a = document.getElementById('campo-a');
const campo_b = document.getElementById('campo-b');

function validaCampo(campoA, campoB) {
    const validacao = campoA < campoB;
    return validacao;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let formEValido = false;

    const mensagemSucesso = `Formulário validado. Campo B: <b>${campo_b.value}</b> maior que o Campo A: <b>${campo_a.value}.`
    const mensagemErro = `Formulário incorreto. Campo A: <b>${campo_a.value}</b> maior que o Campo B: <b>${campo_b.value}.`

    formEValido = validaCampo(campo_a.value, campo_b.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        const containerMensagemErro = document.querySelector('.mensagem-erro')
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})

campo_a.addEventListener('keyup', function(e) {
    console.log(e.target.value)

    document.querySelector('.mensagem-sucesso').style.display = 'none';
    document.querySelector('.mensagem-erro').style.display = 'none';
})

campo_b.addEventListener('keyup', function(e) {
    console.log(e.target.value)

    document.querySelector('.mensagem-sucesso').style.display = 'none';
    document.querySelector('.mensagem-erro').style.display = 'none';
})