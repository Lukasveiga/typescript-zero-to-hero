// => Exemplo 01: Uso de Colchetes
let frutas: string[] = ["banana", "abacaxi", "uva", "maçã"];
console.log(frutas[0]);

// => Exemplo 02: Array Object
let frutas1: Array<string> = ["banana", "abacaxi", "uva", "maçã"];
console.log(frutas1[0]);

// => Exemplo 03: Adicionando mais string com o método 'push'
let idiomas: Array<string> = ["Potuguês", "Espanhol", "Frânces", "Inglês"];
console.log(idiomas);

idiomas.push("Alemão");
console.log(idiomas);

idiomas.push("Italiano");
console.log(idiomas);

// Exemplo 04: Array com Spread Operator
let listaNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(listaNumeros);
listaNumeros = [...listaNumeros, 7, 8, 9, 10];
console.log(listaNumeros);

// Exemplo 05: Array com laço de iteração
let linguagensArray: Array<string> = ["Java", "Javascript", "Python", "Ruby"];

function funcaoLinguagens(linguagens: string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
  }
}

funcaoLinguagens(linguagensArray);
