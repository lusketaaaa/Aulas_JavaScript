// O que sao funcoes ? 
// sao estruturas de codigos menores, isso nos faz poupar codigo
// o ideal e que cada funcao tenha apenas um unico objetivo

// Como criar uma funcao? 
// primeiro, utilizamos a palavra function para declararmos a funcao
// depois, nomeamos a funcao
// os parametros ficam entre () e o corpo da funcao fica entre {}

// 1 - Criando uma funcao
function minhaFuncao() {
    console.log("Testando");
}
minhaFuncao();

const minhaFuncaoVariavel = function () {
    console.log("Funcao variavel");
}
minhaFuncaoVariavel();

function funcaoComParametro(txt) {
    console.log("Imprimindo  ${txt}")
}
funcaoComParametro("Imprimindo alguma coisa");

// Retorno das funcoes - serve para processarmos um valor dentro da funcaoe retornar
// para o programa, a palavra reservada para este recurso e RETURN
// uma funcao nao necessita retornar algo para ter utilidade...

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1,n2) {
    return n1 + n2;
}

const resultado = soma(a,b)
console.log(resultado)

// Escopo das funcoes
// podemos definir novas variaveis sem interferir nas variaveis ja declaradas
// caso estas novas variaveis estiverem dentro do escopo da nova funcao

// 3 - Escopo da funcao
let y = 10;
function testandoEscopo() {
    let y = 20;
    console.log("Y dentro da funcao e ${y}");
}
testandoEscopo();
console.log("Y fora da funcao e ${y}");
testandoEscopo();

// 4 - Escopo aninhado
let m = 10;
function escopoAninhado() {
    let m = 20;
    if(true) {
        let m = 30;
        if(true) {
            let m = 40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}
console.log(m);
escopoAninhado();
console.log(m);

// 5 - Arrow function
// e uma forma que temos de criar funcoes
// e uma sintaxe resumida, que tem algumas diferencas das funcoes normais
const testeArrow = () => {
    console.log("Esta e uma arrow function");
}
testeArrow();

const parOuImpar =  (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }
    console.log("Impar")
}
parOuImpar(5);
parOuImpar(10);

// 6 - Mais sobre Arrow function 
// a arrow pode ter uma sintaxe mais resumida, sendo assim, muito util para funcoes
// pequenas onde omitimos as {} e tambem a instrucao de return
const raizQuadrada = (x) => {
    return (x*x);
}
console.log(raizQuadrada(4));


const raizQuadrada2 = (x) => x * x // como utilizarei apenas 1 linha, posso optar por 
                                   // nao utilizar {}  nem  return
console.log(raizQuadrada2(5));                                 

// 7 - Argumentos opcionais 
// os argumentos / parametros nas funcoes sao obrigatorios, precisamos passar todos
// porem, ha casos de funcoes que podem funcionar sem algum ods argumentos
// para resolver isso podemos fazer uma checagem do parametro com if
const multiplication = function(m, n) {
    if(n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}
console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (nome) => {
    if(!name ) {
        console.log("Ola");
        return
    }
    console.log("Ola ${nome}");
}
greeting();
greeting("lucas");

// 8 - Argumentos com valor default
// valor default e quando o argumento tem um valor previo
// se for passado um novo valor, o valor default e substituido
// se nao, o default e utilizado na funcao
const customGreeting = (nome, greet = "ola") => {
    return "${greet}, ${name}"
}
console.log(customGreeting("lucas"));
console.log(customGreeting("lucas", "boa noite"));

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++)
        console.log(text);
}
repeatText("testando"); // 2 vezes - testando argumento default
repeatText("agora vai repetir 5 vezes", 5);

// 9 - Closure
// e o conjunto de funcoes, onde temos um reaproveitamento do escopo interno
// de uma funcao, pois este escopo nao pode ser acessado fora da funcao,, ja que
// e um bloco. Entao ha funcoes internas que aproveitam o escopo, que sao
// chamadas de closure
function someFuncion() {
    let txt = "Alguma coisa";

    function display(){
        console.log(txt)
    }
    display()
}
someFuncion();

// 10 - Mais sobre Closure
// as closures tambem podem servir para salvar os resultados ja executados
// criando uma especie de incrementacao
// assim, temos uma variavel que executa uma funcao e modifica o seu valor
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);
console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// 11 - Recursao
// e um recurso que permite a funcao se autoinvocar continuamente
// criamos uma especie de loop
// e interessante definir uma condicao final, para parar a execucao
const untilTen = (n, m) => {
    if(n < 10){
        console.log("A funcao parou de executar");
    } else {
        const x = n - m

        console.log(x);

        untilTen(x, n);
    }
}
untilTen(100, 7);

// Recursao infinita
function run() {
    console.log("Executando...");
    run();
}
// run();

function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}
const num = 6;
const result = factorial(num);
