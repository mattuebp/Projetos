// Como podemos melhorar o esse código usando TS? 

enum trabalho { // para seu usado em "job"
    desenvolvedor_a,
    engenheiro_a,
    aposentado
}

enum likes { // para ser usado em "hobbies"
    cozinhar,
    musica,
    esportes
}

type Person = {
    nome: string,
    idade: number,
    job?: trabalho
    hobbies: likes
}

let pessoa1: Person = {
    nome: "Rafaela",
    idade: 23,
    job: trabalho.desenvolvedor_a,
    hobbies: likes.esportes
}

let pessoa2: Person = {
    nome: "Fabio",
    idade: 29,
    job: trabalho.engenheiro_a,
    hobbies: likes.esportes
}

let pessoa3: Person = {
    nome: "Matheus",
    idade: 23,
    hobbies: likes.cozinhar
}

let pessoa4 = {} as Person
pessoa4.nome = "Valter";
pessoa4.idade = 57,
pessoa4.job = trabalho.aposentado,
pessoa4.hobbies = likes.musica
