const valorA = document.getElementById('campoA');
const valorB = document.getElementById('campoB');
const form = document.getElementById('validar');

function validar(numero){
    numero = valorA.value > valorB.value;
    return numero;
}

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const mensagemResposta = document.getElementById("mensagem");
        const mensagemA = 'O valor do campo A é maior que o valor do campo B' 
        const mensagemB = 'O valor do campo B é maior que o valor do campo A'
        const mensagemIguais = 'Os valor dos campor são Iguais'

        if (valorB.valueAsNumber > valorA.valueAsNumber){
            mensagemResposta.innerHTML= mensagemB;
            mensagemResposta.style.display = "block";
        }
        else if (valorB.valueAsNumber == valorA.valueAsNumber){
            mensagemResposta.innerHTML= mensagemIguais;
            mensagemResposta.style.display = "block";
        }
        else {
            mensagemResposta.innerHTML= mensagemA;
            mensagemResposta.style.display = "block";
        }

})