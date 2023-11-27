const form = document.getElementById('valid-form');

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var campoA = parseFloat(document.getElementById('n1').value);
    var campoB = parseFloat(document.getElementById('n2').value);

    if (numbervalid(campoA, campoB)){
        document.querySelector('.mensagem-erro').style.display = 'none';
        document.querySelector('.mensagem-sucesso').style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } 
    else {
        document.querySelector('.mensagem-erro').style.display = 'block';
        document.querySelector('.mensagem-sucesso').style.display = 'none';
        
    }
});
