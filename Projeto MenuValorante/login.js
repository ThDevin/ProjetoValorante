document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('pass').type = 'text';
});

document.getElementById('olho').addEventListener('click', function () {
    document.getElementById('pass').type = 'password';
});

let configuracao = document.querySelector('#config')



document.getElementById('config').addEventListener('onclick', function () {
    configuracao.innerHTML = '<p>Oi</p>'
});