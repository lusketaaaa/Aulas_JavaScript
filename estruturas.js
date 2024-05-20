// 1 - Variaveis 
let nome = "lucas";
console.log(nome);
nome = "lucas carvalho"; // o valor da variavel foi mudado, fica salvo/exibido a alteracao mais recente

const idade = 18 // const e um valor constante, ou seja, nao pode ser alterado
console.log(idade);

// 2 - Aprofundamento em variaveis
// podemos criar varias variavies em uma unica linha, ex:
let a = 5, b = 8, c = 10;
// nao podemos comecar variaveis com numeros 
// tambem nao podemos utilizar alguns caracteres especiais como @

const nomeCompleto = "lucas carvalho";
const nomecompleto = "lucas hungaro de carvalho"; //as letras maiusculas e minusculas podem representar diferentes variaveis
console.log(nomecompleto);
console.log(nomeCompleto);
// Nomes reservados - alguma palavras especificas quando sozinhas nao podem ser nomes de variaveis
// ex: break (nao pode) algumacoisabreak(pode)

// 3 - Funcao Prompt 
// esta funcao recebe dados do usuario, e estes dados podem ser salvos em 
// uma variavel
// exemplo: const x = prompt("Digite um numero: ")

const age = prompt("Digite a sua idade: ");
console.log("Voce tem ${age} anos.");

// 4 - Funcao Alert
// Esta funcao emite uma mensagem na tela por um pop up
// nao e uma funcao muito utilizada
alert("Testando");
const z = 10;
alert("O numero e ${z}");

// 5 - Funcao Math
// possui diversas funcoes para  fins matematicos
// max: encontra o maior numero
// floor: arredonda para baixo o numero
console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.15)); //sera arredondado para o numero de baixo
console.log(Math.ceil(5.14)); //sera arredondado para o numero de cima

// 6 - Funcao Console
// a principal funcao dele e exibir mensagens 
// de alguma categoria
console.log("teste"); //exibe uma mensagem
console.error("erro!"); // dispara um erro
console.warn("aviso"); //exibe um aviso

// Estruturas de controle: como sabemos, os programas sao executados 
// de cima para baixa, e com estruturas  como if e else, podemos 
// alterar o fluxo de execucao, o caminho dependera das condicoes 
// e comparacoes. As principais sao if e else

// 7 - Estrutura condicional IF
// temos um bloco de codigo sendo executado se a condicao for 
// verdadeira, a condicao e validada por um boolean
const m = 10;
if(m > 5) {
    console.log("m e maior que 5")
}

const user = "Joao"; // Este bloco de codigo sera executado 
if(user === "Joao") { // pois o boolean retorna True
    console.log("Ola Joao");
}

const user2 = "Maria";
if(user2 === "Joao") { // Este bloco de codigo nao sera executado
    console.log("Ola Joao"); // pois o boolean retorna False
}

// 8 - Estrutura condicional Else
// esta estrutura e executada quando o if nao atende a sua condicao
// ou seja, nao existe um bloco de validacao, apenas um codigo que pode
// ser executado dependendo do if

const loggedIn = false;
if(loggedIn === true) {
    console.log("Esta autenticado");
} else {
    console.log("Nao esta autenticado");
}

const q = 10;
const w = 15;
if(q > 5 && w > 20) {
    console.log("Numeros mais altos");
} else {
    console.log("Os numeros nao sao mais altos");
}

// 9 - Estrutura condicional Else If
// e uma estrutura intermediaria do if e do else
// e possivel adicionar novas condicoes, como no if
if(1 > 2) {
    console.log("Teste"); // condicao falsa, nao e executada
} else if(2 > 3) {
    console.log("Teste 2"); // condicao falsa, nao e executada
} else if(5 > 1) {
    console.log("Agora sim!"); // condicao verdadeira, e executada
}

const userName = "Matheus";
const userAge = 31;
if(userName === "Jose") {
    console.log("Bem vindo jose!"); // nao sera executada
} else if(userName === "Matheus" && userAge === 31) {
    console.log("Ola Matheus, voce tem 31 anos"); // sera executada
} else {
    console.log("Nenhuma condicao aceita"); // nao sera executada
}

// O que sao estruturas de repeticao? 
// basicamente um bloco de codigo que se repete ate que uma condicao
// seja satisfeita, isso evita a repeticao desnecessaria do nosso codigo
// algumas das estruturas sao: for e while
// temos que tomar cuidado com o loop infinito

// 10 - Estrutura de repeticao While
// o while faz uma acao ate que uma condicao seja atingida
// no bloco deifinimos o fin do loop, que e a condicao

let p = 0;
while(p < 5) { // este e um loop finito, pois tem fim
    console.log("Repetindo ${p}");
    p = (p + 1);
}

// um exemplo de loop infinito :
// let x = 10
// while(x > 5) {
//   console.log("repetindo infinitamente");
//}

// 11 - Estrutura de repeticao Do While
// sintaxe semelhante a do while
// este recurso nao e tao utilizado
let o = 10;
do{
    console.log("Valor de o: ${o}");
    o-- // faz a mesma coisa que o = o - 1
} while(0 > 1);

// 12 - Estrutura de repeticao For
// e a estrutura de repeticao mais utilizada
// ela condensa toda a logica em uma linha
for(let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10;
for(r; r > 0; r = r - 1) {
    console.log("O r esta diminuindo: ${r}");
}

// A indentacao e um recurso utilizado para organizar os multiplos 
// blocos de codigo, utilizamos o tab e alinhamos os  blocos
// para que o codigo fique mais organizado e legivel
// lembrando que o codigo funciona normalmente sem a indentacao

//  14 - Break (Forcando a saida de um loop)
// com a instrucao de break, podemos ejetar um loop, fazendo com
// que as repeticoes cessem, isso pode poupar memoria, pois o
// codigo sera executado menos vezes
for(let g = 20; g > 10; g--) {
    console.log("O valor de g e: ${g}");
    if(g === 12) {
        console.log("O g e 12!");
        break; // faz o loop parar de ser executado
    }
}

// 15 - Continue (pulando a execucao de um loop)
// a palavra reservada continue pode pular uma ou mais
// execucoes de um loop
for(let s = 0; s < 10; s = s + 1) {
    //operador resto == %
    if(s % 2 === 0) {
        console.log("Numero par!"); // substitui o numero par por
        continue;                   //"numero par"
    }
    console.log(s); // faz com que os impares sejam exibidos
}

// 16 - Estrutura condicional Switch
// pode ser utilizado para organizacao de um excesso de if/else
// cada if seria um case
// para cada case, temos que adicionar um break
// e temos o default que e como o else
const job = "Advogado";
switch(job) {
    case "Programador":
        console.log("Voce e um programador");
        break
    case "Advogado":
        console.log("Voce e um advogado");
        break
    case "Engenheiro":
        console.log("Voce e um engenheiro");
        break    
    default:
        console.log("Profissao nao encontrada");  
        // nao precisa de break  
}

// switch "errado":
const l = 100;
switch(l) { // podemos observar a ausencia do break, que pode
    case 200: // fazer com que todas as condicoes sejam executadas
        console.log("l = 200");
    case 100:
        console.log("l e 100");
    case 10: 
        console.log("l e 10");    
    default:
        console.log("l nao foi encontrado")    
}   

