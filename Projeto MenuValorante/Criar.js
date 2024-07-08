let usuario = document.querySelector('.nome');
let email = document.querySelector('.email');
let senha = document.querySelector('.senha');
let botao = document.querySelector('.botao');
let verficar = document.querySelector('.verificar')
let mensagem = document.querySelector('.mensagem')
let url = "http://127.0.0.1:5500/Projeto%20MenuValorante/Login.html"


document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('pass').type = 'text';
});
document.getElementById('olho').addEventListener('click', function () {
    document.getElementById('pass').type = 'password';
});


document.querySelector('.verificar').addEventListener('click', function () {
    if (usuario.value.length == 0 || senha.value.length == 0) {
        window.alert('[ALGO DEU ERRADO!]');
        mensagem.innerHTML += `<p>Os campos não estão preenchidos, <br>verifique corretamente parar Criar sua Conta! <br><br>
        -------------[RECARREGUE A PAGINA]--------------</p>`
        verficar.style.display = 'none'

        botao.style.display = 'none'
    } 
})

document.querySelector('.verificar').addEventListener('click', function () {
    if (usuario.value.length > 5 && usuario.value.length < 20 || senha.value.length > 5 && usuario.value.length < 30 ) {
        mensagem.style.display = 'none'
        verficar.style.display = 'none'
        botao.style.display = 'block'
        window.location.href = url
        window.alert('Conta criada com sucessso!');
    } 
})