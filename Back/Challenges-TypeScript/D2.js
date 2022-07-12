"use strict";
// Como podemos melhorar o esse código usando TS? 
var trabalho;
(function (trabalho) {
    trabalho[trabalho["desenvolvedor_a"] = 0] = "desenvolvedor_a";
    trabalho[trabalho["engenheiro_a"] = 1] = "engenheiro_a";
    trabalho[trabalho["aposentado"] = 2] = "aposentado";
})(trabalho || (trabalho = {}));
var likes;
(function (likes) {
    likes[likes["cozinhar"] = 0] = "cozinhar";
    likes[likes["musica"] = 1] = "musica";
    likes[likes["esportes"] = 2] = "esportes";
})(likes || (likes = {}));
var pessoa1 = {
    nome: "Rafaela",
    idade: 23,
    job: trabalho.desenvolvedor_a,
    hobbies: likes.esportes
};
var pessoa2 = {
    nome: "Fabio",
    idade: 29,
    job: trabalho.engenheiro_a,
    hobbies: likes.esportes
};
var pessoa3 = {
    nome: "Matheus",
    idade: 23,
    hobbies: likes.cozinhar
};
var pessoa4 = {};
pessoa4.nome = "Valter";
pessoa4.idade = 57,
    pessoa4.job = trabalho.aposentado,
    pessoa4.hobbies = likes.musica;
