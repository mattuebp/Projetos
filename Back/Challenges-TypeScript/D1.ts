let funcionario1 = {
    code: 1,
    name: 'Valter'
}
console.log(funcionario1);

// Definindo a tipagem durante a atribuição da propriedade.

////////////////////////////////////////////////////////////////////////////////////////////////

let funcionario2: {code: number, name: string} = { /* quando a tipagem é definida explicitamente antes,
é necesário preencher o objeto com todos os parametros.*/
    code: 2,
    name: 'Matheus'
}
console.log(funcionario2);

// Definindo tipagem antes.

////////////////////////////////////////////////////////////////////////////////////////////////

interface Funcionario{ /* Criação de interface Funcionario para a sua utilização em outros objetos.*/
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = { // Inferindo diretamente a tipagem do objeto.
    codigo: 3,
    nome: 'Leila'
}
console.log(funcionario3);

let funcionarioObj4 = {} as Funcionario; /* Definindo inicialmente o objeto e inferindo o seu formato
através do "as Funcionario".*/
funcionarioObj4.codigo = 4;
funcionarioObj4.nome = 'Maria';
console.log(funcionarioObj4);

let funcionarioObj5: Funcionario = {
    codigo: 5,
    nome: 'Rafaela'
}
console.log(funcionarioObj5);

////////////////////////////////////////////////////////////////////////////////////////////////