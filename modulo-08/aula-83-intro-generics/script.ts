export {};

// Exemplo 01: Generics
function retornarElementoRandomico<T>(items: T[]): T {
  let itemRandomico = Math.floor(Math.random() * items.length);
  return items[itemRandomico];
}

let numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(retornarElementoRandomico(numeros));

let nomes = ["João", "Ana", "Julia", "Lukas", "Natalia"];

console.log(retornarElementoRandomico(nomes));

// Exemplo 02:
function exibirElementos<T>(array: T[]): void {
  array.forEach((elemento) => {
    console.log(elemento);
  });
}

let numeros2 = [1, 2, 3, 4, 5];
let nomes2 = ["João", "Ana", "Julia", "Lukas", "Natalia"];

exibirElementos<number>(numeros2);
exibirElementos<string>(nomes2);
