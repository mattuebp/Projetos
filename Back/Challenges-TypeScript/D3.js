"use strict";
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0; // tipado automaticamente como number.
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) { /* Esse trecho valida o botão de atualização pelo if, de forma que ele não possa ser
mais nulo, e em seguida chama a função "somarAoSaldo" para fazer a operação. O argumento da função é recebido
como o valor de um elemento HTML assumindo o tipo "String", e é convertido ao tipo "Number" dentro da própria
função para que a tipagem seja respeitada na operação.*/
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) { /* Esse trecho valida o botão de limpar pelo if, de forma que ele não possa ser nulo,
e em seguida chama a função "limparSaldo()", fazendo a atribuição numerica de valor 0 (zero) à variavel
"saldoTotal", para que seu valor seja convertido em "string" e então apresentado ao campo de saldo no HTML.*/
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
