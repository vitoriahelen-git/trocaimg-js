const botao = document.getElementById('trocaimg');

botao.addEventListener('click', function(e) {
    e.preventDefault();
    const img = document.getElementById('pimg');
    img.setAttribute('src', 'sakuna.png')
})