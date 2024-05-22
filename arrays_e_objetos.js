// Arrays
// o que sao arrays? Sao listas que podemos inserir 
// qualquer tipo de dado, os valores sao inseridos entre
// [] e cada valor e separado por uma virgula
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);
const itens = ["Matheus", true, 2, 4.12, []];
console.log(itens);

// Mais sobre arrays
const array = ["a", "b", "c", "d", "e"]
console.log(arr[0]) // para acessarmos o indice do primeiro elemento, vale lembrar que sao zero based, ou seja, comecam com 0 ao inves de 1


// Propriedades - propriedades sao como as informacoes de um objeto
// os arrays tem propriedades, assim como outros tipos de dados
// as propriedades podem ser acessadas por notacao, ponto ou colchetes
// dado.prop ou dado["prop"]
const numbers = [5, 3, 4];
console.log(numbers.length); // a propriedade lenght faz a contagem de elementos do Array
console.log(numbers["length"]);
const myName = "Matheus";
console.log(myName.length); // conta os caracteres da variavel
console.log("lucas".length);

// Metodos
// metodos sao como funcoes, acessamos com notacao e ponto e utilizamos () para invocar
// um importante conceito da OPP: objetos sao compostos por metodos e propriedades
// como muitos dados sao objetos em js, temos metodo e propriedade neles
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers); // uma concatenacao entre duas listas, o metodo concat basicamente une ambas as listas em uma so

const text = "Algum texto";
console.log(text.toUpperCase()); // este metodo faz todas os caracteres ficarem / permanecerem maiusculos

console.log(text.indexOf("g")); // este metodo encontra a posicao de um caractere na string e entrega o indice(lembrando que comeca no 0);

// Objetos (Object Literals)
// em js temos um tipo de dado que e o objeto, porem seu nome tecnico e object literals
// isso porque o objeto vem da orientacao a objetos, com recursos como instancia e heranca
// ja o literals possui apenas propriedades e metodos, nos mesmos os criamos
// o objeto fica em um bloco de {}
const person = {
    nameE: "Matheus",
    age: 31,
    job: "programador"
};
console.log(person);
console.log(person.nameE); // para obter um valor especifico
console.log(person.nameE.length)

// Removendo e criando novas propriedades
// para adicionar uma propriedade a um objeto utilizamos a notacao de ponto e atribuimos um valor
// ja para excluir vamos utilizar o operador delete na propriedade alvo
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km : 20000,
};

console.log(car);
car.doors = 4; // --> adiciona uma nova propriedade a constante car
console.log(car);
delete car.km; // exclui uma propriedade da constante car
console.log(car);

// Diferenca entre Arrays e Objetos
// os arrays sao utilizados como listas de itens, geralmente todos possuem o mesmo tipo
// ja os objetos sao utilizados para descrever um item contem as informaceos e propriedades do mesmo, as propriedades podem ter diferentes tipos de dados
// Podemos ter tambem um array de objetos, isso e muito utilizado.
// Ambos sao muito importantes na programacao

// Mais sobre objetos
// podemos copiar todas as propriedades de um objeto par criar outro com o metodo assign
// o object lireal e uma instancia de um objeto chamado object
// um objeto array criado com const pode ter seus elementos e propriedades modificados
const obj = {
    a: "teste",
    b: true,
};
console.log(obj instanceof object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj) // Para copiar os elementos do objeto no objeto2
console.log(obj2);

// Conhecendo melhor o objeto
// podemos verificar as propriedades de um objeto pelo metodo keys de Object
// com o metodo entries, recebemos arrays dos nomes das propriedades com seus valores
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car)); // entrega as chaves

console.log(Object.entries(car)); // entrega chaves e array com valores

// Mutacao (Mutability)
// outra caracteristica interessante e a mutacao, isso ocorre quando criamos um objeto a partir de outro
// este objeto nao e novo, e sim uma referencia do primeiro
// as mudancas dele podem afetar a copia e vice-versa
const a = {
    nomeAA: "Matheus",
};
const b = a;
console.log(a);
console.log(b);

console.log(a === b);

a.age = 31; // --> o objeto b tambem ganha o atributo age
console.log(a);
console.log(b);

delete b.age; // --> se deletar do b, deleta do a tambem!
console.log(a);
console.log(b);

// Loops em Arrays
// algo muito comum e percorrer os arrays atraves de estruturas de repeticao, como for e while
// isso serve para utilizar o resultado de cada um dos elementos de forma simples, sem repeticao de codigo
const users = ["Matheus", "Joao", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++) {
    console.log(users[i]); // acessar uma chave especifica do array pelo indice
}

