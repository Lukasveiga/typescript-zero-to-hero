// Exemplo 01:
let contadorUsuario = 0;
const usuario: string[] = ["Lukas", "Veiga", "Natalia"];

while (usuario[contadorUsuario]) {
  console.log(`Usuário: ${usuario[contadorUsuario]}`);
  contadorUsuario++;
}

// Exemplo 02:
let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
