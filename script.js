const formulario = document.querySelector('form');

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let assunto = formulario.assunto.value;
    let msg = formulario.msg.value;

    confirm(`Seu contato foi enviado! Nome: ${nome}, E-mail: ${email}, Assunto: ${assunto}, Mensagem: ${msg}. Suas informações estão corretas?`);
});