// Metodos de Array: Push e Pop
// os metodos sao uteis para manipular os arrays, ou seja, alterar os seus valores de alguma forma
// com o PUSH adicionamos um item ao fim do array
// com o POP temos a remocao de um elemento do fim do array
const arrayY = [1, 2, 3, 4];
arrayY.push(5); // adiciona o numero 5 ao final do array
array.pop(); // remove o ultimo elemento do array, no caso o numero 5
const itemRemovido = arrayY.pop() // o item que foi removido pode ser adicionado a uma variavel

// Metodos de array: Shift e Unshift
// o metodo SHIFT remove o primeiro elemento do array
// o metodo UNSHIFT adiciona itens ao inicio do array
const letters = ["a", "b", "c"];
const letter = letters.shift(); // tambem podemos armazenar o item removido

letters.unshift("d", "e", "f"); // adicionando elementos ao inicio do array
letters.unshift("g"); // podemos adicionar apenas um elemento ao inicio do array

// Metodos de array: indexOf e lastIndexOf 
// O metodo indexOf nos permite encontrar o indice de um elemento, que passamos como argumento para o metodo
// ja o lastIndexOf e utilizado quando ha repeticoes de elementos e precisamps do indice da ultima ocorrencia
const myElements = ["morango",, "maca", "abacate", "pera", "abacate"];
console.log(myElements.indexOf("maca")); // recebo o indice o item maca, que no caso  e 1
console.log(myElements.indexOf("abacate")); // retorna dois indices, pois abacate aparece duas vezes

console.log(myElements[2]); //  esta e a de baixo retornam a mesma coisa, a de cima esta basicamente simplificada, pois eu ja
console.log(myElements[myElements.indexOf("abacate")]); // "sabia" o indice do abacate...

console.log(myElements.lastIndexOf("abacate")); // retorna o indice 4, pois e a ultima vez em que o item abacate aparece no array
// e se o elemento nao existir? e retorado o valor -1 (tanto no indexOf quanto no lastIndexOf)

// Metodos de array: slice
// o metodo slice e utilizado para extrair um array menor de um array maior
// o intervalo de elementos e determinado pelos parametros, que sao os indices de inicio e os indices de fim
// o ultimo elemento e ignorado, se quisermos ele devemos somar 1 ao indice final
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray); // retorna "c" e "d"
console.log(testeSlice); // nao modifica o array original, ele fica intacto

const subArray2 = testeSlice.slice(2, 4 + 1); // retorna "c", "d", "e"
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3); // retorna uma lista vazia

const subArray4 = testeSlice.slice(2);
console.log(subArray4); // retorna todos os elementos a partir do indice 2

// Metodos de array: forEach
// o forEach e como uma estrutura for ou while, porem e um metodo
// ele percorre cada um dos elementos do array
// para alguns sua sintaxe pode ser mais simples
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(numero) // funciona basicamente como um for...
});

const posts = [
    {title: "primeiro post", category: "php"},
    {title: "segundo post", category: "javascript"},
    {title: "terceiro post", category: "python"},
];

posts.forEach((post) => {
    console.log(post.title, post.category); // funciona basicamente como um for...
});

// Metodos de array: includes
// o metodo includes verifica se o array tem um elemento
// utilizamos no array e como argumento colocamos o elemento que buscamos
const brands = ["bmw", "vw", "fiat"];
console.log(brands.includes("fiat")); // retorna um boolean, no caso retorna true
console.log(brands.includes("xyz")); // retorna um boolean, no caso retorna false

// Metodos de array: reverse
// o metodo reverse inverte os elementos de um array
// este metodo modifica o array original, entao tome cuidado
const reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse(); 
console.log(reverseTest); // o array original foi invertido

// Sobre os metodos de string
// as strings tambem sao objetos, ou seja, tem metodos e propriedades
// alguns sao muito semelhantes aos de arary
// nota que voce pode utilizar um lenght em uma string ou em um array
// e tambem acessar cada caractere pelo seu indice

// Metodos de string: trim
// o trim remove tudo do texto que nao e uma string
// como: caracteres especiais e espacos em branco
// um metodo interessante para utilizar em sanitizacao de dados
// o metodo nao modifica o texto original
const trimTest =  "    testando   /n  ";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// Metodos de string: padStart
// o metodo padStart insere um texto no comeco da string
// o texto pode ser repetido, de acord com o segundo argumento ao metodo, ele 
// determina o maximo de caracteres do texto alvo
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0") // a string nova tera 4 digitos e eu quero preencher o que falta com "0"

