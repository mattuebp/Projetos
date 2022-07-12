"use strict";
var funcionario1 = {
    code: 1,
    name: 'Valter'
};
console.log(funcionario1);
// Definindo a tipagem durante a atribuição da propriedade.
////////////////////////////////////////////////////////////////////////////////////////////////
var funcionario2 = {
    code: 2,
    name: 'Matheus'
};
console.log(funcionario2);
var funcionario3 = {
    codigo: 3,
    nome: 'Leila'
};
console.log(funcionario3);
var funcionarioObj4 = {}; /* Definindo inicialmente o objeto e inferindo o seu formato
através do "as Funcionario".*/
funcionarioObj4.codigo = 4;
funcionarioObj4.nome = 'Maria';
console.log(funcionarioObj4);
var funcionarioObj5 = {
    codigo: 5,
    nome: 'Rafaela'
};
console.log(funcionarioObj5);
////////////////////////////////////////////////////////////////////////////////////////////////
