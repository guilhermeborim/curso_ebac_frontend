const formulario = document.getElementById('formulario');
const inputCampoA = document.getElementById('input-campo-a');
const inputCampoB = document.getElementById('input-campo-b');
const submit = document.getElementById('submit');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagem = 'formulario valido';
    const erro = 'formulario invalido';
    const validacao = document.querySelector('.validacao');
    const error = document.querySelector('.error');
    
    if(inputCampoB.value > inputCampoA.value) {
        validacao.innerHTML = mensagem;
        validacao.style.display = 'block';
        inputCampoB.value = '';
        inputCampoA.value = '';
        error.style.display ='none';
    } else {
        validacao.style.display = 'none';
        error.innerHTML = erro;
        error.style.display = 'block';
        inputCampoB.value = '';
        inputCampoA.value = '';
    }
})
