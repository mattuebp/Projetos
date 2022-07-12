let botaoAtualizar = document.getElementById('atualizar-saldo')
let botaoLimpar = document.getElementById('limpar-saldo')
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0; // tipado automaticamente como number.

function somarAoSaldo(soma: number) { /* A função recebe o valor a ser somado no formato de "number",
faz a operação, guarda o resultado em "saldoTotal", e é convertivo e armazenado em "string" no campo
de apresentação do saldo.*/
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() { /* Limpar o campo de preenchimento do saldo, a cada interação.*/
    soma.value = "";
}

function limparSaldo(){ /* A função de limpar o saldo, opera reatribuindo o valor numerico "0" (zero), à
variavel auxiliar saldoTotal, e depois seu valor é convertido e armazenado no campo de apresentação do saldo,
como na função passada.*/
    if (campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) { /* Esse trecho valida o botão de atualização pelo if, de forma que ele não possa ser 
mais nulo, e em seguida chama a função "somarAoSaldo" para fazer a operação. O argumento da função é recebido
como o valor de um elemento HTML assumindo o tipo "String", e é convertido ao tipo "Number" dentro da própria
função para que a tipagem seja respeitada na operação.*/
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}

if (botaoLimpar) { /* Esse trecho valida o botão de limpar pelo if, de forma que ele não possa ser nulo,
e em seguida chama a função "limparSaldo()", fazendo a atribuição numerica de valor 0 (zero) à variavel
"saldoTotal", para que seu valor seja convertido em "string" e então apresentado ao campo de saldo no HTML.*/
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    })
}