console.log(testePadStart); // retorna 1
console.log(newNumber); // retorna 0001

const testePadEnd = newNumber.padEnd(4, "0") // a string nova tera 4 digitos e eu quero preencher o que falta com "0", porem o preenchimento ao contrario
console.log(testePadEnd); // retorna 1000

// Metodos de string: split
// o split divide um string em um array
// cada lemento sera determinado por um separador em comum
// os mais utilizados sao: ponto e virgula, virgula e espaco
const frase = "o rato roeu a roupa do rei de roma";
const arrayDaFrase = frase.split(" "); // divide em elementos de um array de acordo com os espacos
console.log(arrayDaFrase); // retorna um array com ["o", "rato", "roeu".....]

// Metodos de string: Join
// ja o joi une um array em uma string
// podemos colocar um separador tambem, para formatar a string
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo); //retorna "O rato roeu a roupa do rei de roma", que antes estava em um array

const itensParaComprar = ["mouse", "teclado", "monitor"];
const fraseDeCompra = itensParaComprar.join(", "); // retorna "mouse, teclado, monitor"

// Metodos de string: repeat
// o metodo repeat repete um texto n vezes
// onde o n e o numero que colocamos em seu argumento
const palavra = "testando";
console.log(palavra.repeat(5)); // retorna testando testando testando testando testando

// Rest Operator / Rest Parameters
// Rest Operator e caracterizado pelo simbolo ...
// podemos utiliza-lo para receber indefinidos argumentos em uma funcao
// assim, nao precisamos declarar exatamente o que vamos receber, deixando a funcao mais ampla
const somaInfinita = (...args) => { // pode receber um numero infinito de argumentos...
    let total = 0;

    for(let i = 0; i < args.length(); i++) {
        total += args[i];
    }
    return total;
};
console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 1212, 1239123, 123123));

// Estrutura de repeticao: for...of
// o for...of e uma estrutura de repeticao semalhante ao for, porem, mais simples
// o numero de repeticao e baseado no array utilizado
// e podemos nos referir aos elementos sem precisar acessar o indice deles
const somaInfinita2 = (...args) => {

    let total = 0;

    for(num of args) {
        total += num;
    }
    return total;
}

console.log(somaInfinita2(1, 2, 4));

// Destructuring em objetos
// o destructuring e uma funcionalidade que nos permite desestruturar algum dado
// no caso dos objetos, e possivel criar variaveis a partir de suas propriedades, com uma simples sintaxe
const userDetails = {
    firstName: "Lucas",
    lastName: "Carvalho",
    job: "Programador"
};

const {firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job); // retorna Lucas, Carvalho e Programador

// renomear variaveis
const {firstName: primeiroNome} = userDetails;
console.log(firstName); // retorna Lucas
console.log(asd); // cuidado: retorna "undefined" e cria uma variavel vazia

// Destructuring em arrays
// o destructuring tambem pode ser utilizado para desestruturar um array em variaveis
// a sintaxe e um pouco diferente, agora utilizaremos colchetes, e nao temos nomes das chaves
const myList = ["Aviao", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC); // retorna Aviao Submarino Carro

// JSON
// O JSON, JavaScript Object Notation, e um dado em formato de texto
// utilizamos para comunicacao entre API e front-end
// sua formatacao e rigorosa, se for mal feira o dado e invalidado e nao conseguimos comunicacao
// seu formato lembra os object literals
// regras: apenas aspas duplas e nao aceita comentarios
const myJson = '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'; // nao possui utilidade nenhuma neste formato

// JSON para objeto e objeto para JSON
// Na maioria das vezes vamos precisar converter objetos para JSON
// Ou um JSON para um objeto JavaScript valido
// utilizamos o objeto JSON e os metodos stringify e parse
const myObject = JSON.parse(myJson);
console.log(myObject); // agora sim, e um objeto JavaScript normal e possui diversas utilizades

const badJson = '{"name": Matheus}'
const myBadObject = JSON.parse(badJson); // retorna um erro, pois a nao e possivel realizar a conversao
console.log(myBadObject);

// Convertendo o dado para enviar o JSON para a API: 
const myNewJson = JSON.stringify(myObject); // convertido.. -> agora ele pode ir para a API em formato de texto

