let usuario = document.querySelector('.nome');
let email = document.querySelector('.email');
let senha = document.querySelector('.senha');
let botao = document.querySelector('.botao');
let verficar = document.querySelector('.verificar')
let mensagem = document.querySelector('.mensagem')
let url = "Login.html"


document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('pass').type = 'text';
});
document.getElementById('olho').addEventListener('click', function () {
    document.getElementById('pass').type = 'password';
});


document.querySelector('.verificar').addEventListener('click', function () {
    if (usuario.value.length == 0 || senha.value.length == 0) {
        window.alert('ALGO DEU ERRADO! os campos não estão preenchidos, verifique corretamente parar Criar sua Conta!');
        window.location.reload(true);
        botao.style.display = 'none'
    }
})

document.querySelector('.verificar').addEventListener('click', function () {
    if(usuario.value.length <= 7  || senha.value.length === 0) {
        window.alert("Caracteres insuficentes!")
        window.location.reload(true);
    }
})

document.querySelector('.verificar').addEventListener('click', function () {
    if (usuario.value.length >= 15 || senha.value.length > 7 && usuario.value.length <= 20 ) {
        mensagem.style.display = 'none'
        verficar.style.display = 'none'
        botao.style.display = 'block'
        window.alert('Conta criada com sucessso!');
        window.location.href = url
    }
}) 