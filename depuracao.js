// O que e bug e debug?
// Bug: um problema que ocorreu no codigo, muitas vezes por erro do programador
// o bug impede o funcionamento do softare;
// Debug: Metodo de encontrar e resolver  o bug, em JavaScript temos diversas 
// estrategias para isso;
// Validacao: Tecnicas utilizadas para ter o minimo possivel de bugs no software;

// Scrit Mode
// O strict e um modo de desenvolvimento que deixa o JS mais rigoroso na hora de programar;
// Deve ser declarado no topo do arquivo ou de funcoes;
// O strict nao limita os recursos de JS, ele baliza a forma que voce programa;
// Bibliotecas famosas sao todas feitas em strict

"use strict";
opa = "teste"; // ja comeca a dar erro, devido o uso do modo restrito.

const undefined = 10; // erro

delete [].length // erro

// Metodo de debug: console.log
// O metodo log de console e muito utilizado para debug;
// Utilizamos diversas vezes nos nossos exemplos;

let a = 1;
let b = 2; 

if(a == 1) {
    a = b + 2;
}
console.log(a);

for(let i = 0; i < b; i++) {
    a = a + 2
    console.log(a);
}

if(a < 25) {
    a = 25;
}
console.log(a);

// Metodo de debug: debugger
// O debugger e uma instrucao que nos permite o debug do console no navegador;
// Podemos evidenciar os valores das variaveis em tempo real e com o programa 
// executando, o que ajuda bastante;

let c = 1;
let d = 2;

if(c ==1 ) {
    c = d + 2;
}
debugger;

for(let i = 0; i < d; i++){
    c = c + 2;
}

// o debugger funciona como se fosse um breakpoint do vs code, ele faz uma "pausa"
// onde voce coloca o debugger, e para continuar precisa de algo manual

// Tratamento de dado por funcao
// Nunca podemos confiar no dado que e passado pelo usuario;
// Sempre devemos criar validacoes e tratamento para os mesmos;
// Ao longo do curso aprenderemos diversas tecnicas;
function checkNumber(n) {
    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return
    }

    console.log("Valor correto!");
    return
}

checkNumber(5);
checkNumber();
checkNumber("10");
checkNumber([]);

// Exceptions
// As exceptions sao erros que nos geramos no programa;
// Este recurso faz o programa ser abortado, ou seja, ele nao continua sua execucao;
// Utilizamos a expressao "throw new Error", com a mensagem de erro como argumento.
let x = 10;

if(x != 11) {
    throw new Error("O valor de X nao pode ser diferente de 11!");
}

// Try Catch
// Try catch e um recurso famoso nas linguagens de programacao;
// Onde tentamos executar algo em try, e se um erro ocorrer ele cai no bloco do catch;
// Util tanto para debug, como tambem no desenvolvimento de uma aplicacao solida
try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`);
}

// Finally
// O finally e uma instrucao que vai depois do bloco try catch;
// Ela e executada independente de haver algum erro ou nao em try;
try {
    const value = checkNumber("asd")
    if(!value) {
        throw new Error("Valores invalidos!")
    }
} catch(error) {
    console.log(`Opa, aconteceu um problema ${error}`);
} finally {
    console.log("O codigo foi executado"); // sera executado independente de ter um erro ou nao
}

// Assertions 
// Assertions sao quando os tratamentos de valores passadoes pelo usuario, geram um erro;
// Porem este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja,
// seria algo para os devs e nao para os usuarios;
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("O array precisa ter elementos")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([]);
checkArray([1, 2, 3, 4]);