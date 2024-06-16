// O que e a orientacao a objetos?
// e um paradigma de programacao, ou  seja, uma outra forma de programar
// utilizando objetos como seu principal principio
// a maioria dos softwares e desenvolvida nesse paradigma
// frameworks e bibliotecas de front-end tambem  sao desenvolvidas em POO

// Metodos
// metodos podem ser adicionados aos objetos
// eles sao como propriedades, mas contem uma funcao
// invocamos metodos do mesmo modo que funcoes

const animal = {
    nome: "bob",
    latir: function() {
        console.log("auau");
    }
};
console.log(animal.nome);
animal.latir();

// Aprofundando em metodos
// os metodos sao utilizados para interagir tambem
// com as propriedades do seu objeto
// podemos exibir elas ou modifica-las
// podemos nos referenciar com o proprio objeto com
// a palavra reservada "this"

const pessoa = {
    nome: "Matheus",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    }
};
console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Joaquim");
console.log(pessoa.getNome());

// Prototype
// e um recurso que faz parte da arquitetura JavaScript
// e uma especie de heranca, onde objetos pais  herdam
// propriedades e metodos aos filhos
// por isso muitos dados sao considerados objetos e temos
// objetos como string, number e outros
// Ou seja, cada dado tem um objeto pai herdou
// caracteristicas pelo prototype

// Prototype na pratica
// um recurso fundamental do mesmo que temos que
// entender e o fallback
// quando uma propriedade nao existe em um dado/objeto, ela
// e procurada em seu ancestral
// ou seja, e por isso que temos acessoa length em strings

const text = "asd"
console.log(Object.getPrototypeOf(text)); // retorna string

const bool = true;
console.log(Object.getPrototypeOf(bool)); // retorna boolean

const arr = [];
console.log(Object.getPrototypeOf(arr)); // retorna array

// Mais sobre Prototype
// quando criamos um objeto a partir de outro, este outro
// sera o prototype do objeto criado
// Porem tambem herdara as caracteristicas do objeto pai, se 
// for um objeto herda de Objetct
// esta e a cadeia do prototype

const myObject = {
    a: "b",
};
console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype) // retorna true

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);

console.log(mySecondObject.a); // eu consigo acessar a propriedade dele, sem te-lo criado!
console.log(Object.getPrototypeOf(mySecondObject) === myObject) // retorna true

// Classes Basicas
// os prototypes sao originados de uma Classe
// que e o molde dos objetos, nela definimos os metodos
// e propriedades 
// JavaScript ja possui suas classes, porem podemos criar
// as nossas
// Isso e essencial para a orientacao a objetos

const cachorro = {
    raca: null,
    patas: 4, 

}
const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemao";
console.log(pastorAlemao); // agora a raca deixa de ser nula e passa a ser pastor alemao em um objeto filho
console.log(pastorAlemao.patas); // ele usa uma propriedade do fallback, ou seja, procura o que eu pedi no objeto pai

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// Classes baseadas em funcoes construtoras
// utilizando funcoes como classes, conseguimos iniciar
// as propriedades com a criacao do objeto
// chamamos de este recurso de funcao construtora
// o construtor tem como objetivo instanciar um objeto, ou seja
// criar um novo objeto

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}
const bob = criarCachorro("Bob", "viralata");
console.log(bob);

const jack = criarCachorro("jack", "poodle");
console.log(jack);

// Continuacao Classes baseadas em funcoes
// este recurso e semelhante ao anterior, mas com uma 
// nova plataforma chave: a NEW
// em varias linguagens o new e utilizado para instanciar 
// novos objetos,  es JS isso tambem acontece
// e eles podem partir de funcoes

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// Classes de funcao com metodos 
// para adicionar metodos antes da criacao do objeto,
// podemos acessar o prototype e coloca-los la;
// esta e basicamente a essencia de JavaScript
// porem com a evolucao da linguagem, outros recursos foram
// criados, e o que veremos nas proximas aulas

Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuuuuuuuu!");
}

husky.uivar();

// Classes ES6 --> metodo mais atual que os anteriores
// nas versoes mais atuais de JS abandonamos as functions
// e utilizamos as classes 
// aqui temos recursos comuns em outras linguagens, como o
// constructor
// alem da instancia por new

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "labrador");
console.log(jeff);

// Mais sobre Classes
// nao podemos adicionar propriedades diretamente as classes
// isto precisa ser feito ao inicia-la ou via prototype
// metodos da classe tambem podem utilizar this para se 
// referir ao objeto instanciado
// os metodos nao precisam da palavra function

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }
    
    descreverCaminhao() {
        console.log(`Este caminhao tem ${this.eixos} e e da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania); // ainda nao utiliza a descricao do caminhao
scania.descreverCaminhao(); // agora descreve o caminhao

// Caminhao.motor = 4 // nao funciona!

Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "Azul");
console.log(c3.motor); // retorna 4

// Override nas propriedades via Prototype
// as instancias dos objetos sao criadas baseadas nas classes
// ou seja, as propriedades tem os valores definidos no 
// constructor ou por metodos
// para altera-los podemos utilizar o prototype

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

Humano.prototype.idade = "Nao definida";

console.log(matheus.idade);

console.log(Humano.prototype.idade);

// Symbols em Classes
// quando utilizamos o recurso de Symbol com classe, e possivel
// criar uma propriedade unica e imutavel
// isso e util quando ha algum dado que se repetira em 
// todos os objetos criados a partir da classe

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbina = turbinas;
    }
}

const asas = Symbol()

const pilotos = Symbol()

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 10);


console.log(boeing); // ainda nao aparece o symbol

console.log(boeing[asas]); // retorna 2

console.log(boeing[pilotos]); // rentorna 3

// Getters e Setters
// os getter e setters sao bem famosos na orientacao a objetos
// o get e um metodo utilizado para exibir o valor de alguma
// propriedade
// e o set e utilizado para alterar o valor;
// Atraves de metodos, temos um  bloco de codigo para 
// transformacao de dados

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;

    }

    get exibirTitulo() {
        return `Voce esta lendo ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray
    }
}

const myPost = new Post("algum post", "e um post sobre programacao");
console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, javascript, js";
console.log(myPost);

// Heranca 
// uma classe pode herdar propriedades de outra, por meio 
// de heranca;
// Utilizamos a palavra chave extens, para adicionar a classe 
// que vai trazer as propriedades;
// E super para enviar os valores para a classe pai

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas,nome) {
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "shark");
console.log(shark);
console.log(shark.patas);

// Operador instanceof
// assim como typeof que verifica o tipo, temos o operador instanceof
// que verifica se um objeto e pai do outro, para ter 
// certeza da ancestralidade;
// isto e verificado com objeto => classe, e nao atraves das classes

console.log(shark instanceof Lobo); // retorna  true

console.log(Lobo instanceof Mamifero); // retorna false

console.log(new Lobo(4, "teste") instanceof Mamifero); // retorna true

console.log(new Post("a", "b") instanceof Lobo); // retorna false