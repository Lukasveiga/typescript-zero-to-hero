export {};

// Exemplo 01:
const numeroMax = 100;
let contador = 100;

if (contador < numeroMax) {
  contador++;
}

console.log(contador);

// Exemplo 02:
const permissaoIdadeDirigir = 18;
const idade = 18;

if (idade >= permissaoIdadeDirigir) {
  console.log("Habilitado para dirigir");
} else {
  console.log("Não está habilitado para dirigir");
}
