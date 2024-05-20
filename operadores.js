// 1 - number - todo dado numerico e considerado um number 
console.log(typeof 2);

console.log(typeof -102);

console.log(typeof .02);

console.log(typeof "asas"); // -- string 


// 2 - operacoes aritmeticas (+ -  * / ) -- A ordem matematica e respeitada na programacao 
console.log(2 + 5);

console.log(6 - 5);

console.log(5 * 4);

console.log(18/9);

// 3 - Special numbers -- Infinity, -Infinity, NaN(not a number)
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(typeof 12 * "asd");

// 4 - Tipo string - existem tres maneiras de criar dados de texto - aspas simples, duplas e crase
// cada maneira tem suas particularidades, porem, o  efeito final e o mesmo...
console.log("texto 1")

console.log('texto 2')

console.log("eu deveria usar uma crase, mas nao tem neste teclado")

// 5 - Caracteres especiais -- o \n que serve para pular uma linha no texto e o \t da um paragrafo na linha 
console.log("meu nome e \n lucas")

console.log("paragrafo na \t linha")

// 6 - Concatenacao - unir dois ou mais textos com o operador "+"
console.log("Oi, " + "tudo " + "bem?")

// 7 - Interpolacao - recurso semelhante a concatenacao, permite escrever tudo na mesma string - deve ser escrita entre crases
// (como uma f'string no python)
console.log(`A soma de 2 + 2 e: ${2 + 2 }`)

// 8 - Booleans - retornam apenas dois valores, True ou False, qualquer comparacao com < > == resulta em um booleano
console.log(true);

console.log(false)

console.log(5 == 6)

// 9 - Comparacoes -- Maior e menor ( >< ), igual (=), diferente (!=) e identico (===)
console.log(5 <= 5);

console.log(5 == 5 );

console.log(5 === 5);

console.log(10 != 9);

// 10 - Comparacao de valor identico (===) e (!==)
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

//11 - Operadores logicos - Servem para unir duas ou mais comparacoes - O resultado final tambem e um boolean
//  &&  - And -  True apenas se os dois lados resultarem em verdadeiro 
// || - Or - para resultar verdadeiro, e necessario que apenas um lado  resulte verdadeiro
// ! - Not - este operador inverte a comparacao

// 12 operadores logicos na pratica

console.log(true && true) // retorna true
console.log(true && false) // retorna false

console.log(5 > 2  && 2 < 10) // retorna true

// OR

console.log(2 > 1 || "lucas" === 1  ) // retorna true, pois precisa que apenas um lado seja verdadeiro

// ! 
console.log(!true) // retorna falso pois inverte o valor...

console.log(!5> 2) // continua retornando falso pois inverte o valor 

// 13 - Empty values 

console.log(typeof null, typeof undefined) // null e undefined sao iguais pois possuem o mesmo valor(nao possuem valor), porem nao sao identicos

// 14 - Mudanca de tipos

console.log(5 * null)

console.log("10" + 1 )
console.log("10" - 1)// podemos observar a diferenca entre ambos, um deles tenta concatenar -- ficar atento a isso!





