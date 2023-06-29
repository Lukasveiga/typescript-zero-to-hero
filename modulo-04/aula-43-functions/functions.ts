export {};

// Exemplo 01: Named function
function somarDoisValores(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

console.log(somarDoisValores(2, 2));

// Exemplo 02: Anonymous function
const saudar = function (mensagem: string) {
  return mensagem;
};

console.log(saudar("Hello World!"));

// Exemplo 03: Arrow functions
const saudar03 = (mensagem: string) => {
  return mensagem;
};

console.log(saudar03("Hello World!"));

// Exemplo 04: Function constructor
const saudar04 = new Function("mensagem", 'return "Fala " + mensagem');

console.log(saudar04("Galera"));
