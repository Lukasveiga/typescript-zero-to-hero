export {};

// Exemplo 01: usando 'as'
const nome: unknown = "Lukas Veiga";
console.log((nome as String).toUpperCase());
console.log(nome);

// Exemplo 01: '<>'
const carro: unknown = "Corrola";
console.log((<string>carro).length);
