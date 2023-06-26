// Exemplo 01: Tipo Any
const a: any = 26;
const b: any = ["Lukas"];

const result = a + b;
console.log(result);

// Exemplo 02: Implicitamente
let frase;
frase = "Oi, pessoal! Tudo bem?";

console.log(frase);

// Exemplo 03: Quando devemos utiizar o type any?
const formulario: {
  [campoFormulario: string]: any;
} = {
  nome: "Lukas",
  sobrenome: "Veiga",
  idade: 26,
};

console.log(formulario);
